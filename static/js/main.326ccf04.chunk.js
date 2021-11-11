(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{2:function(t,e,n){t.exports={input:"ContactForm_input__23jmc",container:"ContactForm_container__3JYhr",btn:"ContactForm_btn__117z9"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),o=n.n(r),i=n(13),s=n(7),u=n(22),l=n(9),b=n(10),h=n(11),m=n(14),j=n(12),d=n(2),p=n.n(d),O=n(0),f=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=Object(u.a)(),t.phoneInputId=Object(u.a)(),t.handleInputChange=function(e){t.setState(Object(l.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleOnSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t}return Object(h.a)(n,[{key:"reset",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){return Object(O.jsxs)("form",{onSubmit:this.handleOnSubmit,className:p.a.container,children:[Object(O.jsx)("label",{htmlFor:this.nameInputId,children:"Name "}),Object(O.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleInputChange,id:this.nameInputId,className:p.a.input}),Object(O.jsx)("label",{htmlFor:this.phoneInputId,children:"Number "}),Object(O.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleInputChange,id:this.phoneInputId,className:p.a.input}),Object(O.jsx)("button",{className:p.a.btn,type:"submit",children:"Add conttact"})]})}}]),n}(a.Component),C=f,g=n(6),x=n.n(g),v=function(t){var e=t.contactsFiltered,n=t.onClick,a=e();return Object(O.jsx)("ul",{className:x.a.ulStyle,children:a.map((function(t){return Object(O.jsxs)("li",{children:[t.name," ",t.number,Object(O.jsx)("button",{className:x.a.btn,type:"button",name:t.id,onClick:function(){return n(t.id)},children:"Del"})]},t.id)}))})},S=function(t){var e=t.value,n=t.onChange,a=t.inputStyle;return Object(O.jsxs)("label",{children:["Find contact by name",Object(O.jsx)("input",{name:"filter",value:e,onChange:n,className:a})]})},I=function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),l=o[0],b=o[1];return Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&c(t)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(C,{onSubmit:function(t){var e=t.name,a=t.number;if(console.log(e.toLowerCase().split(" ").join("")),n.some((function(t){return t.name.toLowerCase()===e.toLowerCase()})))alert("".concat(e," is already in contacts"));else{var r={id:Object(u.a)(),name:e,number:a};c((function(t){return[r].concat(Object(i.a)(t))}))}}}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(S,{value:l,onChange:function(t){b(t.currentTarget.value)},inputStyle:p.a.input}),Object(O.jsx)(v,{contactsFiltered:function(){return console.log(n),n.filter((function(t){return t.name.toLowerCase().includes(l.toLowerCase())}))},onClick:function(t){return c((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})};o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={btn:"ContactList_btn__3-San",ulStyle:"ContactList_ulStyle__3X4Mb"}}},[[21,1,2]]]);
//# sourceMappingURL=main.326ccf04.chunk.js.map