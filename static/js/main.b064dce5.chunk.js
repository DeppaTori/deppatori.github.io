(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,n){e.exports=n(362)},362:function(e,t,n){"use strict";n.r(t);n(152);var a=n(1),r=n.n(a),i=n(77),c=n(33),s=n(34),u=n(36),d=n(35),l=n(37),o=n(78),p=n(49),h=n(147),b=n(148),f=n(149),v=n(150),m=n.n(v),j="REQUEST_POSTS",O="RECEIVE_POSTS",g="SELECT_SUBREDDIT",A="INVALIDATE_SUBREDDIT";function E(e){return function(t){return t(function(e){return{type:j,subreddit:e}}(e)),m()("https://api.twitter.com/1.1/friends/list.json?screen_name=twitterapi",{headers:{Authorization:"Bearer AAAAAAAAAAAAAAAAAAAAANld9wAAAAAANoe8Qi3tqJqAf5Uy6u5CUIHlmcg%3D3A19F5UkpTYXY6NF1xuZ0iFKSIxUpC0kKG6sbd91AEf0smu8fb"}}).then(function(e){return e.json()}).then(function(n){return t(function(e,t){return{type:O,subreddit:e,posts:t.users,receivedAt:Date.now()}}(e,n))})}}function y(e){return function(t,n){if(function(e,t){var n=e.postsBySubreddit[t];return!n||!n.isFetching&&n.didInvalidate}(n(),e))return t(E(e))}}var S=Object(p.c)({postsBySubreddit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:case O:case j:return Object.assign({},e,Object(f.a)({},t.subreddit,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,didInvalidate:!1,items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object.assign({},e,{didInvalidate:!0});case j:return Object.assign({},e,{isFetching:!0,didInvalidate:!1});case O:return Object.assign({},e,{isFetching:!1,didInvalidate:!1,items:t.posts,lastUpdated:t.receivedAt});default:return e}}(e[t.subreddit],t)));default:return e}},selectedSubreddit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"reactjs",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.subreddit;default:return e}}}),C=Object(b.createLogger)();var k=n(50),w=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.onChange,a=e.options;return r.a.createElement("span",null,r.a.createElement("h1",null,t),r.a.createElement("select",{onChange:function(e){return n(e.target.value)},value:t},a.map(function(e){return r.a.createElement("option",{value:e,key:e},e)})))}}]),t}(a.Component),I=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log(this.props.posts),r.a.createElement("ul",null,this.props.posts.map(function(e,t){return r.a.createElement("li",{key:t},e.name)}))}}]),t}(a.Component),U=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(k.a)(Object(k.a)(n))),n.handleRefreshClick=n.handleRefreshClick.bind(Object(k.a)(Object(k.a)(n))),n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.dispatch)(y(e.selectedSubreddit))}},{key:"componentDidUpdate",value:function(e){if(this.props.selectedSubreddit!==e.selectedSubreddit){var t=this.props;(0,t.dispatch)(y(t.selectedSubreddit))}}},{key:"handleChange",value:function(e){this.props.dispatch({type:g,subreddit:e}),this.props.dispatch(y(e))}},{key:"handleRefreshClick",value:function(e){e.preventDefault();var t=this.props,n=t.dispatch,a=t.selectedSubreddit;n({type:A,subreddit:a}),n(y(a))}},{key:"render",value:function(){var e=this.props,t=e.selectedSubreddit,n=e.posts,a=e.isFetching,i=e.lastUpdated;return r.a.createElement("div",null,r.a.createElement(w,{value:t,onChange:this.handleChange,options:["1","2"]}),r.a.createElement("p",null,i&&r.a.createElement("span",null,"Last updated at ",new Date(i).toLocaleTimeString(),"."," "),!a&&r.a.createElement("button",{onClick:this.handleRefreshClick},"Refresh")),a&&0===n.length&&r.a.createElement("h2",null,"Loading..."),!a&&0===n.length&&r.a.createElement("h2",null,"Empty."),n.length>0&&r.a.createElement("div",{style:{opacity:a?.5:1}},r.a.createElement(I,{posts:n})))}}]),t}(a.Component);var D,F=Object(o.b)(function(e){var t=e.selectedSubreddit,n=e.postsBySubreddit[t]||{isFetching:!0,items:[]},a=n.isFetching,r=n.lastUpdated;return{selectedSubreddit:t,posts:n.items,isFetching:a,lastUpdated:r}})(U),R=Object(p.d)(S,D,Object(p.a)(h.a,C)),T=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(o.a,{store:R},r.a.createElement(F,null))}}]),t}(a.Component);Object(i.render)(r.a.createElement(T,null),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.b064dce5.chunk.js.map