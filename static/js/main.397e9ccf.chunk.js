(this["webpackJsonpreact-study"]=this["webpackJsonpreact-study"]||[]).push([[0],{10:function(e,t,n){e.exports={nav:"navbar_nav__1OQBS",loginBlock:"navbar_loginBlock__lk4Ol",isAuthBtn:"navbar_isAuthBtn__1Sz7G",navList:"navbar_navList__gxlS4",navItem:"navbar_navItem__8CEqP",navLink:"navbar_navLink__31R7O",activeLink:"navbar_activeLink__2nxZ7",disabledLink:"navbar_disabledLink__lYgMk"}},107:function(e,t,n){"use strict";t.a=n.p+"static/media/user.e8348d6f.png"},129:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(38),a=n(3),s="SEND_MESSAGE",c={messages:[{id:1,message:"Hi, how are you?"},{id:2,message:"Yo"},{id:3,message:"Hello world"}],dialogs:[{id:1,name:"Dimych"},{id:2,name:"Sveta"},{id:3,name:"Sasha"},{id:4,name:"Valera"},{id:5,name:"Andrey"}]},o=function(e){return{type:s,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{newMessageBody:"",messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i}));var r=n(132),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"e9bb7575-f3f2-43a8-ae9c-91b6f34b931d"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object"),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},o={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},14:function(e,t,n){e.exports={textareaBlock:"formControls_textareaBlock__KIaiB",textareaPost:"formControls_textareaPost__11wG7",addPost:"formControls_addPost__1i9K5",login:"formControls_login__dDr1S",inputPost:"formControls_inputPost__2V2rC",error:"formControls_error__bylv2",rememberCheckbox:"formControls_rememberCheckbox__2hbit",editForm:"formControls_editForm__2GZqQ",textError:"formControls_textError__1jr9b"}},166:function(e,t,n){},167:function(e,t,n){},25:function(e,t,n){e.exports={user:"users_user__2Ok6B",userItem:"users_userItem__36Zde",userItemLeft:"users_userItemLeft__3HTNa",userItemRight:"users_userItemRight__2Dyk9",userItemInfo:"users_userItemInfo__Uc6xm",fullName:"users_fullName__3E-cp",status:"users_status__3RMMX",userImg:"users_userImg__2RGkM"}},26:function(e,t,n){e.exports={formSummaryError:"login_formSummaryError__1CLBZ",login:"login_login__LTqq9",loginTitle:"login_loginTitle__2fPzR",testData:"login_testData__3gRPQ",testTitle:"login_testTitle__3xn1U",testLogin:"login_testLogin__7kF9W",testLoginText:"login_testLoginText__3kmrs"}},29:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return p}));var r=n(3),a=n(50),s=(n(0),n(14)),c=n.n(s),o=n(92),i=n(1),u=["input","meta"],l=["input","meta"],d=["input","meta"],f=function(e){var t=e.input,n=e.meta,s=n.touched,o=n.error,l=Object(a.a)(e,u),d=s&&o;return Object(i.jsxs)("div",{className:c.a.textareaBlock,children:[Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({className:d?c.a.textareaPost+" "+c.a.error:c.a.textareaPost},t),l)),d&&Object(i.jsx)("span",{className:c.a.textError,children:o}),Object(i.jsx)("button",{className:c.a.addPost,children:"Add"})]})},j=function(e){var t=e.input,n=e.meta,s=n.touched,o=n.error,u=Object(a.a)(e,l),d=s&&o;return Object(i.jsxs)("div",{className:c.a.login,children:[Object(i.jsx)("input",Object(r.a)(Object(r.a)({className:d?c.a.inputPost+" "+c.a.error:c.a.inputPost},t),u)),d&&Object(i.jsx)("span",{className:c.a.textError,children:o})]})},b=function(e){var t=e.input,n=e.meta,s=n.touched,o=n.error,u=Object(a.a)(e,d),l=s&&o;return Object(i.jsxs)("div",{className:c.a.rememberCheckbox,children:[Object(i.jsx)("input",Object(r.a)(Object(r.a)({type:"checkbox",className:l?c.a.inputCheckbox+" "+c.a.error:c.a.inputCheckBox},t),u)),Object(i.jsx)("span",{children:"remeber me"}),l&&Object(i.jsx)("span",{className:c.a.textError,children:o})]})},p=function(e,t,n,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(i.jsxs)("div",{children:[Object(i.jsx)(o.a,Object(r.a)({placeholder:e,name:t,component:a,validate:n},s)),c]})}},291:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(69),c=n.n(s),o=(n(166),n(41)),i=n(42),u=n(44),l=n(43),d=(n(167),n(12)),f=n(20),j=n(19),b=n(8),p=n.n(b),h=n(16),g=n(38),m=n(3),O=n(13),v=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(m.a)(Object(m.a)({},e),r):e}))},x="FOLLOW",_="UN_FOLLOW",w="SET_USERS",P="SET_CURRENT_PAGE",C="SET_TOTAL_USER_COUNT",N="TOGGLE_IS_FETCHING",k="TOGGLE_IS_FOLLOWING_PROGRESS",S={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},I=function(e){return{type:x,userId:e}},y=function(e){return{type:_,userId:e}},L=function(e){return{type:P,currentPage:e}},E=function(e){return{type:N,isFetching:e}},T=function(e,t){return{type:k,isFetching:e,userId:t}},U=function(){var e=Object(h.a)(p.a.mark((function e(t,n,r,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(T(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(T(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(m.a)(Object(m.a)({},e),{},{users:v(e.users,t.userId,"id",{followed:!0})});case _:return Object(m.a)(Object(m.a)({},e),{},{users:v(e.users,t.userId,"id",{followed:!1})});case w:return Object(m.a)(Object(m.a)({},e),{},{users:Object(g.a)(t.users)});case P:return Object(m.a)(Object(m.a)({},e),{},{currentPage:t.currentPage});case C:return Object(m.a)(Object(m.a)({},e),{},{totalUsersCount:t.count});case N:return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.isFetching});case k:return Object(m.a)(Object(m.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(g.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},F=n(50),z=n(25),R=n.n(z),B=n(72),D=n(98),M=n(74),G=n.n(M),H=n(133),q=n.n(H),Z=n(1),J=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,s=e.onPageChanged,c=e.portionSize,o=void 0===c?10:c,i=Math.ceil(t/n),u=[],l=1;l<=i;l++)u.push(l);var d=Math.ceil(i/o),f=Object(r.useState)(1),j=Object(D.a)(f,2),b=j[0],p=j[1],h=(b-1)*o+1,g=b*o;return Object(Z.jsxs)("div",{className:G.a.paginator,children:[b>1&&Object(Z.jsx)("button",{onClick:function(){return p(b-1)},children:"Prev"}),u.filter((function(e){return e>=h&&e<=g})).map((function(e){return Object(Z.jsx)("button",{className:q()(Object(B.a)({},G.a.selectedPage,a===e),G.a.pageNumber),onClick:function(t){s(e)},children:e},e)})),d>b&&Object(Z.jsx)("button",{onClick:function(){p(b+1)},children:"Next"})]})},W=n(107),Y=function(e){var t=e.user;return Object(Z.jsx)(f.b,{to:"/profile/"+t.id,children:Object(Z.jsx)("img",{src:null!=t.photos.small?t.photos.small:W.a,className:R.a.userImg,alt:"small"})})},Q=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(Z.jsxs)("li",{className:R.a.userItem,children:[Object(Z.jsxs)("div",{className:R.a.userItemLeft,children:[Object(Z.jsx)(Y,{user:t}),t.followed?Object(Z.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"unFollow"}):Object(Z.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"follow"})]}),Object(Z.jsx)("div",{className:R.a.userItemRight,children:Object(Z.jsxs)("div",{className:R.a.userItemInfo,children:[Object(Z.jsx)("span",{className:R.a.fullName,children:t.name}),Object(Z.jsx)("span",{className:R.a.status,children:null!=t.status?t.status:"Hello there i am using whatsapp :)"})]})})]})},V=["currentPage","onPageChanged","totalItemsCount","pageSize","users"],K=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalItemsCount,a=e.pageSize,s=e.users,c=Object(F.a)(e,V);return Object(Z.jsxs)("div",{children:[Object(Z.jsx)(J,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:a}),Object(Z.jsx)("ul",{className:R.a.user,children:s.map((function(e){return Object(Z.jsx)(Q,{user:e,followingInProgress:c.followingInProgress,unfollow:c.unfollow,follow:c.follow},e.id)}))})]})},X=n(46),$=n(11),ee=n(134),te=Object(ee.a)((function(e){return e.usersPage.users}),(function(e){return e})),ne=function(e){return e.usersPage.pageSize},re=function(e){return e.usersPage.totalUsersCount},ae=function(e){return e.usersPage.currentPage},se=function(e){return e.usersPage.isFetching},ce=function(e){return e.usersPage.followingInProgress},oe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(Z.jsxs)(Z.Fragment,{children:[this.props.isFetching?Object(Z.jsx)(X.a,{}):null,Object(Z.jsx)(K,{totalItemsCount:this.props.totalItemsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),ie=Object($.d)(Object(j.b)((function(e){return{users:te(e),pageSize:ne(e),totalItemsCount:re(e),currentPage:ae(e),isFetching:se(e),followingInProgress:ce(e)}}),{follow:function(e){return function(){var t=Object(h.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(n,e,O.d.follow.bind(O.d),I);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(h.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(n,e,O.d.unfollow.bind(O.d),y);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:L,toggleFollowingProgress:T,getUsers:function(e,t){return function(){var n=Object(h.a)(p.a.mark((function n(r){var a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(E(!0)),r(L(e)),n.next=4,O.d.getUsers(e,t);case 4:a=n.sent,r(E(!1)),r((c=a.items,{type:w,users:c})),r((s=a.totalCount,{type:C,count:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(oe),ue=n(130),le=n(29),de=n(60),fe=n(34),je="SET_USER_DATA",be="samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",pe={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},he=function(e,t,n,r){return{type:je,payload:{userId:e,email:t,login:n,isAuth:r}}},ge=function(){return function(){var e=Object(h.a)(p.a.mark((function e(t){var n,r,a,s,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.email,c=r.login,t(he(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},me=function(e){return{type:be,payload:{captchaUrl:e}}},Oe=function(){return function(){var e=Object(h.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(me(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je:case be:return Object(m.a)(Object(m.a)({},e),t.payload);default:return e}},xe=n(26),_e=n.n(xe),we=Object(ue.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(Z.jsxs)("form",{onSubmit:t,children:[Object(le.d)("Email","email",[de.b],le.b),Object(le.d)("Password","password",[de.b],le.b,{type:"password"}),Object(le.d)(null,"rememberMe",[de.b],le.a,{type:"checkbox"}),r&&Object(Z.jsx)("img",{src:r,alt:"captcha"}),r&&Object(le.d)("Symbols from image","captcha",[de.b],le.b,{}),n&&Object(Z.jsx)("div",{className:_e.a.formSummaryError,children:n}),Object(Z.jsx)("button",{className:_e.a.signinBtn,children:"Sign in"})]})})),Pe=Object(j.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(h.a)(p.a.mark((function a(s){var c,o;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.login(e,t,n,r);case 2:0===(c=a.sent).data.resultCode?s(ge()):10===c.data.resultCode&&s(Oe()),o=c.data.messages.length>0?c.data.messages[0]:"SomeError",s(Object(fe.a)("login",{_error:o}));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(Z.jsx)(d.a,{to:"/profile"}):Object(Z.jsxs)("div",{className:_e.a.login,children:[Object(Z.jsx)("h1",{className:_e.a.loginTitle,children:"Login"}),Object(Z.jsxs)("div",{className:_e.a.testData,children:[Object(Z.jsx)("div",{className:_e.a.testTitle,children:"For testing app use:"}),Object(Z.jsxs)("div",{className:_e.a.testLogin,children:["Login:",Object(Z.jsx)("span",{className:_e.a.testLoginText,children:"for.test.reactapp@mail.ru"})]}),Object(Z.jsxs)("div",{className:_e.a.testLogin,children:["Password:",Object(Z.jsx)("span",{className:_e.a.testLoginText,children:"freepassword"})]})]}),Object(Z.jsx)(we,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})})),Ce="INITIALIZED_SUCCESS",Ne={initialized:!1},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ce:return Object(m.a)(Object(m.a)({},e),{},{initialized:!0});default:return e}},Se=function(e){return function(t){return Object(Z.jsx)(a.a.Suspense,{fallback:Object(Z.jsx)(X.a,{}),children:Object(Z.jsx)(e,Object(m.a)({},t))})}},Ie=n(97),ye=n(129),Le=n(136),Ee=n(131),Te=Object($.c)({profilePage:Ie.b,dialogPage:ye.a,usersPage:A,auth:ve,form:Ee.a,app:ke}),Ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.d,Ae=Object($.e)(Te,Ue(Object($.a)(Le.a)));window.__store__=Ae;var Fe=Ae,ze=n(10),Re=n.n(ze),Be=function(e){return Object(Z.jsxs)("nav",{className:Re.a.nav,children:[Object(Z.jsx)("div",{className:Re.a.loginBlock,children:e.isAuth?Object(Z.jsxs)("div",{children:[e.login," ",Object(Z.jsx)("button",{className:Re.a.isAuthBtn,onClick:e.logout,children:"Logout"})]}):Object(Z.jsx)(f.b,{to:"/login",children:"Login"})}),Object(Z.jsxs)("ul",{className:Re.a.navList,children:[Object(Z.jsx)("li",{className:Re.a.navItem,children:Object(Z.jsx)(f.b,{to:"/profile",className:Re.a.navLink,activeClassName:Re.a.activeLink,children:"Profile"})}),Object(Z.jsx)("li",{className:Re.a.navItem,children:Object(Z.jsx)(f.b,{to:"/dialogs",className:Re.a.navLink,activeClassName:Re.a.activeLink,children:"Messages"})}),Object(Z.jsx)("li",{className:Re.a.navItem,children:Object(Z.jsx)(f.b,{to:"/news",className:Re.a.navLink+" "+Re.a.disabledLink,activeClassName:Re.a.activeLink,children:"News"})}),Object(Z.jsx)("li",{className:Re.a.navItem,children:Object(Z.jsx)(f.b,{to:"/music",className:Re.a.navLink+" "+Re.a.disabledLink,activeClassName:Re.a.activeLink,children:"Music"})}),Object(Z.jsx)("li",{className:Re.a.navItem,children:Object(Z.jsx)(f.b,{to:"/settings",className:Re.a.navLink+" "+Re.a.disabledLink,activeClassName:Re.a.activeLink,children:"Settings"})}),Object(Z.jsx)("li",{className:Re.a.navItem,children:Object(Z.jsx)(f.b,{to:"/users",className:Re.a.navLink,activeClassName:Re.a.activeLink,children:"Users"})})]})]})},De=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(Z.jsx)(Be,Object(m.a)({},this.props))}}]),n}(a.a.Component),Me=Object(j.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.logout();case 2:0===e.sent.data.resultCode&&t(he(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(De),Ge=n(39),He=n.n(Ge),qe=n.p+"static/media/search.7042193d.svg",Ze=function(e){return Object(Z.jsxs)("header",{className:He.a.header,children:[Object(Z.jsxs)("div",{className:He.a.headerLogo,children:["SocialNetwork",Object(Z.jsx)("br",{}),"logo"]}),Object(Z.jsx)("div",{className:He.a.ad,children:"Your advertisement is here"}),Object(Z.jsxs)("label",{className:He.a.search,children:[Object(Z.jsx)("img",{className:He.a.searchImg,src:qe,alt:"search"}),Object(Z.jsx)("input",{type:"search",placeholder:"Search",className:He.a.headerSearch})]})]})},Je=a.a.lazy((function(){return n.e(4).then(n.bind(null,302))})),We=a.a.lazy((function(){return n.e(3).then(n.bind(null,301))})),Ye=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(Z.jsxs)("div",{className:"site-container container",children:[Object(Z.jsx)(Ze,{}),Object(Z.jsx)(Me,{}),Object(Z.jsx)("div",{className:"rightContent",children:Object(Z.jsxs)(d.d,{children:[Object(Z.jsx)(d.b,{exact:!0,path:"/",render:function(){return Object(Z.jsx)(d.a,{to:"login"})}}),Object(Z.jsx)(d.b,{path:"/dialogs",render:Se(Je)}),Object(Z.jsx)(d.b,{path:"/profile/:userId?",render:Se(We)}),Object(Z.jsx)(d.b,{path:"/users",render:function(){return Object(Z.jsx)(ie,{})}}),Object(Z.jsx)(d.b,{path:"/login",render:function(){return Object(Z.jsx)(Pe,{})}}),Object(Z.jsx)(d.b,{path:"/404",render:function(){return Object(Z.jsx)("div",{children:"404 not found"})}}),Object(Z.jsx)(d.b,{path:"*",render:function(){return Object(Z.jsx)(d.a,{to:"/404"})}})]})})]}):Object(Z.jsx)(X.a,{})}}]),n}(r.Component),Qe=Object($.d)(d.g,Object(j.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(ge());Promise.all([t]).then((function(){e({type:Ce})}))}}}))(Ye),Ve=function(e){return Object(Z.jsx)(f.a,{basename:"/react-social-practice",children:Object(Z.jsx)(j.a,{store:Fe,children:Object(Z.jsx)(Qe,{})})})},Ke=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,300)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(Z.jsx)(Ve,{}),document.getElementById("root")),Ke()},39:function(e,t,n){e.exports={header:"header_header__2x9En",headerLogo:"header_headerLogo__22Fhz",ad:"header_ad__4qMii",search:"header_search__2HDJ7",searchImg:"header_searchImg__39DmR",headerSearch:"header_headerSearch__33Fzr",loginLink:"header_loginLink__LRkws"}},46:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/Spinner-1s-200px.93ad5c12.svg",a=n(1);t.a=function(e){return Object(a.jsx)("img",{src:r,alt:"preloader"})}},60:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"field is required"},a=function(e){return function(t){if(t.length>e)return"maxlength is ".concat(e)}}},74:function(e,t,n){e.exports={paginator:"paginator_paginator__1QN_J",noSelectedPage:"paginator_noSelectedPage__1WJ_c",pageNumber:"paginator_pageNumber__3l7b-",selectedPage:"paginator_selectedPage__1ZtNd"}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return O})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return _}));var r=n(8),a=n.n(r),s=n(16),c=n(38),o=n(3),i=n(13),u=n(34),l="ADD_POST",d="SET_USER_PROFILE",f="SET_STATUS",j="DELETE_POST",b=" SAVE_PHOTO_SUCCESS",p={posts:[{id:1,post:"Hi, how are you?",likesCount:14},{id:2,post:"Yo",likesCount:20},{id:3,post:"Hello world",likesCount:120}],profile:null,status:""},h=function(e){return{type:l,newPostText:e}},g=function(e){return{type:f,status:e}},m=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(g(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:b,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,r){var s,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r().auth.userId,t.next=3,i.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(m(s)),t.next=10;break;case 8:return n(Object(u.a)("edit-profile",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:6,post:t.newPostText,likesCount:1};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n])});case d:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case f:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case j:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case b:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[291,1,2]]]);
//# sourceMappingURL=main.397e9ccf.chunk.js.map