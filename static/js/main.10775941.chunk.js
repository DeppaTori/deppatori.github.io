(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(e,t,n){e.exports=n(390)},390:function(e,t,n){"use strict";n.r(t);n(161);var a=n(1),r=n.n(a),i=n(78),c=n(29),s=n(30),u=n(32),l=n(31),o=n(33),d=n(80),p=n(50),h=n(155),b=n(156),f=n(79),m=n(157),v=n.n(m),j="REQUEST_POSTS",O="RECEIVE_POSTS",g="SELECT_SUBREDDIT",E="INVALIDATE_SUBREDDIT";function y(e){return function(t){return t(function(e){return{type:j,subreddit:e}}(e)),v()("https://api.github.com/users/octocat/repos").then(function(e){return e.json()}).then(function(n){return t(function(e,t){return{type:O,subreddit:e,posts:t.users,receivedAt:Date.now()}}(e,n))})}}function S(e){return function(t,n){if(function(e,t){var n=e.postsBySubreddit[t];return!n||!n.isFetching&&n.didInvalidate}(n(),e))return t(y(e))}}var k=Object(p.c)({postsBySubreddit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:case O:case j:return Object.assign({},e,Object(f.a)({},t.subreddit,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,didInvalidate:!1,items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object.assign({},e,{didInvalidate:!0});case j:return Object.assign({},e,{isFetching:!0,didInvalidate:!1});case O:return Object.assign({},e,{isFetching:!1,didInvalidate:!1,items:t.posts,lastUpdated:t.receivedAt});default:return e}}(e[t.subreddit],t)));default:return e}},selectedSubreddit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"reactjs",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.subreddit;default:return e}}}),C=Object(b.createLogger)();var D=n(51),w=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.onChange,a=e.options;return r.a.createElement("span",null,r.a.createElement("h1",null,t),r.a.createElement("select",{onChange:function(e){return n(e.target.value)},value:t},a.map(function(e){return r.a.createElement("option",{value:e,key:e},e)})))}}]),t}(a.Component),I=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log(this.props.posts),r.a.createElement("ul",null,this.props.posts.map(function(e,t){return r.a.createElement("li",{key:t},e.name)}))}}]),t}(a.Component),R=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(D.a)(Object(D.a)(n))),n.handleRefreshClick=n.handleRefreshClick.bind(Object(D.a)(Object(D.a)(n))),n}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.dispatch)(S(e.selectedSubreddit))}},{key:"componentDidUpdate",value:function(e){if(this.props.selectedSubreddit!==e.selectedSubreddit){var t=this.props;(0,t.dispatch)(S(t.selectedSubreddit))}}},{key:"handleChange",value:function(e){this.props.dispatch({type:g,subreddit:e}),this.props.dispatch(S(e))}},{key:"handleRefreshClick",value:function(e){e.preventDefault();var t=this.props,n=t.dispatch,a=t.selectedSubreddit;n({type:E,subreddit:a}),n(S(a))}},{key:"render",value:function(){var e=this.props,t=e.selectedSubreddit,n=e.posts,a=e.isFetching,i=e.lastUpdated;return r.a.createElement("div",null,r.a.createElement(w,{value:t,onChange:this.handleChange,options:["1","2"]}),r.a.createElement("p",null,i&&r.a.createElement("span",null,"Last updated at ",new Date(i).toLocaleTimeString(),"."," "),!a&&r.a.createElement("button",{onClick:this.handleRefreshClick},"Refresh")),a&&0===n.length&&r.a.createElement("h2",null,"Loading..."),!a&&0===n.length&&r.a.createElement("h2",null,"Empty."),n.length>0&&r.a.createElement("div",{style:{opacity:a?.5:1}},r.a.createElement(I,{posts:n})))}}]),t}(a.Component);Object(d.b)(function(e){var t=e.selectedSubreddit,n=e.postsBySubreddit[t]||{isFetching:!0,items:[]},a=n.isFetching,r=n.lastUpdated;return{selectedSubreddit:t,posts:n.items,isFetching:a,lastUpdated:r}})(R);var F,T=n(158),U=n(159),B=n.n(U),L=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={data:[]},n}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;B.a.get("https://mysuperapp-tommytoban.herokuapp.com/simpledata").then(function(e){return e.data}).then(function(t){e.setState(Object(T.a)({},e.state,{data:t}))})}},{key:"render",value:function(){var e=this.state.data;return console.log(e),r.a.createElement("div",null,r.a.createElement("h1",null,"Daftar Buah: "),r.a.createElement("ul",null,0===e.length?r.a.createElement("p",null,"Loading..."):r.a.createElement("p",null),e.map(function(e){return r.a.createElement("li",null,e.nama)})))}}]),t}(a.Component),A=Object(p.d)(k,F,Object(p.a)(h.a,C)),_=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:A},r.a.createElement(L,null))}}]),t}(a.Component);Object(i.render)(r.a.createElement(_,null),document.getElementById("root"))}},[[160,1,2]]]);
//# sourceMappingURL=main.10775941.chunk.js.map