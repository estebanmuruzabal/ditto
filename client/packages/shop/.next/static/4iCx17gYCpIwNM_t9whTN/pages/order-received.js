(window.webpackJsonp=window.webpackJsonp||[]).push([[37,56],{"1ZDt":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var r=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},o=function(e,t){if(!e)return"";var n="en"===t?"Time: ":"Horario: ",r=e.indexOf(n),o=n.length;return e.slice(r+o)},i=function(e){var t;if(!e)return 0;var n=null===e||void 0===e?void 0:e.split("$"),r=(null===e||void 0===e?void 0:e.includes("$"))?null===(t=n[(null===n||void 0===n?void 0:n.length)-1])||void 0===t?void 0:t.replace(/\D/g,""):0;return Number(r)},a=function(e){var t;if(!e)return 0;var n=null===e||void 0===e?void 0:e.split("$"),r=(null===e||void 0===e?void 0:e.includes("$"))?null===(t=n[(null===n||void 0===n?void 0:n.length)-1])||void 0===t?void 0:t.replace(/\D/g,""):0;return Number(r)}},"2SGB":function(e,t,n){"use strict";var r=n("ERkP"),o=n("YQpL"),i=n("5G9k"),a=n("R56p"),l=n("nChe"),d=n.n(l),c=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},f=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,l=i.length;a<l;a++,o++)r[o]=i[a];return r},p=d.a||l;function m(e,t){return Object(i.a)(u(u({},a.a),{locale:"en"}),Object(a.b)(),e,t)}var v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.shouldComponentUpdate=function(e){var t=this.props,n=t.values,r=s(t,["values"]),o=e.values,i=s(e,["values"]);return!p(o,n)||!p(r,i)},t.prototype.render=function(){var e=this;return r.createElement(o.a.Consumer,null,(function(t){e.props.defaultMessage||Object(a.f)(t);var n=t||{},o=n.formatMessage,i=void 0===o?m:o,l=n.textComponent,d=void 0===l?r.Fragment:l,c=e.props,u=c.id,s=c.description,p=c.defaultMessage,v=c.values,g=c.children,b=c.tagName,h=void 0===b?d:b,y=i({id:u,description:s,defaultMessage:p},v);return Array.isArray(y)||(y=[y]),"function"===typeof g?g.apply(void 0,y):h?r.createElement.apply(r,f([h,null],y)):y}))},t.displayName="FormattedMessage",t}(r.Component);t.a=v},"5G9k":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("ERkP"),o=n("01qN"),i=n("HM/8"),a=n("JnFZ"),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},d=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,l=i.length;a<l;a++,o++)r[o]=i[a];return r};function c(e,t){return Object.keys(e).reduce((function(n,r){return n[r]=l({timeZone:t},e[r]),n}),{})}function u(e,t){return Object.keys(l(l({},e),t)).reduce((function(n,r){return n[r]=l(l({},e[r]||{}),t[r]||{}),n}),{})}function s(e,t){if(!t)return e;var n=i.a.formats;return l(l(l({},n),e),{date:u(c(n.date,t),c(e.date||{},t)),time:u(c(n.time,t),c(e.time||{},t))})}function f(e,t){return Array.isArray(e)&&t?r.createElement.apply(r,d([r.Fragment,null],e)):e}function p(e,t,n,r){var i=e.locale,l=e.formats,d=e.messages,c=e.defaultLocale,u=e.defaultFormats,p=e.onError,m=e.timeZone,v=e.wrapRichTextChunksInFragment;void 0===n&&(n={id:""});var g=n.id,b=n.defaultMessage;Object(o.a)(!!g,"[React Intl] An `id` must be provided to format a message.");var h=d&&d[String(g)];if(!r&&h&&"string"===typeof h)return h.replace(/'\{(.*?)\}'/gi,"{$1}");if(l=s(l,m),u=s(u,m),!h){if((!b||i&&i.toLowerCase()!==c.toLowerCase())&&p(new a.d(n,i)),b)try{return f(t.getMessageFormat(b,c,u).format(r),v)}catch(y){return p(new a.b('Error formatting default message for: "'+g+'", rendering default message verbatim',i,n,y)),b}return g}try{return f(t.getMessageFormat(h,i,l,{formatters:t}).format(r),v)}catch(y){p(new a.b('Error formatting message: "'+g+'", using '+(b?"default message":"id")+" as fallback.",i,n,y))}if(b)try{return f(t.getMessageFormat(b,c,u).format(r),v)}catch(y){p(new a.b('Error formatting the default message for: "'+g+'", rendering message verbatim',i,n,y))}return h||b||g}},DSo7:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},EIeC:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},H8eV:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("ERkP"),o=n.n(r),i=n("ysqo"),a=n.n(i),l=o.a.createElement,d=function(e){var t=e.title,n=e.description,r=e.canonical,o=e.css,i=e.js,d=e.image;return l(a.a,null,l("title",null,t),l("meta",{name:"description",content:n}),l("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"}),l("meta",{property:"og:type",content:"website"}),l("meta",{name:"og:title",property:"og:title",content:t}),l("meta",{name:"og:description",property:"og:description",content:n}),l("meta",{property:"og:site_name",content:"Proper Noun"}),l("meta",{property:"og:url",content:"".concat(r)}),l("meta",{name:"twitter:card",content:"summary"}),l("meta",{name:"twitter:title",content:t}),l("meta",{name:"twitter:description",content:n}),l("meta",{name:"twitter:site",content:"@propernounco"}),l("meta",{name:"twitter:creator",content:"@propernounco"}),o&&l("link",{rel:"stylesheet",href:"".concat(o)}),l("meta",d?{property:"og:image",content:"".concat(d)}:{property:"og:image",content:"https://www.propernoun.co/static/images/proper-noun-social.png"}),d&&l("meta",{name:"twitter:image",content:"".concat(d)}),r&&l("link",{rel:"canonical",href:"".concat(r)}),i&&l("script",{type:"text/javascript",src:"".concat(i)}))}},J9Yr:function(e,t,n){"use strict";var r=n("zQIG"),o=n("N7I1"),i=n("8mBC"),a=n("I/kN"),l=n("cMav"),d=n("pSQP"),c=n("iN+R");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("ERkP"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(l){a(c,l);var d=u(c);function c(e){var i;return r(this,c),i=d.call(this,e),f&&(t.add(o(i)),n(o(i))),i}return i(c,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(c,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),c}(s.Component))}},JunZ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order-received",function(){return n("tMoA")}])},TZT2:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("ERkP"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},ZLcN:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("KD1n"),o=n("H5qd");function i(){var e=Object(r.a)(["\nquery GetDeliveryMethods {\n    deliveryMethods(limit: 0) {\n      items {\n        id\n        name\n        details\n        created_at\n        isPickUp\n        pickUpAddress\n      }\n      totalCount\n      hasMore\n    }\n  }\n"]);return i=function(){return e},e}var a=n.n(o)()(i())},bOkD:function(e,t,n){var r=n("cHE3");e.exports=function(e){if(Array.isArray(e))return r(e)}},dq4L:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("ERkP"))&&r.__esModule?r:{default:r},i=n("TZT2");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery;return n||o&&(void 0!==i&&i)}},"iN+R":function(e,t,n){var r=n("bOkD"),o=n("DSo7"),i=n("D7XE"),a=n("uYlf");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},jvDv:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return m})),n.d(t,"a",(function(){return v}));var r=n("Km8e"),o=n.n(r),i=function(e,t){var n=o()({},e,t);for(var r in e){var i;e[r]&&"object"===typeof t[r]&&o()(n,((i={})[r]=o()(e[r],t[r]),i))}return n},a={breakpoints:[40,52,64].map((function(e){return e+"em"}))},l=function(e){return"@media screen and (min-width: "+e+")"},d=function(e,t){return c(t,e,e)},c=function(e,t,n,r,o){for(t=t&&t.split?t.split("."):[t],r=0;r<t.length;r++)e=e?e[t[r]]:o;return e===o?n:e},u=function e(t){var n={},r=function(e){var r={},d=!1,u=e.theme&&e.theme.disableStyledSystemCache;for(var p in e)if(t[p]){var m=t[p],v=e[p],g=c(e.theme,m.scale,m.defaults);if("object"!==typeof v)o()(r,m(v,g,e));else{if(n.breakpoints=!u&&n.breakpoints||c(e.theme,"breakpoints",a.breakpoints),Array.isArray(v)){n.media=!u&&n.media||[null].concat(n.breakpoints.map(l)),r=i(r,s(n.media,m,g,v,e));continue}null!==v&&(r=i(r,f(n.breakpoints,m,g,v,e)),d=!0)}}return d&&(r=function(e){var t={};return Object.keys(e).sort((function(e,t){return e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})})).forEach((function(n){t[n]=e[n]})),t}(r)),r};r.config=t,r.propNames=Object.keys(t),r.cache=n;var d=Object.keys(t).filter((function(e){return"config"!==e}));return d.length>1&&d.forEach((function(n){var o;r[n]=e(((o={})[n]=t[n],o))})),r},s=function(e,t,n,r,i){var a={};return r.slice(0,e.length).forEach((function(r,l){var d,c=e[l],u=t(r,n,i);c?o()(a,((d={})[c]=o()({},a[c],u),d)):o()(a,u)})),a},f=function(e,t,n,r,i){var a={};for(var d in r){var c=e[d],u=t(r[d],n,i);if(c){var s,f=l(c);o()(a,((s={})[f]=o()({},a[f],u),s))}else o()(a,u)}return a},p=function(e){var t=e.properties,n=e.property,r=e.scale,o=e.transform,i=void 0===o?d:o,a=e.defaultScale;t=t||[n];var l=function(e,n,r){var o={},a=i(e,n,r);if(null!==a)return t.forEach((function(e){o[e]=a})),o};return l.scale=r,l.defaults=a,l},m=function(e){void 0===e&&(e={});var t={};return Object.keys(e).forEach((function(n){var r=e[n];t[n]=!0!==r?"function"!==typeof r?p(r):r:p({property:n,scale:n})})),u(t)},v=function(){for(var e={},t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];n.forEach((function(t){t&&t.config&&o()(e,t.config)}));var i=u(e);return i}},nChe:function(e,t,n){"use strict";e.exports=function(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),o=n.length;if(r.length!==o)return!1;for(var i=0;i<o;i++){var a=n[i];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}},"op+c":function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("ERkP"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=o},pFUA:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("KD1n"),o=n("H5qd");function i(){var e=Object(r.a)(["\n  query GetUserOrders {\n    getUserOrders {\n      id\n      order_code\n      customer_id\n      contact_number\n      datetime\n      delivery_address\n      payment_method\n      payment_status\n      delivery_method_id\n      status\n      discount_amount\n      sub_total\n      total\n      delivery_pickup_date\n      order_tracking {\n        status\n        ordering\n        is_current\n        step_competed\n      }\n      order_products {\n        product_id\n        image\n        quantity\n        recicledQuantity\n        unit\n        name\n        price\n      }\n    }\n  }\n"]);return i=function(){return e},e}var a=n.n(o)()(i())},quMH:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n("ERkP"),o=n.n(r),i=n("j/s1"),a=o.a.createElement;function l(e){var t=e.message;return a(d,null,t)}var d=i.e.aside.withConfig({displayName:"error-message__StyledAside",componentId:"spyukh-0"})({display:"flex",justifyContent:"center",alignItems:"center",padding:"1.5rem",fontSize:"15px",color:"000",backgroundColor:"#fff"})},tMoA:function(e,t,n){"use strict";n.r(t);var r=n("ERkP"),o=n.n(r),i=n("H8eV"),a=n("jvFD"),l=n.n(a),d=n("7xIC"),c=n("wgY5"),u=n.n(c),s=n("1U1M"),f=n("pFUA"),p=n("f/wd"),m=n("quMH"),v=n("j/s1"),g=n("tZdC"),b=v.e.div.withConfig({displayName:"order-receivedstyle__OrderReceivedWrapper",componentId:"ksjt95-0"})(["background-color:",";position:relative;padding:90px 0 60px 0;min-height:100vh;"],Object(g.a)("colors.gray.200","#f7f7f7")),h=v.e.a.withConfig({displayName:"order-receivedstyle__LinkPickUp",componentId:"ksjt95-1"})(["font-family:",";font-size:","px;font-weight:",";color:",";"],Object(g.a)("fonts.body","Lato"),Object(g.a)("fontSizes.base","15"),Object(g.a)("fontWeights.bold","700"),Object(g.a)("colors.blue","#ea4d4a")),y=(Object(v.e)("table").withConfig({displayName:"order-receivedstyle__OrderTable",componentId:"ksjt95-2"})(["&&{border-collapse:collapse;thead{th{padding:8px 20px;font-family:",";font-size:","px;font-weight:",";color:",";border:none;&:first-child{padding-left:110px;text-align:left;}}}tr{&:hover{background-color:inherit;}td{padding:20px;font-family:",";font-size:","px;font-weight:",";color:",";border-bottom:0;border:none;}}}"],Object(g.a)("fonts.body","Lato"),Object(g.a)("fontSizes.sm","13"),Object(g.a)("fontWeights.bold","700"),Object(g.a)("colors.text.bold","#0D1136"),Object(g.a)("fonts.body","Lato"),Object(g.a)("fontSizes.base","15"),Object(g.a)("fontWeights.regular","400"),Object(g.a)("colors.text.bold","#0D1136")),v.e.div.withConfig({displayName:"order-receivedstyle__OrderTableWrapper",componentId:"ksjt95-3"})([".rc-table-content{border:0;}"]),v.e.div.withConfig({displayName:"order-receivedstyle__OrderReceivedContainer",componentId:"ksjt95-4"})(["background-color:",";border:1px solid ",";padding:60px;border-radius:",";overflow:hidden;position:relative;width:calc(100% - 30px);margin-left:auto;margin-right:auto;@media (min-width:991px){width:870px;}@media (max-width:990px){padding:50px 45px;}@media (max-width:767px){padding:60px 25px;}.home-btn{display:inline-flex;align-items:center;justify-content:center;font-family:",";font-size:","px;font-weight:",";color:",";padding:5px 5px;height:36px;border:1px solid ",";border-radius:",";position:absolute;top:15px;right:15px;transition:0.15s ease-in-out;@media (max-width:767px){font-size:","px;height:34px;padding:5px 12px;}&:hover{background-color:",";border-color:",";color:",";}}.print-btn{display:inline-flex;align-items:center;justify-content:center;font-family:",";font-size:","px;font-weight:",";color:",";padding:5px 15px;height:36px;border:1px solid ",";border-radius:",";position:absolute;top:15px;right:125px;cursor:pointer;transition:0.15s ease-in-out;@media (max-width:767px){font-size:","px;height:34px;padding:5px 12px;}&:hover{background-color:",";border-color:",";color:",";}}@media print{.print-btn,.home-btn{display:none;}}"],Object(g.a)("colors.white","#ffffff"),Object(g.a)("colors.gray.500","#f1f1f1"),Object(g.a)("radii.base","6px"),Object(g.a)("fonts.body","Lato"),Object(g.a)("fontSizes.base","15"),Object(g.a)("fontWeights.regular","400"),Object(g.a)("colors.text.regular","#77798c"),Object(g.a)("colors.gray.700","#e6e6e6"),Object(g.a)("radii.base","6px"),Object(g.a)("fontSizes.sm","13"),Object(g.a)("colors.primary.regular","#009e7f"),Object(g.a)("colors.primary.regular","#009e7f"),Object(g.a)("colors.white","#ffffff"),Object(g.a)("fonts.body","Lato"),Object(g.a)("fontSizes.base","15"),Object(g.a)("fontWeights.regular","400"),Object(g.a)("colors.text.regular","#77798c"),Object(g.a)("colors.gray.700","#e6e6e6"),Object(g.a)("radii.base","6px"),Object(g.a)("fontSizes.sm","13"),Object(g.a)("colors.primary.regular","#009e7f"),Object(g.a)("colors.primary.regular","#009e7f"),Object(g.a)("colors.white","#ffffff"))),x=v.e.div.withConfig({displayName:"order-receivedstyle__OrderInfo",componentId:"ksjt95-5"})(["margin-bottom:60px;@media (max-width:767px){margin-bottom:30px;}"]),O=v.e.div.withConfig({displayName:"order-receivedstyle__OrderDetails",componentId:"ksjt95-6"})(["margin-bottom:60px;@media (max-width:767px){margin-bottom:50px;}"]),j=v.e.div.withConfig({displayName:"order-receivedstyle__TotalAmount",componentId:"ksjt95-7"})([""]),w=v.e.h2.withConfig({displayName:"order-receivedstyle__BlockTitle",componentId:"ksjt95-8"})(["font-family:",";font-size:","px;font-weight:",";color:",";line-height:1;margin-bottom:32px;margin-top:5px;@media (max-width:767px){font-size:calc(","px + 1px);margin-bottom:25px;}"],Object(g.a)("fonts.heading","sans-serif"),Object(g.a)("fontSizes.lg","21"),Object(g.a)("fontWeights.bold","700"),Object(g.a)("colors.text.bold","#0D1136"),Object(g.a)("fontSizes.base","15")),k=v.e.p.withConfig({displayName:"order-receivedstyle__Text",componentId:"ksjt95-9"})(["font-family:",";font-size:","px;color:",";font-weight:",";line-height:1.2;display:block;margin:0;min-width:140px;&:last-child{color:",";}"],Object(g.a)("fonts.body","Lato"),Object(g.a)("fontSizes.base","15"),Object(g.a)("colors.text.bold","#0D1136"),(function(e){return e.bold?Object(g.a)("fontWeights.bold","700"):Object(g.a)("fontWeights.regular","400")}),Object(g.a)("colors.text.medium","#424561")),_=v.e.div.withConfig({displayName:"order-receivedstyle__InfoBlockWrapper",componentId:"ksjt95-10"})(["display:flex;align-items:center;justify-content:space-between;margin-top:30px;@media (max-width:767px){flex-wrap:wrap;}"]),M=v.e.div.withConfig({displayName:"order-receivedstyle__InfoBlock",componentId:"ksjt95-11"})(["flex-grow:1;padding:0 15px;border-left:1px solid ",";@media (max-width:767px){max-width:100%;flex:0 0 100%;margin-bottom:20px;padding:0;border:0;}&:first-child{padding-left:0;border-left:0;}&:last-child{padding-right:0;}.title{margin-bottom:10px;}"],Object(g.a)("colors.gray.500","#f1f1f1")),C=v.e.div.withConfig({displayName:"order-receivedstyle__ListItem",componentId:"ksjt95-12"})(["display:flex;margin-bottom:20px;&:last-child{margin-bottom:0;}"]),S=v.e.div.withConfig({displayName:"order-receivedstyle__ListTitle",componentId:"ksjt95-13"})(["flex-shrink:0;position:relative;&:after{content:'';position:absolute;top:-1px;right:-2px;line-height:1;}"]),P=v.e.div.withConfig({displayName:"order-receivedstyle__ListDes",componentId:"ksjt95-14"})(["padding-left:20px;@media (max-width:767px){padding-left:20px;}"]),A=b,D=n("yVh0"),E=n("2SGB"),N=n("ZLcN"),I=n("1ZDt"),T=o.a.createElement,R=function(e){var t,n,r=Object(d.useRouter)(),i=Object(D.a)(),a=Object(s.b)(f.a),c=a.data,v=a.error,g=a.loading,b=Object(s.b)(N.a),R=b.data;b.error,b.loading,b.refetch;if(g)return T(m.default,{message:i.formatMessage({id:"loading",defaultMessage:"Cargando..."})});if(v)return T(m.default,{message:v.message});var z=c.getUserOrders.map((function(e){return e.id})).indexOf(r.query.itemId),U=c.getUserOrders[z>=0?z:0],L="".concat(u()(null===U||void 0===U?void 0:U.datetime).format("MM/DD/YY"),", ").concat(u()(null===U||void 0===U?void 0:U.datetime).format("hh:mm A")),F=null===R||void 0===R?void 0:null===(t=R.deliveryMethods)||void 0===t?void 0:t.items,q=null===F||void 0===F?void 0:F.filter((function(e){return e.id===(null===U||void 0===U?void 0:U.delivery_method_id)}))[0],Z="".concat(null===U||void 0===U?void 0:U.delivery_pickup_date);return console.log(U),T(A,null,T(y,null,T(l.a,{href:"/profile"},T("a",{className:"home-btn"},T(E.a,{id:"backProfileBtn",defaultMessage:"Back to Profile"}))),T("span",{onClick:function(){window.print()},className:"print-btn"},T(E.a,{id:"printInvoiceBtn",defaultMessage:"Print Invoice"})),T(x,null,T(w,null,T(E.a,{id:"orderReceivedSuccess",defaultMessage:"Order"})),T(_,null,T(M,null,T(k,{bold:!0,className:"title"},T(E.a,{id:"orderNumberText",defaultMessage:"Order Number"})),T(k,null,null===U||void 0===U?void 0:U.order_code)),T(M,null,T(k,{bold:!0,className:"title"},T(E.a,{id:"orderDateText",defaultMessage:"Date"})),T(k,null,L)),T(M,null,T(k,{bold:!0,className:"title"},T(E.a,{id:"totalText",defaultMessage:"Total"})),T(k,null,p.d,null===U||void 0===U?void 0:U.total)),T(M,null,T(k,{bold:!0,className:"title"},T(E.a,{id:"paymenMethodText",defaultMessage:"Payment Method"})),T(k,null,null===U||void 0===U?void 0:U.payment_method)))),T(O,null,T(w,null,T(E.a,{id:(null===q||void 0===q?void 0:q.isPickUp)?"pickupDetailsText":"deliveryDetailsText",defaultMessage:"Order Details"})),T(C,null,T(S,null,T(k,null,(null===q||void 0===q?void 0:q.isPickUp)?T(E.a,{id:"deliveryMethodTitle",defaultMessage:"Order Method"}):T(E.a,{id:"deliveryMethodNotPickupTitle",defaultMessage:"Order Method"}))),T(P,null,T(k,{bold:!0},(null===q||void 0===q?void 0:q.isPickUp)?"".concat(null===q||void 0===q?void 0:q.name," - ").concat(null===q||void 0===q?void 0:null===(n=q.details)||void 0===n?void 0:n.split("|")[0]):null===q||void 0===q?void 0:q.name))),(null===q||void 0===q?void 0:q.isPickUp)?T(o.a.Fragment,null,T(C,null,T(S,null,T(k,null,T(E.a,{id:"deliveryTime",defaultMessage:"Delivery Time"}))),T(P,null,T(k,{bold:!0},Object(I.b)(Z)))),(null===q||void 0===q?void 0:q.pickUpAddress.includes("http"))&&T(C,null,T(S,null,T(k,null,T(E.a,{id:"deliveryLocationText",defaultMessage:"Delivery Location"}))),T(P,null,T(h,{href:null===q||void 0===q?void 0:q.pickUpAddress,target:"_blank",rel:"noopener noreferrer"},"Click/toque aqu\xed")))):T(o.a.Fragment,null,T(C,null,T(S,null,T(k,null,T(E.a,{id:"deliveryDateTitle",defaultMessage:"Delivery Date"}))),T(P,null,T(k,null,T(k,{bold:!0},Object(I.b)(Z))))),T(C,null,T(S,null,T(k,null,T(E.a,{id:"deliveryAddress",defaultMessage:"Delivery Address"}))),T(P,null,T(k,{bold:!0},null===U||void 0===U?void 0:U.delivery_address)))),T(S,null,T(k,{bold:!0},T(E.a,{id:(null===q||void 0===q?void 0:q.isPickUp)?"timepickupAfterPurchaseOfConvinience":"timedeliOfConvinience",defaultMessage:"timepickupOfConvinience"})))),T(j,null,T(w,null,T(E.a,{id:"totalAmountText",defaultMessage:"Total Amount"})),T(C,null,T(S,null,T(k,{bold:!0},T(E.a,{id:"paymenMethodText",defaultMessage:"Payment Method"}))),T(P,null,T(k,null,null===U||void 0===U?void 0:U.payment_method))),T(C,null,T(S,null,T(k,{bold:!0},T(E.a,{id:"subTotal",defaultMessage:"Sub total"}))),T(P,null,T(k,null,p.d,null===U||void 0===U?void 0:U.sub_total))),!(null===q||void 0===q?void 0:q.isPickUp)&&T(C,null,T(S,null,T(k,{bold:!0},T(E.a,{id:"deliveryFee",defaultMessage:"Delivery Fee"}))),T(P,null,T(k,null,p.d,Object(I.c)(null===q||void 0===q?void 0:q.name)))),T(C,null,T(S,null,T(k,{bold:!0},T(E.a,{id:"totalText",defaultMessage:"Total"}))),T(P,null,T(k,null,p.d,null===U||void 0===U?void 0:U.total))))))},z=o.a.createElement;t.default=function(){return z(o.a.Fragment,null,z(i.a,{title:"Invoice - Ditto",description:"Invoice Details"}),z(R,null))}},tZdC:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("jvDv"),o=function(e,t){return void 0===t&&(t=null),function(n){return Object(r.d)(n.theme,e,t)}}},uYlf:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},ysqo:function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=c,t.default=void 0;var r=d(n("ERkP")),o=d(n("J9Yr")),i=n("TZT2"),a=n("op+c"),l=n("dq4L");function d(e){return e&&e.__esModule?e:{default:e}}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var s=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var l=0,d=s.length;l<d;l++){var c=s[l];if(o.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?i=!1:n.add(c);else{var u=o.props[c],f=r[c]||new Set;f.has(u)?i=!1:(f.add(u),r[c]=f)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,o.default)();function m(e){var t=e.children;return(r.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(a.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:(0,l.isInAmpMode)(e)},t)}))})))}m.rewind=p.rewind;var v=m;t.default=v}},[["JunZ",1,0,13,2,3,4,5,14]]]);