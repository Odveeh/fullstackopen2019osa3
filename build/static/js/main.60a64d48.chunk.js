(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},19:function(e,n,t){},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),l=t(13),u=t.n(l),c=(t(19),t(2)),r=(t(20),t(3)),i=t.n(r),s="/api/persons",d=function(e){return console.log("axios post urli: ",s),i.a.post(s,e)},m=function(e){var n=s+"/".concat(e);return console.log("axios delete urli:",s+"/".concat(e)),i.a.delete(n)},f=function(){return console.log("axios get"),i.a.get(s)},h=function(e,n){var t=s+"/".concat(e);return console.log("axios replace"),i.a.put(t,n)},g=function(e){return a.a.createElement("div",null,a.a.createElement("h2",null,"Numbers"),e.peopleToShow().map((function(n){return a.a.createElement("div",{key:n.name}," ",n.name," ",n.number," ",a.a.createElement("button",{onClick:function(){return e.deleteContact(n.id,n.name)}}," delete this nephew")," ")})))},p=function(e){return a.a.createElement("div",null,"filter shown with:",a.a.createElement("input",{value:e.filter,onChange:e.handleFilterChange}))},b=function(e){return null===e.message?null:a.a.createElement("div",{className:"notifikaatio"},e.message)},v=function(e){return null===e.message?null:a.a.createElement("div",{className:"errori"},e.message)},E=function(e){return a.a.createElement("div",null,a.a.createElement("h2",null," Add a new "),a.a.createElement("form",{onSubmit:e.addNewPerson},a.a.createElement("div",null,"name: ",a.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),a.a.createElement("div",null,"number: ",a.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add"))))},w=function(){var e=Object(o.useState)([]),n=Object(c.a)(e,2),t=n[0],l=n[1],u=Object(o.useState)(""),r=Object(c.a)(u,2),i=r[0],s=r[1],w=Object(o.useState)(""),O=Object(c.a)(w,2),j=O[0],C=O[1],k=Object(o.useState)(""),N=Object(c.a)(k,2),S=N[0],T=N[1],y=Object(o.useState)(null),x=Object(c.a)(y,2),P=x[0],A=x[1],F=Object(o.useState)(null),J=Object(c.a)(F,2),R=J[0],B=J[1];Object(o.useEffect)((function(){console.log("efekti"),f().then((function(e){console.log("promise fulfilled!"),console.log("response data:",e.data),l(e.data)}))}),[]);var D=function(e,n){return e.includes(n)?(console.log("string:",e,"substring:",n),console.log("substring inside string"),!0):(console.log("no substring inside string"),!1)};return a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement(b,{message:P}),a.a.createElement(v,{message:R}),a.a.createElement(p,{filter:S,handleFilterChange:function(e){T(e.target.value),console.log("filtteri:",S)}}),a.a.createElement(E,{addNewPerson:function(e){e.preventDefault();var n={name:i,number:j},o=t.map((function(e){return e.name}));if(console.log("mapitetutnimet: ",o),o.includes(n.name)){if(console.log("nimi on jo listoilla!"),window.confirm("already added to the phonebook, replace old number with new one?")){var a=o.indexOf(n.name)+1;console.log("oikea indeksi:",t[a-1].id);var u=t[a-1].id;h(u,n).then((function(e){return f().then((function(e){l(e.data),A("".concat(n.name,"'s phonenumber updated!")),setTimeout((function(){A(null)}),2e3)}))})).catch((function(e){console.log("numeron muutos ep\xe4onnistui!",e.response.status),404===e.response.status&&(B("Resource not found on the server (404). Can't change number because contact has already been deleted!"),setTimeout((function(){B(null)}),5e3))}))}}else console.log("axios palvelin POST..."),d(n).then((function(e){console.log("server response: ",e),console.log("addperson data:",e.data),n.id=e.data.id,l(t.concat(n)),A("".concat(n.name," added to the phonebook!")),setTimeout((function(){A(null)}),2e3)})).catch((function(e){console.log("error henkil\xf6n lis\xe4\xe4misess\xe4",e.response.data.error),B(e.response.data.error),setTimeout((function(){B(null)}),2e3)}));s(""),C("")},newName:i,handleNameChange:function(e){s(e.target.value)},newNumber:j,handleNumberChange:function(e){C(e.target.value)}}),a.a.createElement(g,{peopleToShow:function(){return""===S?t:(console.log("filltter\xf6inti: ",t.filter((function(e){return D(e.name,S)}))),t.filter((function(e){return D(e.name,S)})))},deleteContact:function(e,n){window.confirm("rly wanna delete dis badboi right here? (".concat(n,")"))&&m(e).then((function(e){f().then((function(e){console.log("responsedata of returnAll:",e.data),l(e.data),A("".concat(n," deleted from phonebook!")),setTimeout((function(){A(null)}),2e3)}))})).catch((function(e){console.log("deletointi ep\xe4oinnistui: ",e),404===e.response.status&&(B("Resource not found (404). Could not delete contact because it has already been deleted!"),setTimeout((function(){B(null)}),2e3))})).then((function(e){f().then((function(e){l(e.data),console.log("local contacts synced with server")}))}))}}))};u.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.60a64d48.chunk.js.map