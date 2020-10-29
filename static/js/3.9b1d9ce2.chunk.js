(this["webpackJsonpgoit-react-hw-08"]=this["webpackJsonpgoit-react-hw-08"]||[]).push([[3],{127:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(8);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},128:function(e,t,r){"use strict";var n=r(30);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)),o=(0,n(r(36)).default)(a.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},134:function(e,t,r){"use strict";r.r(t);var n=r(47),a=r(48),o=r(50),c=r(49),p=r(0),u=r.n(p),i=r(12),l=r(8),s=r(27),f=r.n(s),m=r(40),b=r(25),h=r.n(b),d=r(33);h.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var y={addContact:function(e){var t=e.name,r=e.number;return function(){var e=Object(m.a)(f.a.mark((function e(n){var a,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(d.b)()),e.prev=1,e.next=4,h.a.post("/contacts",{name:t,number:r});case 4:a=e.sent,o=a.data,n(Object(d.c)(o)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(d.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},fetchContacts:function(){return function(){var e=Object(m.a)(f.a.mark((function e(t){var r,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(d.f)()),e.prev=1,e.next=4,h.a.get("/contacts");case 4:r=e.sent,n=r.data,t(Object(d.g)(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(Object(d.e)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},removeContact:function(e){return function(){var t=Object(m.a)(f.a.mark((function t(r){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(Object(d.i)()),t.prev=1,t.next=4,h.a.delete("/contacts/".concat(e));case 4:r(Object(d.j)(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),r(Object(d.h)(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()}},v=function(e,t){return e.find((function(e){return e.name===t}))},O=function(e){Object(o.a)(r,e);var t=Object(c.a)(r);function r(){var e;Object(n.a)(this,r);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={name:"",number:""},e.handleChange=function(t){var r=t.target,n=r.name,a=r.value;v(e.props.items,a)?alert("".concat(a," is already in contacts!!!")):e.setState(Object(l.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault(),e.props.onAddContact(e.state)},e}return Object(a.a)(r,[{key:"render",value:function(){var e=this.state,t=e.name,r=e.number;return u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement("form",{onSubmit:this.handleSubmit},u.a.createElement("label",{htmlFor:"name"},"Name",u.a.createElement("br",null),u.a.createElement("input",{type:"text",value:t,onChange:this.handleChange,name:"name"})),u.a.createElement("label",{htmlFor:"number"},"Number",u.a.createElement("br",null),u.a.createElement("input",{type:"text",value:r,onChange:this.handleChange,name:"number"})),u.a.createElement("button",{type:"submit"},"Add contact")))}}]),r}(p.Component),g={onAddContact:y.addContact},j=Object(i.b)((function(e){return e.contacts}),g)(O),C=r(19),w=function(e){return e.contacts.items},x=function(e){return e.contacts.filter},E={getVisibleContacts:Object(C.a)([x,w],(function(e,t){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),getFilter:x,getContacts:w,getContactById:function(e,t){return w(e).find((function(e){return e.id===t}))}},P={onChangeFilter:d.d},k=Object(i.b)((function(e){return{contacts:e.contacts.items,value:E.getFilter(e)}}),P)((function(e){var t=e.contacts,r=e.value,n=e.onChangeFilter;return t.length>0?u.a.createElement("div",null,u.a.createElement("span",null,"Find name: "),u.a.createElement("input",{type:"text",value:r,onChange:function(e){return n(e.target.value)}})):null})),K=r(127),S=r(124),A=r(1),F=r(123),N=r(51);var T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(F.a)(e,Object(A.a)({defaultTheme:N.a},t))},R=r(128),z=r.n(R),D=r(29),I=(r(10),r(37));var B=function(e){var t=function(t){var r=e(t);return t.css?Object(A.a)(Object(A.a)({},Object(I.a)(r,e(Object(A.a)({theme:t.theme},t.css)))),function(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat(Object(D.a)(e.filterProps)),t};var H=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=function(e){return t.reduce((function(t,r){var n=r(e);return n?Object(I.a)(t,n):t}),{})};return n.propTypes={},n.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),n},M=r(32),G=r(62);function L(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var V=function(e){var t=e.prop,r=e.cssProperty,n=void 0===r?e.prop:r,a=e.themeKey,o=e.transform,c=function(e){if(null==e[t])return null;var r=e[t],c=L(e.theme,a)||{};return Object(G.a)(e,r,(function(e){var t;return"function"===typeof c?t=c(e):Array.isArray(c)?t=c[e]||e:(t=L(c,e)||e,o&&(t=o(t))),!1===n?t:Object(M.a)({},n,t)}))};return c.propTypes={},c.filterProps=[t],c};function W(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var J=H(V({prop:"border",themeKey:"borders",transform:W}),V({prop:"borderTop",themeKey:"borders",transform:W}),V({prop:"borderRight",themeKey:"borders",transform:W}),V({prop:"borderBottom",themeKey:"borders",transform:W}),V({prop:"borderLeft",themeKey:"borders",transform:W}),V({prop:"borderColor",themeKey:"palette"}),V({prop:"borderRadius",themeKey:"shape"})),_=H(V({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),V({prop:"display"}),V({prop:"overflow"}),V({prop:"textOverflow"}),V({prop:"visibility"}),V({prop:"whiteSpace"})),U=H(V({prop:"flexBasis"}),V({prop:"flexDirection"}),V({prop:"flexWrap"}),V({prop:"justifyContent"}),V({prop:"alignItems"}),V({prop:"alignContent"}),V({prop:"order"}),V({prop:"flex"}),V({prop:"flexGrow"}),V({prop:"flexShrink"}),V({prop:"alignSelf"}),V({prop:"justifyItems"}),V({prop:"justifySelf"})),q=H(V({prop:"gridGap"}),V({prop:"gridColumnGap"}),V({prop:"gridRowGap"}),V({prop:"gridColumn"}),V({prop:"gridRow"}),V({prop:"gridAutoFlow"}),V({prop:"gridAutoColumns"}),V({prop:"gridAutoRows"}),V({prop:"gridTemplateColumns"}),V({prop:"gridTemplateRows"}),V({prop:"gridTemplateAreas"}),V({prop:"gridArea"})),Q=H(V({prop:"position"}),V({prop:"zIndex",themeKey:"zIndex"}),V({prop:"top"}),V({prop:"right"}),V({prop:"bottom"}),V({prop:"left"})),X=H(V({prop:"color",themeKey:"palette"}),V({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),Y=V({prop:"boxShadow",themeKey:"shadows"});function Z(e){return e<=1?"".concat(100*e,"%"):e}var $=V({prop:"width",transform:Z}),ee=V({prop:"maxWidth",transform:Z}),te=V({prop:"minWidth",transform:Z}),re=V({prop:"height",transform:Z}),ne=V({prop:"maxHeight",transform:Z}),ae=V({prop:"minHeight",transform:Z}),oe=(V({prop:"size",cssProperty:"width",transform:Z}),V({prop:"size",cssProperty:"height",transform:Z}),H($,ee,te,re,ne,ae,V({prop:"boxSizing"}))),ce=r(125),pe=H(V({prop:"fontFamily",themeKey:"typography"}),V({prop:"fontSize",themeKey:"typography"}),V({prop:"fontStyle",themeKey:"typography"}),V({prop:"fontWeight",themeKey:"typography"}),V({prop:"letterSpacing"}),V({prop:"lineHeight"}),V({prop:"textAlign"})),ue=r(3),ie=r(9),le=r(26),se=r.n(le);function fe(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}var me=function(e){var t=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.name,a=Object(ue.a)(r,["name"]);var o,c=n,p="function"===typeof t?function(e){return{root:function(r){return t(Object(A.a)({theme:e},r))}}}:{root:t},i=Object(F.a)(p,Object(A.a)({Component:e,name:n||e.displayName,classNamePrefix:c},a));t.filterProps&&(o=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var l=u.a.forwardRef((function(t,r){var n=t.children,a=t.className,c=t.clone,p=t.component,l=Object(ue.a)(t,["children","className","clone","component"]),s=i(t),f=Object(ie.a)(s.root,a),m=l;if(o&&(m=fe(m,o)),c)return u.a.cloneElement(n,Object(A.a)({className:Object(ie.a)(n.props.className,f)},m));if("function"===typeof n)return n(Object(A.a)({className:f},m));var b=p||e;return u.a.createElement(b,Object(A.a)({ref:r,className:f},m),n)}));return se()(l,e),l}}(e);return function(e,r){return t(e,Object(A.a)({defaultTheme:N.a},r))}},be=B(H(J,_,U,q,Q,X,Y,oe,ce.b,pe)),he=me("div")(be,{name:"MuiBox"}),de=T((function(e){return{button:{margin:e.spacing(1)}}})),ye=Object(i.b)((function(e,t){return Object(K.a)({},E.getContactById(e,t.id))}),(function(e,t){return{onRemove:function(){return e(y.removeContact(t.id))}}}))((function(e){var t=e.name,r=e.number,n=e.onRemove,a=de();return u.a.createElement("li",null,u.a.createElement(he,{display:"flex",justifyContent:"space-between",width:"500px",boxShadow:1},u.a.createElement("span",{className:"name"},t,": ",r),u.a.createElement(S.a,{variant:"contained",className:a.button,color:"secondary",startIcon:u.a.createElement(z.a,null),size:"small",onClick:n},"Delete")))})),ve=Object(i.b)((function(e){return{contacts:E.getVisibleContacts(e)}}))((function(e){var t=e.contacts;return t.length>0?u.a.createElement("ul",null,t.map((function(e){var t=e.id;return u.a.createElement(ye,{key:t,id:t})}))):null})),Oe=function(e){Object(o.a)(r,e);var t=Object(c.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(j,null),u.a.createElement("h2",null,"Contacts"),u.a.createElement(k,null),u.a.createElement(ve,null))}}]),r}(p.Component),ge={onFetchContacts:y.fetchContacts};t.default=Object(i.b)(null,ge)(Oe)}}]);
//# sourceMappingURL=3.9b1d9ce2.chunk.js.map