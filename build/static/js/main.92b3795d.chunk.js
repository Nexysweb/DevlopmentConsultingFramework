(this.webpackJsonpdevelopmentconsultingframework=this.webpackJsonpdevelopmentconsultingframework||[]).push([[0],{110:function(e,t,a){e.exports=a(232)},129:function(e,t){},131:function(e,t){},165:function(e,t){},166:function(e,t){},232:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),o=a(104),s=a.n(o),i=a(105),l=a(106),c=a(108),u=a(107),m=a(109),p=a(4),d=a.n(p),f=["Int","Long","Double","LocalDateTime","LocalDate","Boolean","BigDecimal","String"],h=d.a.object().keys({name:d.a.string().alphanum().required(),column:d.a.string().optional(),type:d.a.string().alphanum().required(),optional:d.a.boolean(),permissions:d.a.array().optional(),description:d.a.string().optional()}),g=d.a.object().keys({name:d.a.string().alphanum().required(),uuid:d.a.boolean().optional(),table:d.a.string().optional(),description:d.a.string().optional(),fields:d.a.array().items(h).unique((function(e,t){return e.name===t.name})).required(),permissions:d.a.array().optional(),constraints:d.a.array()}),v=d.a.array().items(g).required(),y=function(e){var t=v,a=d.a.validate(e,t,{abortEarly:!1});if(null===a.error){var n=function(e){console.log(typeof e);var t=[],a=e.map((function(e){return t=t.concat(e.fields.map((function(e){return e.type})).filter((function(e){return f.indexOf(e)<0}))),e.name}));console.log(a);var n=[];return t.map((function(e){return a.indexOf(e)<0&&n.push('"'.concat(e,'" is referenced as a type in params but was never defined')),!0})),n}(JSON.parse(e));return n.length>0?{status:!1,errors:n}:{status:!0,errors:null}}return{status:!1,errors:a.error.details.map((function(e){return e.message+" "+JSON.stringify(e.path)}))}},b=function(e){try{return JSON.parse(e),!0}catch(t){return!1}},E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(){var e=a.state.content;if(b(e)){var t=y(e);if(!t||t.status){a.setState({errors:null,message:"Congratulations, this is a valid file"})}else{var n=["the string you entered is not a properly formatted DDL file, try again"].concat(t.errors.map((function(e){return e})));a.setState({errors:n,message:null})}}else{a.setState({errors:["the string you entered is not a JSON string, try again"],message:null})}},a.handleChange=function(e){var t=e.target.value;a.setState({content:t})},a.state={content:"",errors:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderError",value:function(){var e=this.state.errors;return e?r.a.createElement("ul",{className:"list-group"},e.map((function(e,t){return r.a.createElement("li",{className:"list-group-item list-group-item-danger",key:t},e)}))):null}},{key:"renderSuccess",value:function(){var e=this.state.message;return e?r.a.createElement("p",{className:"alert alert-success"},e):null}},{key:"render",value:function(){var e=this.state.content;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"DDL Checker"),this.renderError(),this.renderSuccess(),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("textarea",{className:"form-control",style:{minWidth:"100%",height:"400px"},placeholder:"insert your json here",value:e,onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:this.handleSubmit},"Validate"))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E,null),document.getElementById("appcontainer")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[110,1,2]]]);
//# sourceMappingURL=main.92b3795d.chunk.js.map