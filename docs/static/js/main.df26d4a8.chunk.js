(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(8),r=a.n(c),s=(a(15),a(1)),o=a(2),u=a(3),l=a(6),m=a(4),h=a(5),d=(a(17),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={teamName:e.teamName,running:!1,time:e.startTime},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"tick",value:function(){if(this.state.running){var e=this.state.time;this.setState({time:e-1})}}},{key:"startStop",value:function(){var e=this.state.running;this.setState({running:!e}),console.log(this.state.running)}},{key:"adjustSeconds",value:function(e){this.setState({time:this.state.time+e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"box"},i.a.createElement("div",{class:"row"},i.a.createElement(b,{defaultName:this.props.defaultName})),i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:this.state.running?"time-box-active":"time-box-inactive"},this.state.time>0?this.state.time:0)),i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"button-row-startstop"},i.a.createElement("button",{class:"button",onClick:function(){return e.startStop()}},this.state.running?"Stop":"Start")),i.a.createElement("div",{class:"button-row-seconds"},i.a.createElement("button",{class:"button",onClick:function(){return e.adjustSeconds(20)}},"+20"),i.a.createElement("button",{class:"button",onClick:function(){return e.adjustSeconds(-20)}},"-20"),i.a.createElement("button",{class:"button",onClick:function(){return e.adjustSeconds(10)}},"+10"))))}}]),t}(n.Component)),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={value:"",name:e.defaultTeamName,customNameSet:!1},a.handleChange=a.handleChange.bind(Object(s.a)(Object(s.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(s.a)(Object(s.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){console.log("Team name entered"),console.log(e),this.setState({name:this.state.value,customNameSet:!0}),e.preventDefault()}},{key:"render",value:function(){return this.state.customNameSet?i.a.createElement("div",null,this.state.name):i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",placeholder:this.props.defaultName,onChange:this.handleChange}))}}]),t}(n.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement(d,{startTime:60,defaultName:"Team 1"}),i.a.createElement(d,{startTime:60,defaultName:"Team 2"}),i.a.createElement(d,{startTime:60,defaultName:"Team 3"}),i.a.createElement(d,{startTime:60,defaultName:"Team 4"}))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null," De SLIMSTE MENS"),i.a.createElement("h2",null," Ter Wereld"),i.a.createElement(f,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.df26d4a8.chunk.js.map