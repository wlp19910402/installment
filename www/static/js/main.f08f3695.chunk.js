(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{141:function(e,t,a){e.exports=a.p+"static/media/home-banner.fa7015f4.png"},144:function(e,t,a){e.exports=a(327)},326:function(e,t,a){},327:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),l=a(29),i=a.n(l),s=(a(75),a(31)),u=a.n(s),p=a(27),m=a(39),d=a(12),h=a(13),b=a(15),f=a(14),g=(a(118),a(41)),y=a.n(g),E=(a(52),a(16)),v=a.n(E),j=(a(119),a(42)),k=a.n(j),O=a(143),x=a(47),w=function(e){var t=e.className,a=void 0===t?"":t,n=Object(O.a)(e,["className"]);return r.a.createElement("div",Object.assign({className:"".concat(a," placeholder")},n),"Block")},I=function(){return r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{className:"sub-title"},"Basic"),r.a.createElement(k.a,null,r.a.createElement(k.a.Item,null,r.a.createElement(w,null))),r.a.createElement(x.b,{to:"/login"},"\u53bb\u767b\u9646\u54e6"),r.a.createElement(v.a,{size:"lg"}),r.a.createElement(k.a,{justify:"center"},r.a.createElement(w,{className:"inline"}),r.a.createElement(w,{className:"inline"}),r.a.createElement(w,{className:"inline"})))};function C(){u.a.success("Load success !!!",1)}var T=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){u.a.info("This is a toast tips !!!",1)},e.state={users:[]},e}return Object(h.a)(a,[{key:"toLogin",value:function(){this.props.history.push("/login")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,{type:"primary",onClick:this.handleClick},"\u6d4b\u8bd5antd"),r.a.createElement(y.a,{type:"warning",onClick:C},"loading"),r.a.createElement(I,null),r.a.createElement(y.a,{type:"primary",onClick:this.toLogin.bind(this)},"\u53bb\u767b\u9646\u54e6"))}}]),a}(n.Component),z=(a(61),a(36)),A=a.n(z),U=(a(120),a(102)),N=a.n(U),M=(a(203),a(103)),q=a.n(M),B=a(142),F="1",L="2",P={regMobile:/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/,regPassword:/^(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{6,16}$/},S=a(48),_="/login",K="/checkIsLogin",$=a(71),R=a.n($),H=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).tiggerLogin=Object(m.a)(i.a.mark((function t(){var a,n,r,c,o,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.props.form.getFieldValue,n=a("accountId"),r=a("pwd"),c=e.state.loginUserIdentity,void 0!==n&&void 0!==r){t.next=7;break}return u.a.info("\u8d26\u53f7\u548c\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a",1),t.abrupt("return");case 7:if(P.regMobile.test(n)){t.next=10;break}return u.a.info("\u8bf7\u8f93\u5165\u6b63\u786e\u768411\u4f4d\u624b\u673a\u53f7",1),t.abrupt("return");case 10:return t.prev=10,t.next=13,R()({url:_,method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},data:{accountId:n,password:r,accountType:c}});case 13:if("0"===(o=t.sent).data.err){t.next=17;break}return u.a.info(o.data.msg,1),t.abrupt("return");case 17:l={accountId:n,accountType:c,token:o.data.result.token},e.props.setUserInfo(l),"/login"===e.props.history.location.pathname&&e.props.history.replace(e.props.user.redirectPath),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(10),console.log(t.t0);case 25:case"end":return t.stop()}}),t,null,[[10,22]])}))),e.switchIndtify=function(){e.setState({loginUserIdentity:e.state.loginUserIdentity===L?F:L})},e.state={loginUserIdentity:F},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.setState({loginUserIdentity:this.props.user.accountType})}},{key:"render",value:function(){var e=this.props.form.getFieldProps;return r.a.createElement("div",{className:"qm-login-page qm-fill-width "},r.a.createElement("div",{className:"qm-title-box sub-title"},r.a.createElement("div",{className:"title"},this.state.loginUserIdentity===L?"\u5916\u52e4":"\u7ecf\u529e","\u767b\u5f55")),r.a.createElement(k.a,{justify:"center"},r.a.createElement(k.a.Item,null,r.a.createElement(A.a,{size:"lg"},r.a.createElement(N.a,null,r.a.createElement(q.a,Object.assign({},e("accountId"),{placeholder:"\u8d26\u53f7",type:"text"}))),r.a.createElement(N.a,null,r.a.createElement(q.a,Object.assign({},e("pwd"),{type:"password",placeholder:"\u5bc6\u7801"}))),r.a.createElement(v.a,{size:"xl"}),r.a.createElement(v.a,{size:"xl"}),r.a.createElement(v.a,{size:"xl"}),r.a.createElement(y.a,{type:"primary",onClick:this.tiggerLogin.bind(this)},"\u767b\u5f55"),r.a.createElement(v.a,{size:"md"}),r.a.createElement(y.a,{type:"default",onClick:this.switchIndtify.bind(this)},"\u5207\u6362\u4e3a\u201c",function(e){return e===L?"\u7ecf\u529e":"\u5916\u52e4"}(this.state.loginUserIdentity),"\u4eba\u5458\u201d")))))}}]),a}(r.a.Component),J=Object(B.a)()(H),Z=Object(S.b)((function(e,t){return e}),{setUserInfo:function(e){return{type:"set_user_info",data:e}}})(J),D=(a(304),a(56)),V=a.n(D),W=(a(98),a(17)),X=a.n(W),Q=(a(324),a(140)),G=a.n(Q),Y=(a(76),a(53)),ee=a.n(Y),te=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(G.a,{mode:"dark",leftContent:"Back",rightContent:[r.a.createElement(ee.a,{key:"0",type:"search",style:{marginRight:"16px"}}),r.a.createElement(ee.a,{key:"1",type:"ellipsis"})]},"NavBar")}}]),a}(n.Component),ae=a(141),ne=a.n(ae),re=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"qm-fill-width "},r.a.createElement(te,null),r.a.createElement(A.a,{size:"lg"},r.a.createElement(v.a,{size:"lg"}),r.a.createElement(X.a,null,r.a.createElement("img",{src:ne.a})),[1,2,3,4,5].map((function(e){return r.a.createElement(X.a,{key:e},r.a.createElement(X.a.Header,{title:"This is title",thumb:"https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg",extra:r.a.createElement("span",null,"\u9996\u9875\u54e6")}),r.a.createElement(x.b,{to:"/login"},"\u53bb\u767b\u5f55"),r.a.createElement(X.a.Body,null,r.a.createElement("div",null,"This is content of `Card`")),r.a.createElement(X.a.Footer,{content:"footer content",extra:r.a.createElement("div",null,"extra footer content")}))})),r.a.createElement(v.a,{size:"lg"})))}}]),a}(r.a.Component),ce=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"qm-fill-width "},r.a.createElement(te,null),r.a.createElement(A.a,{size:"lg"},r.a.createElement(v.a,{size:"lg"}),r.a.createElement(X.a,null,r.a.createElement(X.a.Header,{title:"This is title",thumb:"https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg",extra:r.a.createElement("span",null,"\u6211\u7684\u54e6")}),r.a.createElement(X.a.Body,null,r.a.createElement("div",null,"This is content of `Card`")),r.a.createElement(X.a.Footer,{content:"footer content",extra:r.a.createElement("div",null,"extra footer content")})),r.a.createElement(v.a,{size:"lg"})))}}]),a}(r.a.Component),oe=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"qm-fill-width "},r.a.createElement(te,null),r.a.createElement(A.a,{size:"lg"},r.a.createElement(v.a,{size:"lg"}),r.a.createElement(X.a,null,r.a.createElement(X.a.Header,{title:"This is title",thumb:"https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg",extra:r.a.createElement("span",null,"\u4efb\u52a1\u54e6")}),r.a.createElement(X.a.Body,null,r.a.createElement("div",null,"This is content of `Card`")),r.a.createElement(X.a.Footer,{content:"footer content",extra:r.a.createElement("div",null,"extra footer content")})),r.a.createElement(v.a,{size:"lg"})))}}]),a}(r.a.Component),le=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={selectedTab:"blueTab",hidden:!1},n}return Object(h.a)(a,[{key:"renderContent",value:function(e){var t=this;return r.a.createElement("div",{style:{backgroundColor:"white",height:"100%",textAlign:"center"}},e,r.a.createElement("a",{style:{display:"block",marginTop:40,marginBottom:20,color:"#108ee9"},onClick:function(e){e.preventDefault(),t.setState({hidden:!t.state.hidden})}},"Click to show/hide tab-bar"))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{position:"fixed",height:"100%",width:"100%",top:0}},r.a.createElement(V.a,{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white",hidden:this.state.hidden},r.a.createElement(V.a.Item,{title:"\u4e3b\u9875",key:"\u4e3b\u9875",icon:r.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat"}}),selectedIcon:r.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat"}}),selected:"blueTab"===this.state.selectedTab,badge:1,onPress:function(){e.setState({selectedTab:"blueTab"})},"data-seed":"logId"},this.renderContent(r.a.createElement(re,null))),r.a.createElement(V.a.Item,{icon:r.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat"}}),selectedIcon:r.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"}}),title:"\u4efb\u52a1",key:"\u4efb\u52a1",dot:!0,selected:"greenTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"greenTab"})}},this.renderContent(r.a.createElement(oe,null))),r.a.createElement(V.a.Item,{icon:{uri:"https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"},selectedIcon:{uri:"https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"},title:"\u6211\u7684",key:"\u6211\u7684",selected:"yellowTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"yellowTab"})}},this.renderContent(r.a.createElement(ce,null)))))}}]),a}(n.Component),ie=[{path:"/",name:"\u6d4b\u8bd5",component:T,isAuth:!0},{path:"/login",name:"\u767b\u5f55",component:Z,isAuth:!1},{path:"/main",name:"\u9996\u9875",component:le,isAuth:!0}],se=a(10),ue=(a(105),function(e,t){localStorage[e]=JSON.stringify(t)}),pe=function(e){return JSON.parse(localStorage.getItem(e))},me=function(e){localStorage.removeItem(e)},de=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).fetchCheckLogin=Object(m.a)(i.a.mark((function t(){var a,n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.props.user.isAuth){t.next=3;break}return"/login"===window.location.pathname&&(window.location.pathname="/main"),t.abrupt("return");case 3:if(a=pe("storageUserInfo")){t.next=6;break}return t.abrupt("return");case 6:if(a.accountId&&a.accountType&&a.token){t.next=8;break}return t.abrupt("return");case 8:return t.prev=8,t.next=11,R()({url:K,method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},data:Object(p.a)({},a)});case 11:if("0"===(n=t.sent).data.err){t.next=15;break}return u.a.info(n.data.msg,1),t.abrupt("return");case 15:r=Object(p.a)(Object(p.a)({},a),{},{token:n.data.result.token}),e.props.setUserInfo(r),"/login"===window.location.pathname&&(window.location.pathname="/main"),console.log("\u5df2\u7ecf\u767b\u5f55\u4e86"),t.next=24;break;case 21:t.prev=21,t.t0=t.catch(8),console.log(t.t0);case 24:case"end":return t.stop()}}),t,null,[[8,21]])}))),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchCheckLogin();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.user.isAuth;return r.a.createElement(x.a,null,r.a.createElement(Z,null),r.a.createElement("div",null,this.props.history),ie.map((function(t,a){return"/login"!==t.path?r.a.createElement(se.a,{path:t.path,key:a,exact:!0,component:t.isAuth&&!e?Z:t.component}):r.a.createElement(se.a,{path:t.path,key:a,exact:!0,component:e?le:t.component})})))}}]),a}(r.a.Component),he=Object(S.b)((function(e,t){return e}),{setUserInfo:function(e){return{type:"set_user_info",data:e}},setRedirectPath:function(e){return{type:"set_redirect",data:e}}})(de);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(326);var be=a(54);var fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{accountId:"",accountType:F,token:null,isAuth:!1,redirectPath:"/"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_user_info":var a=Object(p.a)(Object(p.a)({},e),{},{accountId:t.data.accountId,accountType:t.data.accountType,token:t.data.token,isAuth:""!==t.data.accountId.trim()});return ue("storageUserInfo",Object(p.a)({},t.data)),a;case"clear_user_info":var n=Object(p.a)(Object(p.a)({},e),{},{accountId:"",token:"",isAuth:!1});return me("storageUserInfo"),n;case"set_redirect":var r=Object(p.a)(Object(p.a)({},e),{},{redirectPath:t.data});return r;default:return e}},ge=Object(be.b)({user:fe}),ye=Object(be.c)(ge);o.a.render(r.a.createElement(S.a,{store:ye},r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[144,1,2]]]);