(window.webpackJsonp=window.webpackJsonp||[]).push([[19,52],{"6Bdc":function(e,t,n){"use strict";var r=n("VtSi"),a=n.n(r),o=n("QsI/"),i=n("zygG"),c=n("ERkP"),u=n.n(c),d=n("L7b9"),s=n("ljKo"),l=n("VU+f"),f=n("fWan"),p=n("B68Z"),m=n("1U1M"),v=n("bQa+"),h=n("ViYO"),y=n("p2kv"),g=n("yVh0"),b=n("2SGB"),w=n("XIyH"),S=u.a.createElement,k=Object(s.d)({mapPropsToValues:function(e){return{id:e.item.id||null,name:e.item.name||"",info:e.item.info||""}},validationSchema:d.a().shape({name:d.b().required("Required!"),info:d.b().required("Required")}),handleSubmit:function(e){}});t.a=k((function(e){var t=e.isValid,n=e.item,r=e.values,u=e.touched,d=e.errors,k=(e.dirty,e.handleChange),x=e.handleBlur,C=(e.handleReset,e.isSubmitting,{id:r.id,type:"secondary",name:r.name,info:r.info}),E=Object(c.useContext)(y.a),_=(E.state,E.dispatch),R=Object(c.useState)(!1),I=R[0],M=R[1],A=Object(m.a)(v.d),j=Object(i.a)(A,2),O=j[0],P=(j[1].data,Object(g.a)()),D=function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}return e.next=3,O({variables:{addressInput:JSON.stringify(C)}});case 3:e.sent,M(!0),_({type:"ADD_OR_UPDATE_ADDRESS",payload:C}),Object(l.b)(),M(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return S(s.b,null,S(h.b,null,S(h.b,null,P.formatMessage({id:(null===n||void 0===n?void 0:n.id)?"editAddressId":"addNewAddressId",defaultMessage:"Address name"}))),S(h.a,null,S(f.a,{id:"name",type:"text",placeholder:P.formatMessage({id:"addressRefId",defaultMessage:"Address name"}),error:u.name&&d.name,value:r.name,onChange:k,onBlur:x})),S(h.a,null,S(f.a,{id:"info",as:"textarea",placeholder:"Enter Address",error:u.info&&d.info,value:r.info,onChange:k,onBlur:x})),S(p.a,{onClick:D,type:"submit",style:{width:"100%",height:"44px"},loader:S(w.a,null),isDisabled:I,isLoading:I},S(b.a,{id:"savedAddressId",defaultMessage:"Save Address"})))}))},DSo7:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},H8eV:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("ERkP"),a=n.n(r),o=n("ysqo"),i=n.n(o),c=a.a.createElement,u=function(e){var t=e.title,n=e.description,r=e.canonical,a=e.css,o=e.js,u=e.image;return c(i.a,null,c("title",null,t),c("meta",{name:"description",content:n}),c("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"}),c("meta",{property:"og:type",content:"website"}),c("meta",{name:"og:title",property:"og:title",content:t}),c("meta",{name:"og:description",property:"og:description",content:n}),c("meta",{property:"og:site_name",content:"Proper Noun"}),c("meta",{property:"og:url",content:"".concat(r)}),c("meta",{name:"twitter:card",content:"summary"}),c("meta",{name:"twitter:title",content:t}),c("meta",{name:"twitter:description",content:n}),c("meta",{name:"twitter:site",content:"@propernounco"}),c("meta",{name:"twitter:creator",content:"@propernounco"}),a&&c("link",{rel:"stylesheet",href:"".concat(a)}),c("meta",u?{property:"og:image",content:"".concat(u)}:{property:"og:image",content:"https://www.propernoun.co/static/images/proper-noun-social.png"}),u&&c("meta",{name:"twitter:image",content:"".concat(u)}),r&&c("link",{rel:"canonical",href:"".concat(r)}),o&&c("script",{type:"text/javascript",src:"".concat(o)}))}},J9Yr:function(e,t,n){"use strict";var r=n("zQIG"),a=n("N7I1"),o=n("8mBC"),i=n("I/kN"),c=n("cMav"),u=n("pSQP"),d=n("iN+R");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("ERkP"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(d(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(c){i(d,c);var u=s(d);function d(e){var o;return r(this,d),o=u.call(this,e),f&&(t.add(a(o)),n(a(o))),o}return o(d,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(d,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),d}(l.Component))}},"QsI/":function(e,t,n){"use strict";function r(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(d){return void n(d)}c.done?t(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function c(e){r(i,a,o,c,u,"next",e)}function u(e){r(i,a,o,c,u,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return a}))},TZT2:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("ERkP"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},VtSi:function(e,t,n){e.exports=n("3yYM")},XIyH:function(e,t,n){"use strict";var r=n("ERkP"),a=n.n(r),o=n("j/s1"),i=n("tZdC"),c=a.a.createElement,u=Object(o.f)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]),d=o.e.div.withConfig({displayName:"loader__Spinner",componentId:"phzp1h-0"})(["width:24px;height:24px;border:4px solid ",";border-top:3px solid ",";border-radius:50%;transition-property:transform;animation-name:",";animation-duration:1.2s;animation-iteration-count:infinite;animation-timing-function:linear;"],Object(i.a)("colors.white","#ffffff"),(function(e){return e.color?e.color:Object(i.a)("colors.primary.regular","#009e7f")}),u);t.a=function(e){return c(d,e)}},YBd4:function(e,t,n){"use strict";var r=n("ERkP"),a=n.n(r),o=n("j/s1"),i=a.a.createElement,c=o.e.div.withConfig({displayName:"radio-group__RadioGroupWrapper",componentId:"sc-1o1amfx-0"})(["display:flex;flex-wrap:wrap;"]);t.a=function(e){var t=e.items,n=void 0===t?[]:t,r=e.component,a=e.containerClassName,o=e.secondaryComponent;return i(c,{className:"radioGroup ".concat(a).trim()},null===n||void 0===n?void 0:n.map((function(e,t){return r&&r(e,t)})),o&&o)}},bOkD:function(e,t,n){var r=n("cHE3");e.exports=function(e){if(Array.isArray(e))return r(e)}},dq4L:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("ERkP"))&&r.__esModule?r:{default:r},o=n("TZT2");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},fDRB:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("KD1n"),a=n("H5qd"),o=n.n(a);function i(){var e=Object(r.a)(["\n  mutation($contactId: String!) {\n    deleteContact(contactId: $contactId) {\n      id\n      name\n      contact {\n        id\n        type\n        number\n      }\n    }\n  }\n"]);return i=function(){return e},e}function c(){var e=Object(r.a)(["\n  mutation($contactInput: String!) {\n    updateContact(contactInput: $contactInput) {\n      id\n      name\n      contact {\n        id\n        type\n        number\n      }\n    }\n  }\n"]);return c=function(){return e},e}o()(c());var u=o()(i())},"iN+R":function(e,t,n){var r=n("bOkD"),a=n("DSo7"),o=n("D7XE"),i=n("uYlf");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},"op+c":function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("ERkP"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=a},quMH:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n("ERkP"),a=n.n(r),o=n("j/s1"),i=a.a.createElement;function c(e){var t=e.message;return i(u,null,t)}var u=o.e.aside.withConfig({displayName:"error-message__StyledAside",componentId:"spyukh-0"})({display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",padding:"1.5rem",fontSize:"15px",color:"000",backgroundColor:"#fff"})},uYlf:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},yVh0:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("ERkP"),a=n("YQpL"),o=n("R56p");function i(){var e=r.useContext(a.a);return Object(o.f)(e),e}},ysqo:function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r=u(n("ERkP")),a=u(n("J9Yr")),o=n("TZT2"),i=n("op+c"),c=n("dq4L");function u(e){return e&&e.__esModule?e:{default:e}}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=l.length;c<u;c++){var d=l[c];if(a.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?o=!1:n.add(d);else{var s=a.props[d],f=r[d]||new Set;f.has(s)?o=!1:(f.add(s),r[d]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,a.default)();function m(e){var t=e.children;return(r.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:(0,c.isInAmpMode)(e)},t)}))})))}m.rewind=p.rewind;var v=m;t.default=v}}]);