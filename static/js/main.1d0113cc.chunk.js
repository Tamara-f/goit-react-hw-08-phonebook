(this["webpackJsonpgoit-react-hw-08"]=this["webpackJsonpgoit-react-hw-08"]||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(24),u=n.n(c),o=n(12),s=n(64),i=n(47),l=n(48),b=n(50),f=n(49),d=n(21),m=n(5),g=n(122),p=n(14),h=n(65),j=n.n(h),O=n(66),v=n.n(O),E=Object(o.b)((function(e){return{isAuthenticated:p.b.isAuthenticated(e)}}))((function(e){var t=e.isAuthenticated;return a.a.createElement("nav",null,a.a.createElement(d.b,{to:"/",exact:!0,className:"nav",activeClassName:"active-nav"},a.a.createElement(j.a,null)," ",a.a.createElement("span",null,"Home")),t&&a.a.createElement(d.b,{to:"/contacts",className:"nav",activeClassName:"active-nav"},a.a.createElement(v.a,null)," ",a.a.createElement("span",null,"Contacts")))})),y=n(124),k={marginRight:"10px"},C=Object(o.b)((function(e){return{name:p.b.getUserName(e),avatar:"https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_960_720.png"}}),{onLogout:p.a.logOut})((function(e){var t=e.avatar,n=e.name,r=e.onLogout;return a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{style:k,src:t,alt:"",width:"32"}),a.a.createElement("span",{style:k}," Welcome, ",n),a.a.createElement(y.a,{variant:"contained",size:"small",color:"secondary",onClick:r},"Logout"))})),S=n(67),x=n.n(S),R=n(68),A=n.n(R),U=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(d.b,{to:"/register",className:"nav",activeClassName:"active-nav"},a.a.createElement(x.a,null),a.a.createElement("span",null," Register")),a.a.createElement(d.b,{to:"/login",className:"nav",activeClassName:"active-nav"},a.a.createElement(A.a,null),a.a.createElement("span",null,"Login")))},q={container:{display:"flex",alignItems:"center"},header:{display:"flex",justifyContent:"space-between",alignItems:"center"}},w=Object(o.b)((function(e){return{isAuthenticated:p.b.isAuthenticated(e)}}))((function(e){var t=e.isAuthenticated;return a.a.createElement("header",{style:q.header},a.a.createElement(E,null),a.a.createElement("div",{style:q.container},t?a.a.createElement(C,null):a.a.createElement(U,null)))}));var N,z=function(e){var t=e.children;return a.a.createElement("section",null,a.a.createElement(w,null),a.a.createElement("hr",null),t)},L=n(42),I=Object(o.b)((function(e){return{isAuthenticated:p.b.isAuthenticated(e)}}))((function(e){var t=e.component,n=e.isAuthenticated,r=Object(L.a)(e,["component","isAuthenticated"]);return a.a.createElement(m.b,Object.assign({},r,{render:function(e){return n&&r.restricted?a.a.createElement(m.a,{to:"/contacts"}):a.a.createElement(t,e)}}))})),B=Object(o.b)((function(e){return{isAuthenticated:p.b.isAuthenticated(e)}}))((function(e){var t=e.component,n=e.isAuthenticated,r=Object(L.a)(e,["component","isAuthenticated"]);return a.a.createElement(m.b,Object.assign({},r,{render:function(e){return n?a.a.createElement(t,e):a.a.createElement(m.a,{to:"/login"})}}))})),F=[{path:"/",label:"Home",exact:!0,component:Object(r.lazy)((function(){return n.e(6).then(n.bind(null,131))})),private:!1,restricted:!1},{path:"/register",label:"Register",exact:!0,component:Object(r.lazy)((function(){return n.e(5).then(n.bind(null,132))})),private:!1,restricted:!0},{path:"/login",label:"Login",exact:!0,component:Object(r.lazy)((function(){return n.e(4).then(n.bind(null,133))})),private:!1,restricted:!0},{path:"/contacts",label:"Contacts",exact:!0,component:Object(r.lazy)((function(){return n.e(3).then(n.bind(null,134))})),private:!0,restricted:!1}],G=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return a.a.createElement(d.a,null,a.a.createElement(z,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("h1",null,a.a.createElement(g.a,null))},a.a.createElement(m.d,null,F.map((function(e){return e.private?a.a.createElement(B,Object.assign({key:e.label},e)):a.a.createElement(I,Object.assign({key:e.label},e))}))))))}}]),n}(r.Component),H=Object(o.b)(null,{onGetCurrentUser:p.a.getCurrentUser})(G),J=n(2),_=n(28),D=n(69),M=n.n(D),W=n(8),K=n(70),P=n(7),Q=n(33),T=Object(J.c)([],(N={},Object(W.a)(N,Q.g,(function(e,t){return t.payload})),Object(W.a)(N,Q.c,(function(e,t){var n=t.payload;return[].concat(Object(K.a)(e),[n])})),Object(W.a)(N,Q.j,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),N)),V=Object(J.c)("",Object(W.a)({},Q.d,(function(e,t){return t.payload}))),X=Object(P.c)({items:T,filter:V}),Y=n(39),Z={key:"auth",storage:M.a,whitelist:["token"]},$=Object(J.a)({reducer:{contacts:X,auth:Object(_.e)(Z,Y.a)},middleware:Object(J.d)({serializableCheck:{ignoredActions:[_.a,_.d,_.b,_.c]}})}),ee=Object(_.f)($);n(104);u.a.render(a.a.createElement(o.a,{store:$},a.a.createElement(s.a,{loading:null,persistor:ee},a.a.createElement(H,null))),document.getElementById("root"))},14:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(27),a=n.n(r),c=n(40),u=n(25),o=n.n(u),s=n(4);o.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var i=function(e){o.a.defaults.headers.common.Authorization="Bearer ".concat(e)},l=function(){o.a.defaults.headers.common.Authorization=""},b={register:function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(s.a.registerRequest()),t.prev=1,t.next=4,o.a.post("/users/signup",e);case 4:r=t.sent,c=r.data,n(s.a.registerSuccess(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(s.a.registerError(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logOut:function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(s.a.logoutRequest()),e.prev=1,e.next=4,o.a.post("/users/logout");case 4:n=e.sent,r=n.data,l(),t(s.a.logoutSuccess(r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t(s.a.logoutError(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(s.a.loginRequest()),t.prev=1,t.next=4,o.a.post("/users/login",e);case 4:r=t.sent,c=r.data,i(c.token),n(s.a.loginSuccess(c)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),n(s.a.loginError(t.t0)),alert("Incorrect login or password");case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(e,t){var n=t().auth.token;n&&(i(n),e(s.a.getCurrentUserRequest()),o.a.get("/users/current").then((function(t){var n=t.data;return e(s.a.getCurrentUserSuccess(n))})).catch((function(e){return s.a.getCurrentUserError(e)})))}}},f={isAuthenticated:function(e){return e.auth.token},getUserName:function(e){return e.auth.user.name}};n(39)},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"i",(function(){return l})),n.d(t,"j",(function(){return b})),n.d(t,"h",(function(){return f})),n.d(t,"d",(function(){return d}));var r=n(2),a=Object(r.b)("contacts/addRequest"),c=Object(r.b)("contacts/addSuccess"),u=Object(r.b)("contacts/addError"),o=Object(r.b)("contacts/fetchRequest"),s=Object(r.b)("contacts/fetchSuccess"),i=Object(r.b)("contacts/fetchError"),l=Object(r.b)("contacts/removeRequest"),b=Object(r.b)("contacts/removeSuccess"),f=Object(r.b)("contacts/removeError"),d=Object(r.b)("phonebook/filter")},39:function(e,t,n){"use strict";var r,a,c,u=n(8),o=n(7),s=n(2),i=n(4),l={name:null,email:null},b=Object(s.c)(l,(r={},Object(u.a)(r,i.a.registerSuccess,(function(e,t){return t.payload.user})),Object(u.a)(r,i.a.loginSuccess,(function(e,t){return t.payload.user})),Object(u.a)(r,i.a.getCurrentUserSuccess,(function(e,t){return t.payload})),Object(u.a)(r,i.a.logoutSuccess,(function(){return l})),r)),f=Object(s.c)(null,(a={},Object(u.a)(a,i.a.registerSuccess,(function(e,t){return t.payload.token})),Object(u.a)(a,i.a.loginSuccess,(function(e,t){return t.payload.token})),Object(u.a)(a,i.a.logoutSuccess,(function(){return null})),a)),d=Object(s.c)(null,(c={},Object(u.a)(c,i.a.registerError,(function(e,t){return t.payload})),Object(u.a)(c,i.a.loginError,(function(e,t){return t.payload})),Object(u.a)(c,i.a.logoutError,(function(e,t){return t.payload})),Object(u.a)(c,i.a.getCurrentUserError,(function(e,t){return t.payload})),c));t.a=Object(o.c)({user:b,token:f,error:d})},4:function(e,t,n){"use strict";var r=n(2),a=Object(r.b)("auth/registerRequest"),c=Object(r.b)("auth/registerSuccess"),u=Object(r.b)("auth/registerError"),o=Object(r.b)("auth/loginRequest"),s=Object(r.b)("auth/loginSuccess"),i=Object(r.b)("auth/loginError"),l=Object(r.b)("auth/logoutRequest"),b=Object(r.b)("auth/logoutSuccess"),f=Object(r.b)("auth/logoutError"),d=Object(r.b)("auth/getCurrentUserRequest"),m=Object(r.b)("auth/getCurrentUserSuccess"),g=Object(r.b)("auth/getCurrentUserError");t.a={registerRequest:a,registerSuccess:c,registerError:u,logoutRequest:l,logoutSuccess:b,logoutError:f,loginRequest:o,loginSuccess:s,loginError:i,getCurrentUserRequest:d,getCurrentUserSuccess:m,getCurrentUserError:g}},73:function(e,t,n){e.exports=n(105)}},[[73,1,2]]]);
//# sourceMappingURL=main.1d0113cc.chunk.js.map