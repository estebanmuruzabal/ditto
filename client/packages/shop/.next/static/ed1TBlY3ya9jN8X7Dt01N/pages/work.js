(window.webpackJsonp=window.webpackJsonp||[]).push([[43,56],{"1Zbg":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("ERkP"),r=n.n(a).a.createElement,o=function(e){var t=e.color,n=void 0===t?"currentColor":t,a=e.width,o=void 0===a?"18px":a,i=e.height;return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 7.2 7.2",width:o,height:void 0===i?"18px":i},r("path",{d:"M64,69.7v1.5h1.5l4.42-4.42-1.5-1.5Zm7.08-4.08a.387.387,0,0,0,0-.56l-.94-.94a.387.387,0,0,0-.56,0l-.74.74,1.5,1.5Z",transform:"translate(-64 -63.999)",fill:n}))}},"2nMb":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("ERkP"),r=n.n(a).a.createElement,o=function(e){var t=e.color,n=void 0===t?"currentColor":t,a=e.width,o=void 0===a?"18px":a,i=e.height;return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10.003 10",width:o,height:void 0===i?"18px":i},r("path",{"data-name":"_ionicons_svg_ios-close (5)",d:"M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z",transform:"translate(-160.5 -160.55)",fill:n}))}},"4Jh2":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("KD1n"),r=n("H5qd"),o=n.n(r);function i(){var e=Object(a.a)(["\n  mutation($cardId: String!) {\n    deletePaymentCard(cardId: $cardId) {\n      id\n      name\n      address {\n        id\n        name\n        info\n      }\n    }\n  }\n"]);return i=function(){return e},e}function s(){var e=Object(a.a)(["\n  mutation($addressInput: String!) {\n    updateAddress(addressInput: $addressInput) {\n      id\n      name\n      address {\n        id\n        name\n        info\n      }\n    }\n  }\n"]);return s=function(){return e},e}o()(s());var d=o()(i())},"6/p4":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n("KD1n"),r=n("H5qd"),o=n.n(r);function i(){var e=Object(a.a)(["\n  mutation DeletePhoneNumber ( $id: ID!, $phoneId: String!) {\n    deletePhoneNumber (\n      id: $id,\n      phoneId: $phoneId\n    ) {\n     status\n      message\n    }\n  }\n"]);return i=function(){return e},e}function s(){var e=Object(a.a)(["\n  mutation SetPhoneNumberPrimary  ( $id: ID!, $phoneId: String!) {\n    setPhoneNumberPrimary(\n      id: $id,\n      phoneId: $phoneId\n    ) {\n     status\n      message\n    }\n  }\n"]);return s=function(){return e},e}function d(){var e=Object(a.a)(["\n  mutation UpdatePhoneNumber ( $id: ID!, $phoneId: String!, $number:  String!) {\n    updatePhoneNumber(\n      id: $id,\n      phoneId: $phoneId,\n      number: $number,\n    ) {\n      id\n      number\n      status\n      is_primary\n    }\n  }\n"]);return d=function(){return e},e}function l(){var e=Object(a.a)(["\n  mutation AddPhoneNumber ( $id: ID!, $number:  String!) {\n    addPhoneNumber(\n      id: $id,\n      number: $number,\n    ) {\n      id\n      number\n      status\n      is_primary\n    }\n  }\n"]);return l=function(){return e},e}var c=o()(l()),u=o()(d()),p=o()(s()),f=o()(i())},B3Fo:function(e,t,n){"use strict";var a=n("ERkP"),r=n.n(a),o=n("j/s1"),i=n("tZdC"),s=n("2nMb"),d=n("1Zbg"),l=r.a.createElement,c=o.e.a.withConfig({displayName:"radio-card__Link",componentId:"sc-1vglpr2-0"})(["font-family:",";font-size:","px;font-weight:",";color:",";"],Object(i.a)("fonts.body","Lato"),Object(i.a)("fontSizes.base","15"),Object(i.a)("fontWeights.bold","700"),Object(i.a)("colors.blue.dark","#161F6A")),u=o.e.label.withConfig({displayName:"radio-card__CardWrapper",componentId:"sc-1vglpr2-1"})(["display:inline-flex;align-items:center;border-radius:",";background-color:",";border:1px solid ",";text-align:center;padding:15px 20px;margin-bottom:15px;margin-right:15px;position:relative;font-family:",";font-size:","px;font-weight:",";color:",";line-height:24px;max-width:240px;cursor:pointer;width:100%;transition:all 0.25s ease;&.active{border:2px solid ",";background-color:",";}&.disabled{cursor:not-allowed;opacity:0.6;}&.item-has-title{flex-direction:column;text-align:left;align-items:flex-start;padding:15px;}&:last-child{margin-right:0;}input[type='radio']{opacity:0;visibility:hidden;position:absolute;top:0;left:0;}&:hover{.button-wrapper{opacity:1;visibility:visible;}}"],Object(i.a)("radii.base","6px"),Object(i.a)("colors.gray.200","#F7F7F7"),Object(i.a)("colors.gray.200","#F7F7F7"),Object(i.a)("fonts.body","Lato"),Object(i.a)("fontSizes.base","15"),Object(i.a)("fontWeights.regular","400"),Object(i.a)("colors.text.bold","#0D1136"),Object(i.a)("colors.primary.regular","#009E7F"),Object(i.a)("colors.white","#ffffff")),p=o.e.span.withConfig({displayName:"radio-card__CardTitle",componentId:"sc-1vglpr2-2"})(["font-family:",";font-size:","px;font-weight:",";color:",";line-height:1.2;margin-bottom:5px;text-transform:capitalize;"],Object(i.a)("fonts.body","Lato"),Object(i.a)("fontSizes.sm","13"),Object(i.a)("fontWeights.bold","700"),Object(i.a)("colors.text.bold","#0D1136")),f=o.e.span.withConfig({displayName:"radio-card__CardContent",componentId:"sc-1vglpr2-3"})(["font-family:",";font-size:","px;font-weight:",";color:",";"],Object(i.a)("fonts.body","Lato"),Object(i.a)("fontSizes.base","15"),Object(i.a)("fontWeights.regular","400"),Object(i.a)("colors.text.medium","#424561")),m=o.e.span.withConfig({displayName:"radio-card__CardButtons",componentId:"sc-1vglpr2-4"})(["display:block;position:absolute;top:10px;right:10px;display:flex;align-items:center;opacity:0;visibility:hidden;transition:0.2s ease-in-out;"]),y=o.e.span.withConfig({displayName:"radio-card__ActionButton",componentId:"sc-1vglpr2-5"})(["display:flex;align-items:center;justify-content:center;border:0;width:20px;height:20px;border-radius:50%;overflow:hidden;margin-left:5px;cursor:pointer;outline:0;padding:0;color:",";&.edit-btn{background-color:",";}&.delete-btn{background-color:",";}svg{display:block;width:8px;height:auto;}"],Object(i.a)("colors.white","#ffffff"),Object(i.a)("colors.primary.regular","#009E7F"),Object(i.a)("colors.secondary.regular","#ff5b60")),h=function(e){var t,n=e.id,a=e.name,r=e.title,o=e.content,i=e.editIcon,s=e.deleteIcon,d=e.withActionButtons,h=e.onEdit,g=e.onDelete,b=e.onClick,v=e.hasEdit,w=e.hasDelete,k=e.disabled,x=e.checked,O=e.onChange,D=e.clickableText,j=null===(t=o)||void 0===t?void 0:t.split(" | "),S=null===j||void 0===j?void 0:j.find((function(e){return e.includes("http")})),_=function(e){if(e){var t=e.indexOf("https"),n="https".length;return e.slice(t+n-5)}}(S),I=null===S||void 0===S?void 0:S.substring(0,S.indexOf("http"));return o=_?"".concat(j[1]&&j[1]," ").concat(j[2]&&j[2]):o,l(u,{htmlFor:"".concat(a,"-").concat(n),className:"label ".concat(r?"item-has-title":"no_title","\n      ").concat(x?"active":"not_active")},l("input",{type:"radio",id:"".concat(a,"-").concat(n),name:a,value:o,disabled:k,checked:x,onChange:O,onClick:b}),r&&l(p,null,r),o&&l(f,null,o),I&&l(f,null,I),_&&l(c,{href:_,target:"_blank",rel:"noopener noreferrer"},D||"Click aqu\xed"),d&&l(m,{className:"button-wrapper"},v&&l(y,{onClick:h,className:"edit-btn"},i),w&&l(y,{onClick:g,className:"delete-btn"},s)))};h.defaultProps={title:"",content:"",editIcon:l(d.a,null),deleteIcon:l(s.a,null),withActionButtons:!0,hasEdit:!0,hasDelete:!0},t.a=h},DSo7:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},H8eV:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("ERkP"),r=n.n(a),o=n("ysqo"),i=n.n(o),s=r.a.createElement,d=function(e){var t=e.title,n=e.description,a=e.canonical,r=e.css,o=e.js,d=e.image;return s(i.a,null,s("title",null,t),s("meta",{name:"description",content:n}),s("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"}),s("meta",{property:"og:type",content:"website"}),s("meta",{name:"og:title",property:"og:title",content:t}),s("meta",{name:"og:description",property:"og:description",content:n}),s("meta",{property:"og:site_name",content:"Proper Noun"}),s("meta",{property:"og:url",content:"".concat(a)}),s("meta",{name:"twitter:card",content:"summary"}),s("meta",{name:"twitter:title",content:t}),s("meta",{name:"twitter:description",content:n}),s("meta",{name:"twitter:site",content:"@propernounco"}),s("meta",{name:"twitter:creator",content:"@propernounco"}),r&&s("link",{rel:"stylesheet",href:"".concat(r)}),s("meta",d?{property:"og:image",content:"".concat(d)}:{property:"og:image",content:"https://www.propernoun.co/static/images/proper-noun-social.png"}),d&&s("meta",{name:"twitter:image",content:"".concat(d)}),a&&s("link",{rel:"canonical",href:"".concat(a)}),o&&s("script",{type:"text/javascript",src:"".concat(o)}))}},J9Yr:function(e,t,n){"use strict";var a=n("zQIG"),r=n("N7I1"),o=n("8mBC"),i=n("I/kN"),s=n("cMav"),d=n("pSQP"),l=n("iN+R");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d(e);if(t){var r=d(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("ERkP"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(s){i(l,s);var d=c(l);function l(e){var o;return a(this,l),o=d.call(this,e),p&&(t.add(r(o)),n(r(o))),o}return o(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(u.Component))}},TZT2:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("ERkP"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},YQht:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work",function(){return n("hkpG")}])},bOkD:function(e,t,n){var a=n("cHE3");e.exports=function(e){if(Array.isArray(e))return a(e)}},"bQa+":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n("KD1n"),r=n("H5qd"),o=n.n(r);function i(){var e=Object(a.a)(["\n  mutation DeleteDeliveryAddress( \n    $id: ID!, \n    $addressId: String!\n    ) {\n    deleteDeliveryAddress(\n      id: $id,\n      addressId: $addressId,\n    ) {\n     status\n      message\n    }\n  }\n"]);return i=function(){return e},e}function s(){var e=Object(a.a)(["\n  mutation SetDeliveryAddressPrimary (\n      $id: ID!, \n      $addressId: String!\n     ){\n      setDeliveryAddressPrimary (\n        id: $id, \n        addressId: $addressId\n    ){\n      message\n      status\n    }\n  }\n"]);return s=function(){return e},e}function d(){var e=Object(a.a)(["\n  mutation UpdateDeliveryAddress (\n      $id: ID!, \n      $addressId: String!\n      $title: String!,\n      $address: String!,\n      $location: String,\n      $instructions: String\n     ){\n      updateDeliveryAddress (\n        id: $id, \n        addressId: $addressId,\n        title: $title, \n        address: $address, \n        location: $location,\n        instructions: $instructions\n    ){\n      id\n      title\n      address\n      location\n      instructions\n      is_primary\n    }\n  }\n"]);return d=function(){return e},e}function l(){var e=Object(a.a)(["\nmutation AddDeliveryAddress(\n  $id: ID!, \n  $title: String!,\n  $address: String!,\n  $location: String,\n  $instructions: String,\n) {\n  addDeliveryAddress(\n    id: $id, \n    title: $title, \n    address: $address, \n    location: $location,\n    instructions: $instructions\n  ) {\n    id\n    title\n    address\n    location\n    instructions\n    is_primary\n  }\n}\n"]);return l=function(){return e},e}var c=o()(l()),u=o()(d()),p=o()(s()),f=o()(i())},dq4L:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("ERkP"))&&a.__esModule?a:{default:a},o=n("TZT2");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery;return n||r&&(void 0!==o&&o)}},fGyu:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("lEbO");var r=n("HO86");function o(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},hkpG:function(e,t,n){"use strict";n.r(t);var a=n("ERkP"),r=n.n(a),o=n("1U1M"),i=n("VU+f"),s=n("yR3f"),d=n("fGyu"),l=n("zjfJ"),c=Object(a.createContext)({}),u=r.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){switch(t.type){case"HANDLE_WORK_CHANGE":return f(f({},e),{},{workInfo:t.payload.workInfo,logs:t.payload.logs});case"HANDLE_TODO_TASKS":return f(f({},e),{},{tasks:t.payload.tasks});case"ADD_CONTACT":var n=f({},t.payload.values);return f(f({},e),{},{phones:[].concat(Object(d.a)(e.phones),[n])});case"UPDATE_CONTACT":if(null!==t.payload.id)return f(f({},e),{},{phones:e.phones.map((function(e){return e.id==t.payload.id?f(f({},e),t.payload.values):e}))});case"DELETE_CONTACT":return f(f({},e),{},{phones:e.phones.filter((function(e){return e.id!==t.payload}))});case"ADD_ADDRESS":var a=f({},t.payload);return null==e.delivery_address?f(f({},e),{},{delivery_address:[a]}):f(f({},e),{},{delivery_address:[].concat(Object(d.a)(e.delivery_address),[a])});case"UPDATE_ADDRESS":if(t.payload.id)return f(f({},e),{},{delivery_address:e.delivery_address.map((function(e,n){return e.id===t.payload.id?f(f({},e),t.payload.value):e}))});case"DELETE_ADDRESS":return f(f({},e),{},{delivery_address:e.delivery_address.filter((function(e,n){return e.id!==t.payload}))});case"ADD_CARD":var r={id:t.payload.id,type:"0"===e.card.length?"primary":"secondary",cardType:t.payload.brand.toLowerCase(),name:e.name,lastFourDigit:t.payload.last4};return f(f({},e),{},{card:[r].concat(Object(d.a)(e.card))});case"DELETE_CARD":return f(f({},e),{},{card:e.card.filter((function(e){return e.id!==t.payload}))});case"SET_PRIMARY_CONTACT":return f(f({},e),{},{phones:e.phones.map((function(e){return e.id===t.payload?f(f({},e),{},{is_primary:!0,type:"primary"}):f(f({},e),{},{is_primary:!1,type:"secondary"})}))});case"SET_PRIMARY_ADDRESS":return f(f({},e),{},{delivery_address:e.delivery_address.map((function(e,n){return e.id==t.payload?f(f({},e),{},{is_primary:!0}):f(f({},e),{},{is_primary:!1})}))});case"SET_PRIMARY_SCHEDULE":return f(f({},e),{},{deliveryMethods:e.deliveryMethods.map((function(e){return e.id===t.payload?f(f({},e),{},{type:"primary"}):f(f({},e),{},{type:"secondary"})}))});case"SET_PRIMARY_CARD":return f(f({},e),{},{paymentMethods:e.paymentMethods.map((function(e){return e.id===t.payload?f(f({},e),{},{type:"primary"}):f(f({},e),{},{type:"secondary"})}))});default:return e}}var y=function(e){var t=e.children,n=e.initData,r=Object(a.useReducer)(m,f({},n)),o=r[0],i=r[1];return u(c.Provider,{value:{state:o,dispatch:i}},t)},h=n("VtSi"),g=n.n(h),b=n("QsI/"),v=n("zygG"),w=n("Y0uC"),k=n("B3Fo"),x=n("QfjN"),O=n("bQa+"),D=n("b6eG"),j=n("/ql5"),S=n("4Jh2"),_=n("6/p4"),I=n("j/s1"),T=n("tZdC"),P=I.e.div.withConfig({displayName:"workstyle__SettingsForm",componentId:"u1wt8t-0"})(["width:100%;display:flex;flex-direction:column;"]),C=I.e.div.withConfig({displayName:"workstyle__HeadingSection",componentId:"u1wt8t-1"})(["width:100%;display:flex;align-items:center;justify-content:space-between;margin-bottom:25px;"]),E=I.e.h3.withConfig({displayName:"workstyle__Title",componentId:"u1wt8t-2"})(["font-family:",";font-size:","px;font-weight:",";color:",";"],Object(T.a)("fonts.heading","sans-serif"),Object(T.a)("fontSizes.lg","21"),Object(T.a)("fontWeights.bold","700"),Object(T.a)("colors.text.bold","#0D1136")),A=I.e.div.withConfig({displayName:"workstyle__SettingsFormContent",componentId:"u1wt8t-3"})(["margin-bottom:50px;&:last-child{margin-bottom:0;}"]),M=Object(I.e)(w.b).withConfig({displayName:"workstyle__Row",componentId:"u1wt8t-4"})(["margin-bottom:0px;@media only screen and (min-width:0em) and (max-width:47.99em){margin-bottom:30px;}"]),R=I.e.div.withConfig({displayName:"workstyle__ButtonGroup",componentId:"u1wt8t-5"})(["display:flex;flex-direction:column;.radioGroup{flex-grow:1;justify-content:space-between;label{margin-top:0;flex:calc(33.333333333% - 10px);max-width:calc(33.333333333% - 10px);margin-bottom:15px;&:nth-child(3n){margin-right:0;}@media (max-width:700px){flex:calc(50% - 10px);max-width:calc(50% - 10px);&:nth-child(3n){margin-right:15px;}&:nth-child(2n){margin-right:0;}}@media (max-width:480px){flex:100%;max-width:100%;margin-right:0;&:nth-child(3n){margin-right:0;}&:nth-child(2n){margin-right:0;}}}}.add-button{flex:calc(33.3333333333% - 10px);max-width:calc(33.3333333333% - 10px);flex-shrink:0;height:auto;min-height:77px;border:1px dashed ",";margin-bottom:15px;margin-left:0;margin-right:auto;&:hover{border-color:",";}@media (max-width:700px){flex:calc(50% - 10px);max-width:calc(50% - 10px);}@media (max-width:480px){flex:100%;max-width:100%;}}"],Object(T.a)("colors.gray.500","#f1f1f1"),Object(T.a)("colors.primary.regular","#009e7f")),W=(Object(I.e)("span").withConfig({displayName:"workstyle__SuccessMsg",componentId:"u1wt8t-6"})(["font-family:",";font-size:","px;font-weight:",";color:#51b96b;padding-top:10px;display:flex;margin-left:20px;"],Object(T.a)("fonts.body","Lato"),Object(T.a)("fontSizes.xs","12"),Object(T.a)("fontWeights.regular","400")),Object(I.e)("span").withConfig({displayName:"workstyle__ErrorMsg",componentId:"u1wt8t-7"})(["font-family:",";font-size:","px;font-weight:",";color:",";padding-top:10px;display:flex;margin-left:20px;"],Object(T.a)("fonts.body","Lato"),Object(T.a)("fontSizes.xs","12"),Object(T.a)("fontWeights.regular","400"),Object(T.a)("colors.secondary.hover","#FF282F")),n("FTk/")),N=n("C+de"),$=n("yVh0"),H=n("2SGB"),Y=n("IdAm"),z=n("kn2/"),F=n("wgY5"),L=n.n(F),U=n("f/wd"),G=r.a.createElement;function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){e.deviceType;var t,n,i,s,d,l,u,p,f,m,y,h=Object(a.useContext)(c),I=h.state,T=h.dispatch,F=Object(a.useState)(""),q=(F[0],F[1]),B=Object(a.useState)(!1),Q=(B[0],B[1],Object(a.useState)("")),K=(Q[0],Q[1],r.a.useContext(x.a)),J=(K.authState.isAuthenticated,K.authDispatch,Object(o.a)(N.a)),V=(Object(v.a)(J,1)[0],Object(o.a)(S.a)),X=(Object(v.a)(V,1)[0],Object(o.a)(D.b)),ee=Object(v.a)(X,1)[0],te=Object(o.a)(D.c),ne=Object(v.a)(te,1)[0],ae=Object(o.a)(j.a),re=(Object(v.a)(ae,1)[0],Object(o.a)(_.b)),oe=(Object(v.a)(re,1)[0],Object(o.a)(_.c)),ie=(Object(v.a)(oe,1)[0],Object(o.a)(O.c)),se=(Object(v.a)(ie,1)[0],Object(o.a)(O.b)),de=(Object(v.a)(se,1)[0],Object($.a)(),I.delivery_address,I.card,I.name,I.email,I.id,I.phones,function(){var e=Object(b.a)(g.a.mark((function e(t){var n,a,r,o,i,s,d,l,c,u;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=I.workInfo,a=I.id,r=n.isWorking,o=n.startedWorkTime,i=n.stoppedWorkTime,s=n.ratePerHour,d=n.totalWorkingMinutesPerWeek,l=n.totalSalaryToPayWeekly,c=n.advancedSalaryPaid,u=n.taskRelated,e.next=4,ne({variables:{id:a,isWorking:r,startedWorkTime:o,stoppedWorkTime:i,ratePerHour:s,logDescription:t,totalWorkingMinutesPerWeek:d,totalSalaryToPayWeekly:l,advancedSalaryPaid:c,taskRelated:u,role:I.role}});case 4:q("Update user work info successfully"),setTimeout((function(){q("")}),8e3);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),le=function(){var e=Object(b.a)(g.a.mark((function e(t,n){var a,r,o,i,s,d,l,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=I.id,r=I.tasks,o=t.isRepetitived?(Number(t.completationTimes)+1).toString():t.completationTimes,i=null===r||void 0===r?void 0:r.findIndex((function(e){return e.taskId===t.taskId})),e.t0=n,e.next="stop"===e.t0?6:"start"===e.t0?10:13;break;case 6:return d=(new Date).toLocaleString("en-US",{timeZone:U.o}),l=ce(t.startDate,d),s={id:a,taskId:t.taskId,description:t.description,startDate:t.startDate,finishDate:d,plannedDate:t.plannedDate,isRepetitived:t.isRepetitived,completationTimes:o,workedHours:l,isDone:!0},e.abrupt("break",15);case 10:return c=(new Date).toLocaleString("en-US",{timeZone:U.o}),s={id:a,taskId:t.taskId,description:t.description,startDate:c,finishDate:t.finishDate,plannedDate:t.plannedDate,isRepetitived:t.isRepetitived,completationTimes:o,workedHours:t.workedHours,isDone:t.isDone},e.abrupt("break",15);case 13:return s=t,e.abrupt("break",15);case 15:return r[i]=s,T({type:"HANDLE_TODO_TASKS",payload:{tasks:r}}),e.next=19,ee({variables:Z({},s)});case 19:return e.abrupt("return",e.sent);case 20:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ce=function(e,t){var n=L()(new Date(e)),a=L()(new Date(t)),r=L.a.duration(a.diff(n));r.asHours(),r.asHours();return"".concat(parseInt(r.asHours().toString()),":").concat(parseInt(r.asMinutes().toString())%60)},ue=(null===(t=I.workInfo)||void 0===t?void 0:t.totalWorkingMinutesPerWeek)/60|0,pe=(null===(n=I.workInfo)||void 0===n?void 0:n.totalWorkingMinutesPerWeek)%60|0,fe=Number(null===(i=I.workInfo)||void 0===i?void 0:i.totalWorkingMinutesPerWeek)/60*Number(null===(s=I.workInfo)||void 0===s?void 0:s.ratePerHour),me=null===I||void 0===I?void 0:I.tasks.filter((function(e){return 0===e.startDate.length&&0===e.finishDate.length&&!1===e.isDone||e.isRepetitived})),ye=null===I||void 0===I?void 0:I.tasks.filter((function(e){return e.startDate.length>1&&0===e.finishDate.length}));return G(P,null,G(A,null,G(C,null,G(E,null,G(H.a,{id:"workPageTitle",defaultMessage:"Ditto Farm"}))),G(w.a,{style:{alignItems:"flex-end",marginBottom:"50px"}},G(M,{style:{marginBottom:"15px"}},G(z.a,{label:"Usted se encuentra: ".concat((null===(d=I.workInfo)||void 0===d?void 0:d.isWorking)?"Chambeando":"Vagando"),disabled:!1,checked:null===(l=I.workInfo)||void 0===l?void 0:l.isWorking,labelPosition:"right",onUpdate:function(){var e;return(null===(e=I.workInfo)||void 0===e?void 0:e.isWorking)?function(){var e=I;e.workInfo||(e.workInfo={}),e.workInfo.isWorking=!1,e.workInfo.stoppedWorkTime=(new Date).toLocaleString("en-US",{timeZone:U.o});var t=L()(new Date(e.workInfo.startedWorkTime)),n=L()(new Date(e.workInfo.stoppedWorkTime)).diff(t,"minutes"),a=e.workInfo.ratePerHour/60;e.workInfo.totalWorkingMinutesPerWeek+=n,e.workInfo.totalSalaryToPayWeekly=Number(e.workInfo.totalWorkingMinutesPerWeek)*Number(a)-Number(e.workInfo.advancedSalaryPaid),T({type:"HANDLE_WORK_CHANGE",payload:{workInfo:e.workInfo,logs:e.logs}}),de("finished working.")}():function(){var e=I;e.workInfo||(e.workInfo={}),e.workInfo.isWorking=!0,e.workInfo.startedWorkTime=(new Date).toLocaleString("en-US",{timeZone:U.o}),e.workInfo.stoppedWorkTime=null,e.workInfo.ratePerHour=300,T({type:"HANDLE_WORK_CHANGE",payload:{workInfo:e.workInfo,logs:e.logs}}),de("started working.")}()}})),G(M,null,G(Y.a,{style:{marginRight:"15px",minWidth:"200px"}},G(H.a,{id:"profileNameField",defaultMessage:"Your Name"})),G(Y.a,null,I.name)),G(M,null,G(Y.a,{style:{marginRight:"15px",minWidth:"200px"}},G(H.a,{id:"workedHours",defaultMessage:"workedHours"})),G(Y.a,null,"".concat(ue,":").concat(Number(pe)>=9?pe:"0"+pe," hs"))),G(M,null,G(Y.a,{style:{marginRight:"15px",minWidth:"200px"}},G(H.a,{id:"salaryPerHour",defaultMessage:"salaryPerHour"})),G(Y.a,null,"$".concat((null===(u=I.workInfo)||void 0===u?void 0:null===(p=u.ratePerHour)||void 0===p?void 0:p.toFixed(2))||"-"))),G(M,null,G(Y.a,{style:{marginRight:"15px",minWidth:"200px"}},G(H.a,{id:"subtotalSalary",defaultMessage:"Salary Subtotal"})),G(Y.a,null,"$".concat(fe))),G(M,null,G(Y.a,{style:{marginRight:"15px",minWidth:"200px"}},G(H.a,{id:"advancedSalaryPaid",defaultMessage:"advancedSalaryPaid"})),G(Y.a,null,"$".concat(null===(f=I.workInfo)||void 0===f?void 0:f.advancedSalaryPaid))),G(M,null,G(Y.a,{style:{marginRight:"15px",minWidth:"200px"}},G(H.a,{id:"totalSalaryToPayWeekly",defaultMessage:"totalSalaryToPayWeekly"})),G(Y.a,null,"$".concat((null===(m=I.workInfo)||void 0===m?void 0:null===(y=m.totalSalaryToPayWeekly)||void 0===y?void 0:y.toFixed(2))||"-"))),(null===ye||void 0===ye?void 0:ye.length)>0&&G(M,null,G(w.a,{xs:12,sm:12,md:12,lg:12},G(A,null,G(C,null,G(E,null,G(H.a,{id:"inProgressTasks",defaultMessage:"inProgressTasks"}))),G(R,null,G(W.a,{items:ye,component:function(e,t){return G(k.a,{id:t,key:t,title:e.description,content:"Comenzaste: ".concat(L()(new Date(e.startDate)).format("HH:mm A - DD MMM"),"."),checked:e.isDone,onChange:function(){return le(e,"nothing")},name:"contact",hasEdit:!1,onDelete:function(){return le(e,"stop")}})}}))))),G(M,null,G(w.a,{xs:12,sm:12,md:12,lg:12},G(A,null,G(C,null,G(E,null,G(H.a,{id:"pendingTasks",defaultMessage:"pendingTasks"}))),G(R,null,G(W.a,{items:me,component:function(e,t){var n,a,r=L()(e.plannedDate,"MM/D/YYYY").day(),o=L()(e.plannedDate,"MM/D/YYYY"),i=L()(new Date,"MM/D/YYYY"),s=L()(new Date,"MM/D/YYYY").day(),d=null;return(null===(n=e.plannedDate)||void 0===n?void 0:n.length)>1&&e.isRepetitived&&r===s?d="Tarea repetitiva: ".concat(L()(new Date(e.plannedDate)).format("HH:mm A - ddd")):(null===(a=e.plannedDate)||void 0===a?void 0:a.length)>1&&!e.isRepetitived&&o.isSame(i,"date")&&(d="Tarea unica, fecha: ".concat(L()(new Date(e.plannedDate)).format("HH:mm A - DD MMM"))),G(k.a,{id:t,key:t,disabled:!d,title:e.description,content:d,checked:e.isDone,onChange:function(){return le(e,"contact")},name:"contact",onEdit:function(){return le(e,"start")},hasDelete:!1})}}))))),G(M,null,G(w.a,{xs:12,sm:12,md:12,lg:12},G(A,null,G(C,null,G(E,null,G(H.a,{id:"doneTasks",defaultMessage:"doneTasks"}))),G(R,null,G(W.a,{items:null===I||void 0===I?void 0:I.tasks.filter((function(e){return!0===e.isDone})),component:function(e,t){return G(k.a,{id:t,key:t,title:e.description,content:"Comenzaste: ".concat(L()(new Date(e.startDate)).format("HH:mm A - DD MMM"),". /nTerminaste: ").concat(L()(new Date(e.finishDate)).format("HH:mm A - DD MMM"),". Tardaste: ").concat(e.workedHours,"hs"),checked:e.isDone,onChange:function(){return le(e,"nothing")},name:"contact",hasDelete:!1,hasEdit:!1})}}))))))))},Q=n("r0LQ"),K=n("jh0t"),J=n("H8eV"),V=n("quMH"),X=r.a.createElement;t.default=function(e){var t=e.deviceType,n=Object(o.b)(s.a),a=n.data,d=n.error,l=n.loading;return!a||l?X("div",null,"loading..."):d?X(V.default,{message:d.message}):X(r.a.Fragment,null,X(J.a,{title:"Work - Ditto",description:"Work Details"}),X(y,{initData:a.getUser},X(i.a,null,X(Q.b,null,X(Q.c,null,X(K.a,null)),X(Q.a,null,X(B,{deviceType:t}))))))}},"iN+R":function(e,t,n){var a=n("bOkD"),r=n("DSo7"),o=n("D7XE"),i=n("uYlf");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},"kn2/":function(e,t,n){"use strict";var a=n("ERkP"),r=n.n(a),o=n("j/s1"),i=n("tZdC"),s=o.e.div.withConfig({displayName:"switchstyle__SwitchStyle",componentId:"sc-14hweo8-0"})(["display:inline-flex;color:",";font-size:calc(","px + 1px);font-weight:",";> label .field-label{color:inherit;font-size:inherit;font-weight:inherit;}&.label_left{label{display:flex;align-items:center;.field-label{margin-right:10px;}}}&.label_right{label{display:flex;flex-direction:row-reverse;align-items:center;.field-label{margin-left:10px;}}}&.label_top{label{.field-label{display:flex;margin-bottom:8px;}}}&.label_bottom{label{.field-label{display:flex;margin-top:8px;}}}input[type='checkbox']{&.switch{opacity:0;position:absolute;margin:0;z-index:-1;width:0;height:0;overflow:hidden;left:0;pointer-events:none;&:checked + div{width:36px;background-position:0 0;background-color:",";> div{background-color:",";left:calc(38px / 2);}}}+ div{vertical-align:middle;width:36px;height:18px;border-radius:50px;background-color:",";transition-duration:0.4s;transition-property:background-color,box-shadow;cursor:pointer;box-sizing:border-box;position:relative;flex-shrink:0;> div{float:left;width:16px;height:16px;border-radius:50%;pointer-events:none;top:1px;left:1px;position:absolute;background-color:",";transition:all 0.25s ease;}}}"],Object(i.a)("colors.text.bold","#0D1136"),Object(i.a)("fontSizes.base","15"),Object(i.a)("fontWeights.medium","500"),Object(i.a)("colors.primary.alternate","#028489"),Object(i.a)("colors.white","#ffffff"),Object(i.a)("colors.gray.700","#e6e6e6"),Object(i.a)("colors.white","#ffffff"));s.displayName="SwitchStyle";var d=s,l=r.a.createElement;t.a=function(e){var t=e.label,n=e.disabled,r=e.className,o=e.labelPosition,i=e.onUpdate,s=e.checked,c=e.style,u=Object(a.useState)(!1),p=u[0],f=u[1],m=t&&l("span",{className:"field-label"},t),y=o||"top";return l(d,{className:"switch label_".concat(y," ").concat(r).trim(),style:c},l("label",null,("left"===y||"right"===y||"top"===y)&&m,l("input",{checked:s,className:"switch",type:"checkbox",disabled:n,onChange:function(){f(!p),i(!p)}}),l("div",null,l("div",null)),"bottom"===y&&m))}},"op+c":function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((a=n("ERkP"))&&a.__esModule?a:{default:a}).default.createContext(null);t.HeadManagerContext=r},quMH:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n("ERkP"),r=n.n(a),o=n("j/s1"),i=r.a.createElement;function s(e){var t=e.message;return i(d,null,t)}var d=o.e.aside.withConfig({displayName:"error-message__StyledAside",componentId:"spyukh-0"})({display:"flex",justifyContent:"center",alignItems:"center",padding:"1.5rem",fontSize:"15px",color:"000",backgroundColor:"#fff"})},uYlf:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},yR3f:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l}));var a=n("KD1n"),r=n("H5qd"),o=n.n(r);function i(){var e=Object(a.a)(["\nquery GetUser{\n  getUser{\n    id\n    name\n    plants {\n      plantId\n      sensors {\n        reading\n      }\n    }\n  }\n}\n"]);return i=function(){return e},e}function s(){var e=Object(a.a)(["\nquery GetUser{\n  getUser{\n    id\n    name\n    email\n    created_at\n    role\n    plants {\n      plantId\n      name\n      soil_humidity_1\n      soil_humidity_2\n      light\n      airHumidity\n      tempeture\n      isRelayOneOn\n      isRelayTwoOn\n      isRelayThirdOn\n      isRelayFourthOn\n      timestamp\n      sensors {\n        reading\n        name\n        whatsappWarningsOn\n        minWarning\n        maxWarning\n        reading\n        mode\n        relayOneAutomatedStartedTime\n        relayOneAutomatedTimeToRun\n        relayTwoAutomatedStartedTime\n        relayTwoAutomatedTimeToRun\n        relayOneIdRelated\n        relayOneWorking\n        relayTwoIdRelated\n        relayTwoWorking\n        settingType\n        logs {\n          timestamp\n          reading\n          started\n          finished\n        }\n        scheduledOnTimes {\n          daysToRepeat\n          startTime\n          endTime\n          enabled\n          smartLight\n        }\n      }\n    }\n    delivery_address{\n      id\n      title\n      address\n      location\n      instructions\n      is_primary\n    }\n    phones{\n      number\n      id\n      is_primary\n    }\n    workInfo{\n        stoppedWorkTime\n        startedWorkTime\n        ratePerHour\n        totalWorkingMinutesPerWeek\n        totalSalaryToPayWeekly\n        advancedSalaryPaid\n        isWorking\n        taskRelated\n    }\n    tasks{\n      taskId\n      startDate\n      finishDate\n      plannedDate\n      isRepetitived\n      completationTimes\n      isDone\n      description\n      workedHours\n    }\n    logs{\n      timestamp\n    }\n  }\n}\n"]);return s=function(){return e},e}var d=o()(s()),l=o()(i())},ysqo:function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a=d(n("ERkP")),r=d(n("J9Yr")),o=n("TZT2"),i=n("op+c"),s=n("dq4L");function d(e){return e&&e.__esModule?e:{default:e}}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var u=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(c,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var s=0,d=u.length;s<d;s++){var l=u[s];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var c=r.props[l],p=a[l]||new Set;p.has(c)?o=!1:(p.add(c),a[l]=p)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var f=(0,r.default)();function m(e){var t=e.children;return(a.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(f,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,s.isInAmpMode)(e)},t)}))})))}m.rewind=f.rewind;var y=m;t.default=y},zygG:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("HO86");function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(d){r=!0,o=d}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["YQht",1,0,15,3,2,4,5,6,7,8,16,20]]]);