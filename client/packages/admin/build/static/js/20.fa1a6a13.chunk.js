(this["webpackJsonp@ditto-ecommerce/admin"]=this["webpackJsonp@ditto-ecommerce/admin"]||[]).push([[20],{100:function(e,t,a){"use strict";a.d(t,"a",(function(){return l.a}));var n=a(49),r=a(58),o=a(0),c=a.n(o),i=a(418),l=a(213);t.b=e=>{let t=e.children,a=e.overrides,o=Object(r.a)(e,["children","overrides"]);return c.a.createElement(i.a,Object.assign({},o,{overrides:Object(n.a)({BaseButton:{style:({$theme:e,$size:t,$shape:a})=>Object(n.a)(Object(n.a)({},(({$theme:e,$size:t})=>{switch(t){case l.c.compact:case l.c.large:default:return{paddingLeft:e.sizing.scale25,paddingRight:e.sizing.scale25}}})({$theme:e,$size:t})),(({$theme:e,$size:t,$shape:a})=>{let n=e.buttonBorderRadius;return a===l.b.pill?n=t===l.c.compact?"30px":t===l.c.large?"42px":"38px":a===l.b.round&&(n="50%"),{borderTopRightRadius:n,borderBottomRightRadius:n,borderTopLeftRadius:n,borderBottomLeftRadius:n}})({$theme:e,$size:t,$shape:a}))}},a)}),t)}},101:function(e,t,a){"use strict";var n=a(49),r=a(0),o=a.n(r),c=a(407);t.a=e=>{let t=Object.assign({},e);return o.a.createElement(c.a,Object.assign({overrides:{Input:{style:({$theme:e})=>Object(n.a)({},(({$theme:e})=>Object(n.a)({color:e.colors.textDark},e.typography.fontBold14))({$theme:e}))}}},t))}},103:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return u})),a.d(t,"d",(function(){return p})),a.d(t,"a",(function(){return b}));var n=a(49),r=a(0),o=a.n(r),c=a(395),i=a(72);const l=Object(i.b)("h3",({$theme:e})=>Object(n.a)(Object(n.a)({},e.typography.font18),{},{marginTop:"0",marginBottom:"0",color:e.colors.textDark,textAlign:"center"})),s=Object(i.b)("label",({$theme:e})=>Object(n.a)(Object(n.a)({},e.typography.fontBold14),{},{marginBottom:"10px",color:e.colors.textDark})),d=Object(i.b)("span",({$theme:e})=>Object(n.a)(Object(n.a)({},e.typography.fontBold12),{},{color:e.colors.red400,marginTop:"5px",marginLeft:"auto"})),m=({children:e})=>o.a.createElement(c.a,{overrides:{Block:{style:{width:"100%",display:"flex",flexDirection:"column",margin:"20px 0",":first-child":{marginTop:0},":last-child":{marginBottom:0},":only-child":{margin:0}}}}},e),u=({children:e})=>o.a.createElement(s,null,e),p=({children:e})=>o.a.createElement(l,null,e),b=({children:e})=>o.a.createElement(d,null,e)},104:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n="http://ec2-18-228-12-159.sa-east-1.compute.amazonaws.com/";Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_URL:"http://ec2-18-228-12-159.sa-east-1.compute.amazonaws.com/api",REACT_APP_IMAGE_URL:"http://ec2-18-228-12-159.sa-east-1.compute.amazonaws.com/"}).NEXT_PUBLIC_APP_IMAGE_URL},431:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a(58),o=a(34),c=a(0),i=a.n(c),l=a(6),s=a(390),d=a(387),m=a(54),u=a(103),p=a(72);const b=Object(p.b)("div",({$theme:e})=>({width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:e.colors.borderF1,"@media only screen and (max-width: 520px)":{backgroundColor:"#fff"}})),h=Object(p.b)("div",()=>({width:"470px",borderRadius:"3px",backgroundColor:"#ffffff",padding:"50px",display:"flex",flexDirection:"column","@media only screen and (max-width: 500px)":{width:"100%",padding:"30px"}})),f=Object(p.b)("div",()=>({display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"})),g=Object(p.b)("img",()=>({display:"block",backfaceVisibility:"hidden",maxWidth:"150px"}));var E=a(101),O=a(100),j=a(52),x=a(26),y=a(104);function v(){const e=Object(o.a)(['\n    query GetSetting {\n        getSiteSetting(key: "site-settings") {\n            id\n            key\n            value\n        }\n    }\n']);return v=function(){return e},e}const w={phone:"543624951926",password:"123456"},R=Object(j.a)(v());const $=()=>d.a().shape({phone:d.b().required("Phone Number is Required!"),password:d.b().required("Password is Required!")}),B=e=>{let t=e.field,a=(e.form,Object(r.a)(e,["field","form"]));return i.a.createElement(E.a,Object.assign({},t,a))};t.default=()=>{const e=Object(x.b)(R),t=e.data,a=(e.error,e.refetch,Object(c.useState)(null)),r=Object(n.a)(a,2),o=r[0],d=r[1];i.a.useEffect(()=>{t&&d(JSON.parse(t.getSiteSetting.value))},[t]);let p=document.getElementById("favicon");o&&(p.href=y.a+o.favicon);let E=Object(l.g)(),j=Object(l.h)();const v=Object(c.useContext)(m.a),_=v.authenticate,S=v.isAuthenticated,T=v.error;if(S)return i.a.createElement(l.a,{to:{pathname:"/admin"}});let L=(j.state||{from:{pathname:"/"}}).from;return i.a.createElement(b,null,i.a.createElement(h,null,i.a.createElement(s.c,{initialValues:w,onSubmit:({phone:e,password:t})=>{_({phone:e,password:t},()=>{E.replace(L)})},render:({errors:e,status:t,touched:a,isSubmitting:n})=>i.a.createElement(s.b,null,i.a.createElement(u.b,null,i.a.createElement(f,null,i.a.createElement(g,{src:o?y.a+o.image:"",alt:o?o.site_title:""})),i.a.createElement(u.d,null,"Log in to admin")),i.a.createElement(u.b,null,i.a.createElement(u.c,null,"Email"),i.a.createElement(s.a,{type:"text",name:"phone",component:B,placeholder:"Ex: demo@demo.com"}),e.phone&&a.phone&&i.a.createElement(u.a,null,e.phone)),i.a.createElement(u.b,null,i.a.createElement(u.c,null,"Password"),i.a.createElement(s.a,{type:"password",name:"password",component:B,placeholder:"Ex: demo"}),e.password&&a.password&&i.a.createElement(u.a,null,e.password)),i.a.createElement(O.b,{type:"submit",disabled:n,overrides:{BaseButton:{style:({$theme:e})=>({width:"100%",marginLeft:"auto",borderTopLeftRadius:"3px",borderTopRightRadius:"3px",borderBottomLeftRadius:"3px",borderBottomRightRadius:"3px"})}}},"Submit"),"string"===typeof T&&(null===T||void 0===T?void 0:T.length)&&i.a.createElement(u.a,null,T)),validationSchema:$})))}}}]);
//# sourceMappingURL=20.fa1a6a13.chunk.js.map