(this["webpackJsonpdutch-treat"]=this["webpackJsonpdutch-treat"]||[]).push([[0],{287:function(n,e,t){"use strict";t.r(e);var r=t(5),i=t(0),a=t(35),c=t.n(a),o=t(113),u=t(74),s=(t(170),t(24)),d=t(8),l=t(9),p=t(75),j=t(58);function b(){var n=Object(l.a)(["\n  display: inline-block;\n  width: 100px;\n  text-align: right;\n"]);return b=function(){return n},n}function f(){var n=Object(l.a)(["\n  display: inline-block;\n  width: 50px;\n"]);return f=function(){return n},n}function x(){var n=Object(l.a)(["\n  width: 80px;\n  margin-left: 5px;\n  display: inline-block;\n  text-align: right;\n"]);return x=function(){return n},n}function O(){var n=Object(l.a)(["\n  margin-bottom: 5px;\n  font-size: 15px;\n  list-style-type: disc;\n"]);return O=function(){return n},n}function h(){var n=Object(l.a)(["\n  padding-left: 20px;\n"]);return h=function(){return n},n}function m(){var n=Object(l.a)(["\n  padding: 10px 10px;\n  border-bottom: 1px solid #dedede;\n  list-style: none;\n\n  &:last-child {\n    border-bottom: none;\n  }\n"]);return m=function(){return n},n}function g(){var n=Object(l.a)(["\n  padding: 0;\n"]);return g=function(){return n},n}function v(){var n=Object(l.a)(["\n  font-size: 13px;\n  color: #646464;\n  margin: 10px 0px;\n"]);return v=function(){return n},n}function y(){var n=Object(l.a)(["\n  margin-left: 5px;\n  font-size: 14px;\n  color: #646464;\n"]);return y=function(){return n},n}function L(){var n=Object(l.a)(["\n  font-weight: bold;\n  font-size: 17px;\n"]);return L=function(){return n},n}function P(){var n=Object(l.a)(["\n  margin-bottom: 10px;\n"]);return P=function(){return n},n}function w(){var n=Object(l.a)(["\n  font-size: 22px;\n  color: #222;\n  font-weight: bold;\n"]);return w=function(){return n},n}function k(){var n=Object(l.a)(["\n  color: #222;\n  border-top: 1px solid #dedede;\n  font-weight: bold;\n  padding: 10px 0px;\n  ul {\n    margin-top: 10px;\n    margin-left: 15px;\n  }\n"]);return k=function(){return n},n}var N=function(n){var e=n.userList,t=n.paymentList,a=Object(i.useState)(0),c=Object(j.a)(a,2),o=c[0],u=c[1],s=Object(i.useState)({}),d=Object(j.a)(s,2),l=d[0],b=d[1],f=Object(i.useState)({}),x=Object(j.a)(f,2),O=x[0],h=x[1],m=Object(i.useMemo)((function(){return e.map((function(n){return n.userName})).reduce((function(n,t){return Object.assign(n,Object(p.a)({},t,{paymentTotal:0,tossList:e.reduce((function(n,e){return Object.assign(n,Object(p.a)({},e,0))}),{})}))}),{})}),[e]);return Object(i.useEffect)((function(){if(Object.keys(m).length){var n=m,e=0;console.log(n),t.map((function(t){var r=t.paymentPrice,i=t.participants,a=t.payerName;if(r&&a&&i.length){var c=r/i.length,o=n[a];e+=r,o.paymentTotal+=r,i.map((function(e){if(e!==a){var t=n[e],r=o.tossList[e]-c;r>=0?o.tossList[e]=r:(o.tossList[e]=0,t.tossList[a]+=-r)}}))}})),h(n),u(e)}}),[t,m]),Object(i.useEffect)((function(){var n={totalPrice:0};e.map((function(e){Object.keys(O).map((function(t){var r=Math.floor(O[t].tossList[e.userName]);n.totalPrice+=r,n[e.userName]=n[e.userName]?n[e.userName]+r:r}))})),b(n)}),[O]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(C,{children:["\uacb0\uc81c \uc815\ubcf4\xa0",Object(r.jsxs)(M,{children:[o.toLocaleString()," / ",e.length," =\xa0",(o/e.length).toLocaleString(),"\uc6d0"]})]}),Object(r.jsx)(U,{children:"* \ubaa8\ub4e0 \uacb0\uc81c\ub97c \ub354\uce58\ud398\uc774 \ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uc624\ucc28\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),Object(r.jsx)(I,{children:Object.keys(O).map((function(n,e){var t=O[n],i=t.paymentTotal,a=t.tossList,c=Object.keys(a).reduce((function(n,e){return n+Math.floor(a[e]||0)}),0);return Object(r.jsxs)(E,{children:[Object(r.jsxs)(z,{children:[Object(r.jsx)(T,{children:n}),Object(r.jsxs)(M,{children:["\uacb0\uc81c \uae08\uc561 : ",i.toLocaleString(),"\uc6d0 / \uc1a1\uae08 \uae08\uc561 :"," ",c.toLocaleString(),"\uc6d0 / \ucd1d \uc5ec\ud589 \uacbd\ube44 :"," ",(i+c-(l[n]||0)).toLocaleString(),"\uc6d0"]})]}),Object(r.jsx)(F,{children:Object.keys(a).map((function(e,t){return a[e]?Object(r.jsxs)(J,{children:[n," -> ",e," :\xa0",Math.floor(a[e]).toLocaleString(),"\uc6d0"]},t):null}))})]},e)}))}),Object.keys(l).length>0?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(C,{children:["\ud55c \ubc88\uc5d0 \ucc98\ub9ac\ud574\ubcfc\uae4c..?",Object(r.jsx)(U,{children:"* \ud55c \uba85\uc774 \ub2e4 \uc1a1\uae08\ubc1b\uc544\uc11c \uc815\uc0b0\ud55c\ub2e4\uba74?"})]}),Object(r.jsx)(S,{children:Object(r.jsxs)(F,{children:[Object.keys(O).map((function(n,e){var t=O[n],i=(t.paymentTotal,t.tossList),a=Object.keys(i).reduce((function(n,e){return n+Math.floor(i[e]||0)}),0);return Object(r.jsxs)(J,{children:[Object(r.jsxs)(R,{children:[n," :"]}),Object(r.jsxs)(A,{children:[a.toLocaleString(),"\uc6d0"]})]},e)})),Object(r.jsxs)(J,{children:[Object(r.jsx)(R,{children:"Total :"}),Object(r.jsxs)(A,{children:[l.totalPrice.toLocaleString(),"\uc6d0"]})]})]})}),Object(r.jsx)("div",{children:Object(r.jsx)(F,{children:Object.keys(l).map((function(n,e){return"totalPrice"!==n&&0!==l[n]?Object(r.jsxs)(J,{children:[n,"(\uc774)\uac00",Object(r.jsx)(B,{children:l[n].toLocaleString()}),"\xa0\uc6d0\uc744 \uc694\uccad\ud574\uc694!"]},e):null}))})})]}):null]})},S=d.d.div(k()),C=d.d.div(w()),z=d.d.div(P()),T=d.d.span(L()),M=d.d.span(y()),U=d.d.div(v()),I=d.d.ul(g()),E=d.d.li(m()),F=d.d.ul(h()),J=d.d.li(O()),B=d.d.span(x()),R=d.d.span(f()),A=d.d.span(b());function H(){var n=Object(l.a)(["\n  display: inline-block;\n  margin-left: 15px;\n  font-size: 14px;\n"]);return H=function(){return n},n}function D(){var n=Object(l.a)(["\n  display: inline-block;\n  font-size: 22px;\n  font-weight: bold;\n"]);return D=function(){return n},n}function K(){var n=Object(l.a)(["\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n"]);return K=function(){return n},n}var Q=function(n){var e=n.title,t=n.description;return Object(r.jsxs)(q,{children:[Object(r.jsx)(G,{children:e}),t&&Object(r.jsx)(V,{children:t})]})},q=d.d.div(K()),G=d.d.h3(D()),V=d.d.span(H());function W(){var n=Object(l.a)(["\n  margin-bottom: 50px;\n  font-size: 15px;\n  font-weight: bold;\n"]);return W=function(){return n},n}d.d.div(W());function X(){var n=Object(l.a)(["\n  padding: 10px 20px;\n  background: none;\n  margin-left: auto;\n  border: 1px solid ",";\n"]);return X=function(){return n},n}function Y(){var n=Object(l.a)(["\n  ",";\n  display: flex;\n  flex-direction: row;\n  text-align: right;\n"]);return Y=function(){return n},n}var Z=function(){return Object(r.jsx)($,{children:Object(r.jsx)(_,{children:"\uc800\uc7a5\ud558\uae30"})})},$=d.d.div(Y(),(function(n){return n.theme.layout.section})),_=d.d.button(X(),(function(n){return n.theme.color.point})),nn=t(59),en=function(){return{key:"xxxx-xxxx-xxxx-xxxxx".replace(/[xy]/g,(function(n){var e=16*Math.random()|0;return("x"==n?e:3&e|8).toString(16)})),participants:[],payerName:"",paymentPrice:0,title:""}},tn=function(){var n=Object(i.useState)([]),e=Object(j.a)(n,2),t=e[0],r=e[1];Object(i.useEffect)((function(){t.length||r([en()])}),[]);return{addPayment:function(){r([].concat(Object(nn.a)(t),[en()]))},paymentList:t,updateParticipants:function(n,e){var i=Object(nn.a)(t);i[e].participants=n,r(i)},updatePayerName:function(n,e){var i=Object(nn.a)(t);i[e].payerName=n,r(i)},updatePaymentPrice:function(n,e){var i=Object(nn.a)(t);i[e].paymentPrice=function(n){return parseInt(n.replace(/[^0-9]/g,""))}(n),r(i)},updateTitle:function(n,e){var i=Object(nn.a)(t);i[e].title=n,r(i)}}},rn=t(82),an=t(291),cn=t(290),on=rn.a.Option,un=function(n){var e=n.placeholder,t=n.value,i=n.userList,a=n.onChange;return Object(r.jsx)(rn.a,{placeholder:e,style:{width:"100%"},value:t,onChange:a,children:i.map((function(n,e){return Object(r.jsx)(on,{value:n.userName,children:n.userName},e)}))})},sn=t(292),dn=["pink","red","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime","success","processing","error","default","warning"],ln=function(n){var e=n.mode,t=void 0===e?"tags":e,i=n.value,a=n.userList,c=n.placeholder,o=n.changeSelect,s=function(n){var e=a.filter((function(e){return e.userName===n.value}));return e.length?e[0].tagColor:null};return Object(r.jsx)(rn.a,{mode:t,options:a.map((function(n){return{label:n.userName,value:n.userName}})),placeholder:c,style:{width:"100%"},tagRender:function(n){return function(n){var e=n.tagColor,t=n.value,i=n.closable,a=n.onClose;return e?Object(r.jsx)(sn.a,{closable:i,color:e,onClose:a,children:t}):Object(r.jsx)(r.Fragment,{})}(Object(u.a)(Object(u.a)({},n),{},{tagColor:s(n)}))},value:i,onChange:o})};function pn(){var n=Object(l.a)(["\n  padding: 5px 10px;\n"]);return pn=function(){return n},n}function jn(){var n=Object(l.a)(["\n  background: white;\n  border: 1px solid ",";\n  padding: 5px 10px;\n  border-radius: 5px;\n  width: 100%;\n"]);return jn=function(){return n},n}function bn(){var n=Object(l.a)(["\n  width: 100%;\n  padding: 15px;\n  text-align: center;\n  user-select: none;\n  cursor: pointer;\n  &:active,\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return bn=function(){return n},n}function fn(){var n=Object(l.a)(["\n  table {\n    table-layout: fixed;\n  }\n  .ant-table-footer {\n    padding: 0;\n  }\n"]);return fn=function(){return n},n}var xn=function(n){var e=n.paymentList,t=n.userList,i=n.addPayment,a=n.updateTitle,c=n.updatePaymentPrice,o=n.updatePayerName,u=n.updateParticipants,s=[{align:"center",dataIndex:"title",key:"title",render:function(n,e,t){return Object(r.jsx)(mn,{maxLength:15,placeholder:"\uc0ac\uc6a9\ucc98",value:n,onChange:function(n){return a(n.target.value,t)}})},sorter:!0,title:"\uc0ac\uc6a9\ucc98",width:150},{align:"center",dataIndex:"paymentPrice",render:function(n,e,t){return Object(r.jsx)(mn,{value:n.toLocaleString(),onChange:function(n){return c(n.target.value,t)}})},sorter:!0,title:"\uc9c0\ucd9c \uae08\uc561",width:150},{align:"center",dataIndex:"payerName",key:"payerName",render:function(n,e,i){return Object(r.jsx)(un,{placeholder:"\uacb0\uc81c\uc790",userList:t,value:n,onChange:function(n){return o(n,i)}})},sorter:!0,title:"\uacb0\uc81c\uc790",width:150},{align:"center",dataIndex:"participants",key:"participants",render:function(n,e,i){return Object(r.jsx)(ln,{changeSelect:function(n){return u(n,i)},mode:"multiple",placeholder:"\ucc38\uc5ec\uc790",userList:t,value:n})},title:"\ucc38\uc5ec\uc790"}];return Object(r.jsx)(On,{children:Object(r.jsx)(cn.a,{columns:s,dataSource:e,footer:function(){return Object(r.jsxs)(hn,{onClick:i,children:[Object(r.jsx)(an.a,{})," \ud56d\ubaa9 \ucd94\uac00"]})},rowKey:function(n){return n.key}})})},On=d.d.div(fn()),hn=d.d.button(bn()),mn=d.d.input(jn(),(function(n){return n.theme.color.borderColor}));d.d.button(pn());function gn(){var n=Object(l.a)(["\n  display: inline-block;\n  margin-left: 10px;\n"]);return gn=function(){return n},n}function vn(){var n=Object(l.a)(["\n  display: inline-block;\n  text-align: right;\n  width: 150px;\n  padding: 0px 15px;\n  border-right: 1px solid #dedede;\n"]);return vn=function(){return n},n}function yn(){var n=Object(l.a)(["\n  display: inline-block;\n  text-align: center;\n  width: 70px;\n  border-left: 1px solid #dedede;\n  border-right: 1px solid #dedede;\n"]);return yn=function(){return n},n}function Ln(){var n=Object(l.a)(["\n  display: inline-block;\n  font-weight: bold;\n  min-width: 200px;\n"]);return Ln=function(){return n},n}function Pn(){var n=Object(l.a)(["\n  padding: 10px 10px;\n  border-bottom: 1px solid #dedede;\n  list-style: none;\n\n  &:last-child {\n    border-bottom: none;\n  }\n"]);return Pn=function(){return n},n}function wn(){var n=Object(l.a)(["\n  padding: 0;\n"]);return wn=function(){return n},n}function kn(){var n=Object(l.a)(["\n  ",";\n"]);return kn=function(){return n},n}var Nn=function(n){var e=n.userList,t=n.paymentList,i=n.addPayment,a=n.updateTitle,c=n.updatePaymentPrice,o=n.updatePayerName,u=n.updateParticipants;return Object(r.jsxs)(Sn,{children:[Object(r.jsx)(Q,{description:"\uacb0\uc81c\ub0b4\uc5ed \uc785\ub825",title:"Step2"}),Object(r.jsx)(xn,{addPayment:i,paymentList:t,updateParticipants:u,updatePayerName:o,updatePaymentPrice:c,updateTitle:a,userList:e}),Object(r.jsx)(Cn,{children:t.map((function(n,e){return Object(r.jsxs)(zn,{children:[Object(r.jsx)(Tn,{children:n.title}),Object(r.jsx)(Mn,{children:n.payerName}),Object(r.jsxs)(Un,{children:[n.paymentPrice.toLocaleString(),"\uc6d0"]}),Object(r.jsx)(In,{children:Object(r.jsx)(rn.a,{mode:"multiple",options:n.participants.map((function(n,e){return{label:e,value:n}})),style:{width:"100%"},value:n.participants,showArrow:!0})})]},e)}))})]})},Sn=d.d.section(kn(),(function(n){return n.theme.layout.section})),Cn=d.d.ul(wn()),zn=d.d.li(Pn()),Tn=d.d.span(Ln()),Mn=d.d.span(yn()),Un=d.d.span(vn()),In=d.d.span(gn());function En(){var n=Object(l.a)(["\n  ",";\n\n  .ant-select {\n    width: 100%;\n    font-size: 15px;\n\n    .ant-select-selection-placeholder {\n      left: 22px;\n    }\n    .ant-select-selector {\n      padding: 10px 15px;\n    }\n    .ant-tag {\n      margin-right: 6px;\n      font-size: 15px;\n      padding: 5px 10px;\n    }\n    .ant-tag-close-icon {\n      font-size: 12px;\n      vertical-align: middle;\n      margin: -3px 0 0 9px;\n    }\n  }\n"]);return En=function(){return n},n}var Fn=function(n){var e=n.userList,t=n.addUser,i=n.removeUser;return Object(r.jsxs)(Jn,{children:[Object(r.jsx)(Q,{description:"\ucc38\uac00\uc790 \uc785\ub825",title:"Step1"}),Object(r.jsx)(ln,{changeSelect:function(n){if(n.length>e.length)t({tagColor:dn[Math.floor(Math.random()*dn.length)],userName:n[n.length-1]});else{var r=e.filter((function(e){return!n.includes(e.userName)}));i(r[0].userName)}},placeholder:"Please Select User",userList:e,value:e.map((function(n){return n.userName}))})]})},Jn=d.d.section(En(),(function(n){return n.theme.layout.section}));function Bn(){var n=Object(l.a)([""]);return Bn=function(){return n},n}var Rn=function(){var n=function(){var n=Object(i.useState)([]),e=Object(j.a)(n,2),t=e[0],r=e[1];return Object(i.useEffect)((function(){var n=localStorage.getItem("userList");n&&r(JSON.parse(n))}),[]),Object(i.useEffect)((function(){localStorage.setItem("userList",JSON.stringify(t))}),[t]),{addUser:function(n){var e=n.userName,t=n.tagColor;r((function(n){return[].concat(Object(nn.a)(n),[{tagColor:t,userName:e}])}))},removeUser:function(n){var e=t.filter((function(e){return e.userName!==n}));r(e)},userList:t}}(),e=n.userList,t=n.addUser,a=n.removeUser,c=tn(),o=c.paymentList,u=c.addPayment,s=c.updateParticipants,d=c.updatePayerName,l=c.updatePaymentPrice,p=c.updateTitle;return Object(r.jsxs)(An,{children:[Object(r.jsx)(Z,{}),Object(r.jsx)(Fn,{addUser:t,removeUser:a,userList:e}),Object(r.jsx)(Nn,{addPayment:u,paymentList:o,updateParticipants:s,updatePayerName:d,updatePaymentPrice:l,updateTitle:p,userList:e}),Object(r.jsx)(N,{paymentList:o,userList:e})]})},An=d.d.div(Bn());function Hn(){var n=Object(l.a)(["\n  flex: 0 0 200px;\n  padding: 10px 20px;\n"]);return Hn=function(){return n},n}var Dn=function(){return Object(r.jsx)(Kn,{})},Kn=d.d.div(Hn());function Qn(){var n=Object(l.a)(["\n  padding: 10px 20px;\n  font-size: 20px;\n"]);return Qn=function(){return n},n}var qn=function(){return Object(r.jsx)(Gn,{children:"public.doriri@gmail.com"})},Gn=d.d.footer(Qn());function Vn(){var n=Object(l.a)(["\n  padding: 15px 20px;\n  font-size: 20px;\n  color: white;\n  background: ",";\n  /* background: #333; */\n"]);return Vn=function(){return n},n}var Wn=function(){return Object(r.jsx)(Xn,{children:"Dutch Pay"})},Xn=d.d.header(Vn(),(function(n){return n.theme.color.point}));function Yn(){var n=Object(l.a)(["\n  flex: 0 0 200px;\n  padding: 10px 20px;\n"]);return Yn=function(){return n},n}var Zn=function(){return Object(r.jsx)($n,{})},$n=d.d.section(Yn());function _n(){var n=Object(l.a)(["\n  flex: 1 1 auto;\n"]);return _n=function(){return n},n}function ne(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  max-width: 1600px;\n  margin: 0 auto;\n"]);return ne=function(){return n},n}function ee(){var n=Object(l.a)([""]);return ee=function(){return n},n}var te=function(n){var e=n.children;return Object(r.jsxs)(re,{children:[Object(r.jsx)(Wn,{}),Object(r.jsxs)(ie,{children:[Object(r.jsx)(Zn,{}),Object(r.jsx)(ae,{children:e}),Object(r.jsx)(Dn,{})]}),Object(r.jsx)(qn,{})]})},re=d.d.div(ee()),ie=d.d.div(ne()),ae=d.d.section(_n()),ce=[{component:function(){return Object(r.jsx)(te,{children:Object(r.jsx)(Rn,{})})},path:"/"}],oe=t(160);function ue(){var n=Object(l.a)(["\n  ",'\n  * {\n    box-sizing: border-box;\n  }\n  body{\n    background-color: #eaeaea;\n    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  input, button {\n    background-color: transparent;\n    border: none;\n    outline: none;\n  }\n  h1, h2, h3, h4, h5, h6{\n    font-family:\'Maven Pro\', sans-serif;\n  }\n  ol, ul, li {\n    list-style: none;\n  }\n  img {\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n']);return ue=function(){return n},n}var se=Object(d.b)(ue(),oe.a),de=[375,414,768,960,1280],le={color:{borderColor:"#d9d9d9",point:"#743BE0"},layout:{borderRadius:"5px",section:"\n    margin: 20px 0px;\n    border: 1px solid #d1cad8;\n    padding: 20px;\n    border-radius: 10px;\n    background: white;\n  "},mediaQuery:{lg:"@media screen and (min-width: ".concat(de[3],")"),md:"@media screen and (min-width: ".concat(de[2],")"),sm:"@media screen and (min-width: ".concat(de[1],")"),xl:"@media screen and (min-width: ".concat(de[4],")"),xs:"@media screen and (min-width: ".concat(de[0],")")}};var pe=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(se,{}),Object(r.jsx)(d.a,{theme:le,children:Object(r.jsx)(i.Suspense,{fallback:Object(r.jsx)("div",{style:{minHeight:"100vh"}}),children:Object(r.jsx)(s.c,{children:ce.map((function(n,e){return Object(r.jsx)(s.a,Object(u.a)({},n),e)}))})})})]})};c.a.render(Object(r.jsx)(o.a,{children:Object(r.jsx)(pe,{})}),document.getElementById("root"))}},[[287,1,2]]]);
//# sourceMappingURL=main.c439be74.chunk.js.map