(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(30)},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(5),o=(n(25),n(6)),a=n(7),u=n(9),s=n(8),l=n(10),p=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.options,r=e.userOnChange;return i.a.createElement("div",null,i.a.createElement("h1",null,t),i.a.createElement("select",{value:t,onChange:function(e){return r(e.target.value)}},n.map(function(e){return i.a.createElement("option",{value:e,key:e},e)})))}}]),t}(r.Component),d=n(3),f="SELECT_USER",h="REQUEST_POST",v="RECEIVE_POST";function g(e){return function(t){return t(function(e){return{type:h,user:e}}(e)),fetch("https://api.github.com/users/".concat(e,"/repos")).then(function(e){return e.json()},function(e){return console.log("An error occured",e)}).then(function(n){return t(function(e,t){return{type:v,user:e,repositories:t,receivedAt:Date.now()}}(e,n))})}}var b=Object(d.b)(null,function(e){return{userOnChange:function(t){e(function(e){return{type:f,user:e}}(t)),e(function(e){return function(t,n){if(function(e,t){var n=e.repositoriesByUser[t];return!n||!n.isFetching&&n.diInvalidate}(n(),e))return t(g(e))}}(t))}}})(p),O=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props.repositories;return i.a.createElement("ul",null,e.map(function(e){return i.a.createElement("li",{key:e.id},e.name)}))}}]),t}(r.Component),j=Object(d.b)(function(e){var t=e.selectedUser,n=e.repositoriesByUser[t]||{isFetching:!0,repositories:[]},r=n.isFetching,i=n.lastUpdated,c=n.repositories;return console.log(c),{selectedUser:t,repositories:c,isFetching:r,lastUpdated:i}})(O),E=function(){return i.a.createElement("div",null,i.a.createElement("p",null,"App"),i.a.createElement(b,{options:["octocat","octokit"]}),i.a.createElement(j,null))},m=n(17),y=n(1),U=n(18);var w=Object(y.c)({repositoriesByUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(console.log(e),t.type){case h:case v:return Object.assign({},e,Object(U.a)({},t.user,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,didInvalidate:!1,repositories:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object.assign({},e,{isFetching:!0,didInvalidate:!1});case v:return Object.assign({},e,{isFetching:!1,didInvalidate:!1,repositories:t.repositories,lastUpdated:t.receivedAt});default:return e}}(e[t.user],t)));default:return e}},selectedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"octocat",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.user;default:return e}}}),k=n(19),C=Object(m.createLogger)();var F,I=Object(y.d)(w,F,Object(y.a)(k.a,C));Object(c.render)(i.a.createElement(d.a,{store:I},i.a.createElement(E,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.44ec4b47.chunk.js.map