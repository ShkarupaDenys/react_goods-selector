(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c.n(n),a=c(5),o=c(6),r=c(8),l=c(7),d=c(1),i=(c(13),c(14),c(3)),u=c.n(i),b=c(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:"Jam"},e.handleGood=function(t){e.setState((function(e){return{selectedGood:e.selectedGood===t?"":t}}))},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(b.jsxs)("main",{className:"section container",children:[Object(b.jsx)("h1",{className:"title is-flex is-align-items-center",children:t?Object(b.jsxs)(b.Fragment,{children:[t," ","is selected",Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){return e.handleGood(t)}})]}):"No goods selected"}),Object(b.jsx)("table",{className:"table",children:Object(b.jsx)("tbody",{children:j.map((function(c){var n=t===c;return Object(b.jsxs)("tr",{"data-cy":"Good",className:u()({"has-background-success-light":n}),children:[Object(b.jsx)("td",{children:Object(b.jsx)("button",{"data-cy":n?"RemoveButton":"AddButton",type:"button",className:u()("button",{"is-info":n}),onClick:function(){return e.handleGood(c)},children:n?"-":"+"})}),Object(b.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(d.Component);s.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.885da7a5.chunk.js.map