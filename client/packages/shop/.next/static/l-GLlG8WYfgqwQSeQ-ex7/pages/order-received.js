(window.webpackJsonp=window.webpackJsonp||[]).push([[31,50],{DSo7:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},EIeC:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},H8eV:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("ERkP"),o=n.n(r),i=n("ysqo"),a=n.n(i),l=o.a.createElement,c=function(e){var t=e.title,n=e.description,r=e.canonical,o=e.css,i=e.js,c=e.image;return l(a.a,null,l("title",null,t),l("meta",{name:"description",content:n}),l("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"}),l("meta",{property:"og:type",content:"website"}),l("meta",{name:"og:title",property:"og:title",content:t}),l("meta",{name:"og:description",property:"og:description",content:n}),l("meta",{property:"og:site_name",content:"Proper Noun"}),l("meta",{property:"og:url",content:"".concat(r)}),l("meta",{name:"twitter:card",content:"summary"}),l("meta",{name:"twitter:title",content:t}),l("meta",{name:"twitter:description",content:n}),l("meta",{name:"twitter:site",content:"@propernounco"}),l("meta",{name:"twitter:creator",content:"@propernounco"}),o&&l("link",{rel:"stylesheet",href:"".concat(o)}),l("meta",c?{property:"og:image",content:"".concat(c)}:{property:"og:image",content:"https://www.propernoun.co/static/images/proper-noun-social.png"}),c&&l("meta",{name:"twitter:image",content:"".concat(c)}),r&&l("link",{rel:"canonical",href:"".concat(r)}),i&&l("script",{type:"text/javascript",src:"".concat(i)}))}},J9Yr:function(e,t,n){"use strict";var r=n("zQIG"),o=n("N7I1"),i=n("8mBC"),a=n("I/kN"),l=n("cMav"),c=n("pSQP"),d=n("iN+R");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("ERkP"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(d(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(l){a(d,l);var c=s(d);function d(e){var i;return r(this,d),i=c.call(this,e),f&&(t.add(o(i)),n(o(i))),i}return i(d,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(d,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),d}(u.Component))}},JunZ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order-received",function(){return n("tMoA")}])},KeDb:function(e,t,n){"use strict";var r=n("zQIG"),o=n("8mBC"),i=n("I/kN"),a=n("cMav"),l=n("pSQP");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var d=n("Y3ZS"),s=n("pONU");t.__esModule=!0,t.default=void 0;var u,f=s(n("ERkP")),p=n("cRaD"),m=n("fvxO"),v=d(n("7xIC")),h=n("L9lV");function b(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var g=new Map,y=window.IntersectionObserver,x={};function w(){return u||(y?u=new y((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var _=function(e){i(n,e);var t=c(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}((function(e,t){return{href:(0,h.addBasePath)(b(e)),as:t?(0,h.addBasePath)(b(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),a=i.href,l=i.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var c=window.location.pathname;a=(0,p.resolve)(c,a),l=l?(0,p.resolve)(c,l):a,e.preventDefault();var d=o.props.scroll;null==d&&(d=l.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](a,l,{shallow:o.props.shallow}).then((function(e){e&&d&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,p.resolve)(e,n);return[o,r?(0,p.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),x[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),g.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),x[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var i=f.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),f.default.cloneElement(i,a)}}]),n}(f.Component);t.default=_},TZT2:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("ERkP"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},ZLcN:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("KD1n"),o=n("H5qd");function i(){var e=Object(r.a)(["\nquery GetDeliveryMethods {\n    deliveryMethods(limit: 0) {\n      items {\n        id\n        name\n        details\n        created_at\n        isPickUp\n        pickUpAddress\n      }\n      totalCount\n      hasMore\n    }\n  }\n"]);return i=function(){return e},e}var a=n.n(o)()(i())},bOkD:function(e,t,n){var r=n("cHE3");e.exports=function(e){if(Array.isArray(e))return r(e)}},dq4L:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("ERkP"))&&r.__esModule?r:{default:r},i=n("TZT2");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery;return n||o&&(void 0!==i&&i)}},"f/wd":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var r,o="$";!function(e){e.IRRIGATE_ON_DEMAND="IRRIGATE_ON_DEMAND",e.IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND="IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND",e.SEEDS_POOL_IRRIGATION="SEEDS_POOL_IRRIGATION",e.MANUAL="MANUAL",e.SCHEDULE="SCHEDULE",e.NONE="NONE"}(r||(r={}))},"iN+R":function(e,t,n){var r=n("bOkD"),o=n("DSo7"),i=n("D7XE"),a=n("uYlf");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},jvDv:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return m})),n.d(t,"a",(function(){return v}));var r=n("Km8e"),o=n.n(r),i=function(e,t){var n=o()({},e,t);for(var r in e){var i;e[r]&&"object"===typeof t[r]&&o()(n,((i={})[r]=o()(e[r],t[r]),i))}return n},a={breakpoints:[40,52,64].map((function(e){return e+"em"}))},l=function(e){return"@media screen and (min-width: "+e+")"},c=function(e,t){return d(t,e,e)},d=function(e,t,n,r,o){for(t=t&&t.split?t.split("."):[t],r=0;r<t.length;r++)e=e?e[t[r]]:o;return e===o?n:e},s=function e(t){var n={},r=function(e){var r={},c=!1,s=e.theme&&e.theme.disableStyledSystemCache;for(var p in e)if(t[p]){var m=t[p],v=e[p],h=d(e.theme,m.scale,m.defaults);if("object"!==typeof v)o()(r,m(v,h,e));else{if(n.breakpoints=!s&&n.breakpoints||d(e.theme,"breakpoints",a.breakpoints),Array.isArray(v)){n.media=!s&&n.media||[null].concat(n.breakpoints.map(l)),r=i(r,u(n.media,m,h,v,e));continue}null!==v&&(r=i(r,f(n.breakpoints,m,h,v,e)),c=!0)}}return c&&(r=function(e){var t={};return Object.keys(e).sort((function(e,t){return e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})})).forEach((function(n){t[n]=e[n]})),t}(r)),r};r.config=t,r.propNames=Object.keys(t),r.cache=n;var c=Object.keys(t).filter((function(e){return"config"!==e}));return c.length>1&&c.forEach((function(n){var o;r[n]=e(((o={})[n]=t[n],o))})),r},u=function(e,t,n,r,i){var a={};return r.slice(0,e.length).forEach((function(r,l){var c,d=e[l],s=t(r,n,i);d?o()(a,((c={})[d]=o()({},a[d],s),c)):o()(a,s)})),a},f=function(e,t,n,r,i){var a={};for(var c in r){var d=e[c],s=t(r[c],n,i);if(d){var u,f=l(d);o()(a,((u={})[f]=o()({},a[f],s),u))}else o()(a,s)}return a},p=function(e){var t=e.properties,n=e.property,r=e.scale,o=e.transform,i=void 0===o?c:o,a=e.defaultScale;t=t||[n];var l=function(e,n,r){var o={},a=i(e,n,r);if(null!==a)return t.forEach((function(e){o[e]=a})),o};return l.scale=r,l.defaults=a,l},m=function(e){void 0===e&&(e={});var t={};return Object.keys(e).forEach((function(n){var r=e[n];t[n]=!0!==r?"function"!==typeof r?p(r):r:p({property:n,scale:n})})),s(t)},v=function(){for(var e={},t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];n.forEach((function(t){t&&t.config&&o()(e,t.config)}));var i=s(e);return i}},jvFD:function(e,t,n){e.exports=n("KeDb")},"op+c":function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("ERkP"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=o},pFUA:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("KD1n"),o=n("H5qd");function i(){var e=Object(r.a)(["\n  query GetUserOrders {\n    getUserOrders {\n      id\n      order_code\n      customer_id\n      contact_number\n      datetime\n      delivery_address\n      payment_method\n      payment_status\n      delivery_method_id\n      status\n      discount_amount\n      sub_total\n      total\n      delivery_pickup_date\n      order_tracking {\n        status\n        ordering\n        is_current\n        step_competed\n      }\n      order_products {\n        product_id\n        image\n        quantity\n        recicledQuantity\n        unit\n        name\n        price\n      }\n    }\n  }\n"]);return i=function(){return e},e}var a=n.n(o)()(i())},quMH:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n("ERkP"),o=n.n(r),i=n("j/s1"),a=o.a.createElement;function l(e){var t=e.message;return a(c,null,t)}var c=i.e.aside.withConfig({displayName:"error-message__StyledAside",componentId:"spyukh-0"})({display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",padding:"1.5rem",fontSize:"15px",color:"000",backgroundColor:"#fff"})},tMoA:function(e,t,n){"use strict";n.r(t);var r=n("ERkP"),o=n.n(r),i=n("H8eV"),a=n("jvFD"),l=n.n(a),c=n("7xIC"),d=n("wgY5"),s=n.n(d),u=n("1U1M"),f=n("pFUA"),p=n("f/wd"),m=n("quMH"),v=n("j/s1"),h=n("tZdC"),b=v.e.div.withConfig({displayName:"order-receivedstyle__OrderReceivedWrapper",componentId:"ksjt95-0"})(["background-color:",";position:relative;padding:100px 0 60px 0;min-height:100vh;"],Object(h.a)("colors.gray.200","#f7f7f7")),g=v.e.a.withConfig({displayName:"order-receivedstyle__LinkPickUp",componentId:"ksjt95-1"})(["font-family:",";font-size:","px;font-weight:",";color:",";"],Object(h.a)("fonts.body","Lato"),Object(h.a)("fontSizes.base","15"),Object(h.a)("fontWeights.bold","700"),Object(h.a)("colors.blue","#ea4d4a")),y=(Object(v.e)("table").withConfig({displayName:"order-receivedstyle__OrderTable",componentId:"ksjt95-2"})(["&&{border-collapse:collapse;thead{th{padding:8px 20px;font-family:",";font-size:","px;font-weight:",";color:",";border:none;&:first-child{padding-left:110px;text-align:left;}}}tr{&:hover{background-color:inherit;}td{padding:20px;font-family:",";font-size:","px;font-weight:",";color:",";border-bottom:0;border:none;}}}"],Object(h.a)("fonts.body","Lato"),Object(h.a)("fontSizes.sm","13"),Object(h.a)("fontWeights.bold","700"),Object(h.a)("colors.text.bold","#0D1136"),Object(h.a)("fonts.body","Lato"),Object(h.a)("fontSizes.base","15"),Object(h.a)("fontWeights.regular","400"),Object(h.a)("colors.text.bold","#0D1136")),v.e.div.withConfig({displayName:"order-receivedstyle__OrderTableWrapper",componentId:"ksjt95-3"})([".rc-table-content{border:0;}"]),v.e.div.withConfig({displayName:"order-receivedstyle__OrderReceivedContainer",componentId:"ksjt95-4"})(["background-color:",";border:1px solid ",";padding:60px;border-radius:",";overflow:hidden;position:relative;width:calc(100% - 30px);margin-left:auto;margin-right:auto;@media (min-width:991px){width:870px;}@media (max-width:990px){padding:50px 45px;}@media (max-width:767px){padding:50px 25px;}.home-btn{display:inline-flex;align-items:center;justify-content:center;font-family:",";font-size:","px;font-weight:",";color:",";padding:5px 15px;height:36px;border:1px solid ",";border-radius:",";position:absolute;top:15px;right:15px;transition:0.15s ease-in-out;@media (max-width:767px){font-size:","px;height:34px;padding:5px 12px;}&:hover{background-color:",";border-color:",";color:",";}}.print-btn{display:inline-flex;align-items:center;justify-content:center;font-family:",";font-size:","px;font-weight:",";color:",";padding:5px 15px;height:36px;border:1px solid ",";border-radius:",";position:absolute;top:15px;right:125px;cursor:pointer;transition:0.15s ease-in-out;@media (max-width:767px){font-size:","px;height:34px;padding:5px 12px;}&:hover{background-color:",";border-color:",";color:",";}}@media print{.print-btn,.home-btn{display:none;}}"],Object(h.a)("colors.white","#ffffff"),Object(h.a)("colors.gray.500","#f1f1f1"),Object(h.a)("radii.base","6px"),Object(h.a)("fonts.body","Lato"),Object(h.a)("fontSizes.base","15"),Object(h.a)("fontWeights.regular","400"),Object(h.a)("colors.text.regular","#77798c"),Object(h.a)("colors.gray.700","#e6e6e6"),Object(h.a)("radii.base","6px"),Object(h.a)("fontSizes.sm","13"),Object(h.a)("colors.primary.regular","#009e7f"),Object(h.a)("colors.primary.regular","#009e7f"),Object(h.a)("colors.white","#ffffff"),Object(h.a)("fonts.body","Lato"),Object(h.a)("fontSizes.base","15"),Object(h.a)("fontWeights.regular","400"),Object(h.a)("colors.text.regular","#77798c"),Object(h.a)("colors.gray.700","#e6e6e6"),Object(h.a)("radii.base","6px"),Object(h.a)("fontSizes.sm","13"),Object(h.a)("colors.primary.regular","#009e7f"),Object(h.a)("colors.primary.regular","#009e7f"),Object(h.a)("colors.white","#ffffff"))),x=v.e.div.withConfig({displayName:"order-receivedstyle__OrderInfo",componentId:"ksjt95-5"})(["margin-bottom:60px;@media (max-width:767px){margin-bottom:30px;}"]),w=v.e.div.withConfig({displayName:"order-receivedstyle__OrderDetails",componentId:"ksjt95-6"})(["margin-bottom:60px;@media (max-width:767px){margin-bottom:50px;}"]),_=v.e.div.withConfig({displayName:"order-receivedstyle__TotalAmount",componentId:"ksjt95-7"})([""]),O=v.e.h2.withConfig({displayName:"order-receivedstyle__BlockTitle",componentId:"ksjt95-8"})(["font-family:",";font-size:","px;font-weight:",";color:",";line-height:1;margin-bottom:32px;margin-top:5px;@media (max-width:767px){font-size:calc(","px + 1px);margin-bottom:25px;}"],Object(h.a)("fonts.heading","sans-serif"),Object(h.a)("fontSizes.lg","21"),Object(h.a)("fontWeights.bold","700"),Object(h.a)("colors.text.bold","#0D1136"),Object(h.a)("fontSizes.base","15")),j=v.e.p.withConfig({displayName:"order-receivedstyle__Text",componentId:"ksjt95-9"})(["font-family:",";font-size:","px;color:",";font-weight:",";line-height:1.2;display:block;margin:0;min-width:140px;&:last-child{color:",";}"],Object(h.a)("fonts.body","Lato"),Object(h.a)("fontSizes.base","15"),Object(h.a)("colors.text.bold","#0D1136"),(function(e){return e.bold?Object(h.a)("fontWeights.bold","700"):Object(h.a)("fontWeights.regular","400")}),Object(h.a)("colors.text.medium","#424561")),k=v.e.div.withConfig({displayName:"order-receivedstyle__InfoBlockWrapper",componentId:"ksjt95-10"})(["display:flex;align-items:center;justify-content:space-between;margin-top:30px;@media (max-width:767px){flex-wrap:wrap;}"]),M=v.e.div.withConfig({displayName:"order-receivedstyle__InfoBlock",componentId:"ksjt95-11"})(["flex-grow:1;padding:0 15px;border-left:1px solid ",";@media (max-width:767px){max-width:100%;flex:0 0 100%;margin-bottom:20px;padding:0;border:0;}&:first-child{padding-left:0;border-left:0;}&:last-child{padding-right:0;}.title{margin-bottom:10px;}"],Object(h.a)("colors.gray.500","#f1f1f1")),C=v.e.div.withConfig({displayName:"order-receivedstyle__ListItem",componentId:"ksjt95-12"})(["display:flex;margin-bottom:20px;&:last-child{margin-bottom:0;}"]),E=v.e.div.withConfig({displayName:"order-receivedstyle__ListTitle",componentId:"ksjt95-13"})(["flex-shrink:0;position:relative;&:after{content:'';position:absolute;top:-1px;right:-2px;line-height:1;}"]),I=v.e.div.withConfig({displayName:"order-receivedstyle__ListDes",componentId:"ksjt95-14"})(["padding-left:20px;@media (max-width:767px){padding-left:20px;}"]),N=b,D=n("yVh0"),S=n("2SGB"),A=n("ZLcN"),T=o.a.createElement,R=function(e){var t,n,r=Object(c.useRouter)(),i=(Object(D.a)(),Object(u.b)(f.a)),a=i.data,d=i.error,v=i.loading,h=Object(u.b)(A.a),b=h.data;h.error,h.loading,h.refetch;if(v)return T(m.default,{message:"Cargando..."});if(d)return T(m.default,{message:d.message});var R=a.getUserOrders.map((function(e){return e.id})).indexOf(r.query.itemId),P=a.getUserOrders[R>=0?R:0],U=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},L="".concat(s()(null===P||void 0===P?void 0:P.datetime).format("MM/DD/YY"),", ").concat(s()(null===P||void 0===P?void 0:P.datetime).format("hh:mm A")),z=null===b||void 0===b?void 0:null===(t=b.deliveryMethods)||void 0===t?void 0:t.items,H=null===z||void 0===z?void 0:z.filter((function(e){return e.id===(null===P||void 0===P?void 0:P.delivery_method_id)}))[0],q="".concat(null===P||void 0===P?void 0:P.delivery_pickup_date," ").concat(function(e){if(!e)return"";var t=e.indexOf("Horario: "),n="Horario: ".length;return e.slice(t+n)}(null===H||void 0===H?void 0:H.details));return T(N,null,T(y,null,T(l.a,{href:"/profile"},T("a",{className:"home-btn"},T(S.a,{id:"backProfileBtn",defaultMessage:"Back to Profile"}))),T("span",{onClick:function(){window.print()},className:"print-btn"},T(S.a,{id:"printInvoiceBtn",defaultMessage:"Print Invoice"})),T(x,null,T(O,null,T(S.a,{id:"orderReceivedSuccess",defaultMessage:"Order"})),T(k,null,T(M,null,T(j,{bold:!0,className:"title"},T(S.a,{id:"orderNumberText",defaultMessage:"Order Number"})),T(j,null,null===P||void 0===P?void 0:P.order_code)),T(M,null,T(j,{bold:!0,className:"title"},T(S.a,{id:"orderDateText",defaultMessage:"Date"})),T(j,null,L)),T(M,null,T(j,{bold:!0,className:"title"},T(S.a,{id:"totalText",defaultMessage:"Total"})),T(j,null,p.a,null===P||void 0===P?void 0:P.total)),T(M,null,T(j,{bold:!0,className:"title"},T(S.a,{id:"paymenMethodText",defaultMessage:"Payment Method"})),T(j,null,T(S.a,{id:"paymentMethodName",defaultMessage:null===P||void 0===P?void 0:P.payment_method}))))),T(w,null,T(O,null,T(S.a,{id:"orderDetailsText",defaultMessage:"Order Details"})),T(C,null,T(E,null,T(j,{bold:!0},T(S.a,{id:"totalItemText",defaultMessage:"Total Item"}))),T(I,null,T(j,null,null===P||void 0===P?void 0:null===(n=P.order_products)||void 0===n?void 0:n.length," "))),T(C,null,T(E,null,T(j,{bold:!0},T(S.a,{id:"deliveryMethodTitle",defaultMessage:"Order Method"}))),T(I,null,T(j,null,null===H||void 0===H?void 0:H.name))),(null===H||void 0===H?void 0:H.isPickUp)?T(o.a.Fragment,null,T(C,null,T(E,null,T(j,{bold:!0},T(S.a,{id:"deliveryTime",defaultMessage:"Delivery Time"}))),T(I,null,T(j,null,U(q)))),T(C,null,T(E,null,T(j,{bold:!0},T(S.a,{id:"deliveryLocationText",defaultMessage:"Delivery Location"}))),T(I,null,(null===H||void 0===H?void 0:H.pickUpAddress.includes("http"))?T(g,{href:null===H||void 0===H?void 0:H.pickUpAddress,target:"_blank",rel:"noopener noreferrer"},"Click/toque aqu\xed"):T(j,null,null===H||void 0===H?void 0:H.pickUpAddress)))):T(o.a.Fragment,null,T(C,null,T(E,null,T(j,{bold:!0},T(S.a,{id:"deliveryDateTitle",defaultMessage:"Delivery Date"}))),T(I,null,T(j,null,T(j,null,U(q))))),T(C,null,T(E,null,T(j,{bold:!0},T(S.a,{id:"deliveryAddress",defaultMessage:"Delivery Address"}))),T(I,null,T(j,null,null===P||void 0===P?void 0:P.delivery_address))))),T(_,null,T(O,null,T(S.a,{id:"totalAmountText",defaultMessage:"Total Amount"})),T(C,null,T(E,null,T(j,{bold:!0},T(S.a,{id:"subTotal",defaultMessage:"Sub total"}))),T(I,null,T(j,null,p.a,null===P||void 0===P?void 0:P.sub_total))),T(C,null,T(E,null,T(j,{bold:!0},T(S.a,{id:"paymenMethodText",defaultMessage:"Payment Method"}))),T(I,null,T(j,null,null===P||void 0===P?void 0:P.payment_method))),T(C,null,T(E,null,T(j,{bold:!0},T(S.a,{id:"totalText",defaultMessage:"Total"}))),T(I,null,T(j,null,p.a,null===P||void 0===P?void 0:P.total))))))},P=o.a.createElement;t.default=function(){return P(o.a.Fragment,null,P(i.a,{title:"Invoice - Ditto",description:"Invoice Details"}),P(R,null))}},tZdC:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("jvDv"),o=function(e,t){return void 0===t&&(t=null),function(n){return Object(r.d)(n.theme,e,t)}}},uYlf:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},ysqo:function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r=c(n("ERkP")),o=c(n("J9Yr")),i=n("TZT2"),a=n("op+c"),l=n("dq4L");function c(e){return e&&e.__esModule?e:{default:e}}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var u=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var l=0,c=u.length;l<c;l++){var d=u[l];if(o.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?i=!1:n.add(d);else{var s=o.props[d],f=r[d]||new Set;f.has(s)?i=!1:(f.add(s),r[d]=f)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,o.default)();function m(e){var t=e.children;return(r.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(a.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:(0,l.isInAmpMode)(e)},t)}))})))}m.rewind=p.rewind;var v=m;t.default=v}},[["JunZ",1,0,15,2,3,4,5,16]]]);