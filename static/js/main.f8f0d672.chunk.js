(window["webpackJsonpmonsters-rolodex"]=window["webpackJsonpmonsters-rolodex"]||[]).push([[0],{167:function(e,t,n){e.exports=n(387)},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},192:function(e,t){},194:function(e,t){},226:function(e,t){},227:function(e,t){},271:function(e,t){},273:function(e,t){},296:function(e,t){},387:function(e,t,n){"use strict";n.r(t);var r=n(14),o=n.n(r),a=n(161),c=n.n(a),s=(n(172),n(162)),i=n(163),l=n(165),u=n(164),m=n(59),h=n(166);n(173),n(174),n(175);function d(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),o.a.createElement("h2",null,e.monster.name),o.a.createElement("p",null,e.monster.email))}function f(e){return o.a.createElement("div",{className:"cardlist"},e.monsters.map((function(e){return o.a.createElement(d,{key:e.id,monster:e})})))}n(176);function p(e){return o.a.createElement("input",{className:"search",type:"text",placeholder:e.placeholder,onChange:e.onChange})}var v=n(14),w=n(177),E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={monsters:[],searchField:""},e.storeSearchField=e.storeSearchField.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;w.get("https://jsonplaceholder.typicode.com/users",(function(t,n,r){var o=JSON.parse(r);e.setState({monsters:o})}))}},{key:"storeSearchField",value:function(e){this.setState({searchField:e.target.value.toLowerCase()})}},{key:"filterMonstersBySearchField",value:function(){var e=this.state,t=e.monsters,n=e.searchField;return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}},{key:"render",value:function(){return v.createElement("div",{className:"App"},v.createElement("h1",null,"Monsters Rolodex"),v.createElement(p,{placeholder:"search monster",onChange:this.storeSearchField}),v.createElement(f,{monsters:this.filterMonstersBySearchField()}))}}]),t}(v.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[167,1,2]]]);
//# sourceMappingURL=main.f8f0d672.chunk.js.map