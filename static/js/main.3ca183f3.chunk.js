(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),i=a.n(l),c=(a(27),a(13)),o=a(1),u=(a(28),a(6)),s=a(7),m=a(9),h=a(8),p=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"devops"},r.a.createElement("a",{href:"https://dmginc.gg/clubs/6-devops/",target:"blank"},"DevOps")),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/DmgInc-Paul/"},"home")),r.a.createElement("li",null,r.a.createElement(c.b,{to:{githubBase:"/DmgInc-Paul/"}+"trivia"},"trivia")))))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("a",{href:"https://rillprogramming.com",target:"blank"},"by ",r.a.createElement("span",null,"Paul")))}}]),a}(n.Component),v=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("main",{className:"home"},r.a.createElement("h1",{className:"welcome"},r.a.createElement("span",null,"The")," website to"),r.a.createElement("h2",{className:"welcome"},"get your ",r.a.createElement("span",null,"number trivia")))}}]),a}(n.Component),d=a(21),E=a(12),g=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,res:"",type:"trivia",number:0,text:"Loading..."},n.paragraph={text:"Loading...",number:0},n.handleChange=n.handleChange.bind(Object(E.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(E.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){}},{key:"handleSubmit",value:function(e){var t=this,a=e.target,n=a.name;this.setState(Object(d.a)({},n,a.value),(function(){t.componentDidMount()})),e.preventDefault()}},{key:"componentDidMount",value:function(){var e=this,t=void 0===this.state.number||""===this.state.number?0:this.state.number,a=void 0===this.state.type||""===this.state.type?"trivia":this.state.type;fetch("http://numbersapi.com/"+t+"/"+a+"?json").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({isLoaded:!0,res:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state.error,t=this.state.isLoaded,a=this.state.res;e?this.paragraph.text=e.message:t?this.paragraph=a:this.paragraph.text="Loading...";var n=this.paragraph.text.replace(this.paragraph.number,"<span>"+this.paragraph.number+"</span>");return r.a.createElement("div",{className:"trivia"},r.a.createElement("section",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Type of triva"),r.a.createElement("select",{name:"type",value:this.state.type,onChange:this.handleSubmit},r.a.createElement("option",{value:"trivia"},"Trivia"),r.a.createElement("option",{value:"math"},"Math"),r.a.createElement("option",{value:"date"},"Date"),r.a.createElement("option",{value:"year"},"Year")),r.a.createElement("h3",null,"Type a number"),r.a.createElement("input",{name:"number",defaultValue:"0",type:"number",value:this.state.number,onChange:this.handleSubmit}))),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:n}})))}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement(g,null))}}]),a}(n.Component);var y=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(o.a,{exact:!0,path:"/DmgInc-Paul/",component:v}),r.a.createElement(o.a,{exact:!0,path:{githubBase:"/DmgInc-Paul/"}+"trivia",component:f}),r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.3ca183f3.chunk.js.map