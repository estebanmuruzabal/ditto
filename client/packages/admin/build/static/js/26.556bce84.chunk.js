(this["webpackJsonp@ditto-ecommerce/admin"]=this["webpackJsonp@ditto-ecommerce/admin"]||[]).push([[26],{111:function(e,t,n){"use strict";var a=n(49),r=n(0),o=n(420),l=n(118);const i=({$theme:e})=>e.typography.fontBold14;t.a=e=>{let t=Object.assign({},e);return r.createElement(o.a,Object.assign({overrides:{SelectArrow:()=>r.createElement(l.a,null),Popover:{props:{overrides:{Body:{style:{zIndex:1}}}}},Placeholder:{style:({$theme:e})=>Object(a.a)({color:e.colors.textDark},i({$theme:e}))},SingleValue:{style:({$theme:e})=>Object(a.a)(Object(a.a)({},i({$theme:e})),{},{color:e.colors.textDark,lineHeight:"1.5"})},DropdownListItem:{style:({$theme:e})=>({fontSize:"14px",fontWeight:"700",color:e.colors.textDark})},OptionContent:{style:({$theme:e,$selected:t})=>Object(a.a)(Object(a.a)({},e.typography.fontBold14),{},{color:t?e.colors.textDark:e.colors.textNormal})},DropdownOption:{style:({$theme:e})=>({fontSize:"14px",fontWeight:"700",color:e.colors.textDark})}}},t))}},427:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var a=n(25),r=n(34),o=n(0),l=n.n(o),i=n(72),c=n(99),s=n(98),m=n(111),d=n(101),u=n(100),b=n(58),p=n(115),h=n(107),f=n(35),g=n.n(f),E=n(26);function v(){const e=Object(r.a)(["\n    mutation DeleteDeliveryMethod($id: ID!) {\n        deleteDeliveryMethod(id: $id) {\n            message\n            status\n        }\n    }\n"]);return v=function(){return e},e}function x(){const e=Object(r.a)(["\n    query GetDeliveryMethods(\n        $searchText: String\n        $offset: Int\n    ) {\n        deliveryMethods(\n            searchText: $searchText\n            offset: $offset\n        ) {\n            items {\n                id\n                name\n                details\n                created_at\n            }\n            totalCount\n            hasMore\n        }\n    }\n"]);return x=function(){return e},e}const y=({icon:e,width:t="18px",height:n="18px"})=>{let a=h.b.hasOwnProperty(e)?h.b[e]:"span";return l.a.createElement(a,{width:t,height:n})},k=g()(x()),O=g()(v());var w=e=>{let t=e.itemData,n=e.itemsOffset;Object(b.a)(e,["itemData","itemsOffset"]);const r=Object(s.b)(),o=l.a.useCallback(()=>{r({type:"OPEN_DRAWER",drawerComponent:"STAFF_EDIT_MEMBER_FORM",data:t})},[r,t]),i=Object(E.a)(O,{update:e=>{const a=e.readQuery({query:k,variables:0!==n?{offset:n}:{}}).deliveryMethods;e.writeQuery({query:k,variables:0!==n?{offset:n}:{},data:{deliveryMethods:{__typename:a.__typename,items:a.items.filter(e=>e.id!==t.id),hasMore:a.items.length-1>=12,totalCount:a.items.length-1}}})}}),c=Object(a.a)(i,1)[0];return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement(p.b,{onClick:o,style:{marginRight:"10px",cursor:"pointer"}},l.a.createElement(y,{icon:"ArrowNext"}))),l.a.createElement(p.a,null,l.a.createElement(p.b,{onClick:()=>{confirm("Are you sure? You can not undo this.")&&c({variables:{id:t.id}})},style:{color:"#c50707",cursor:"pointer"}},l.a.createElement(y,{width:"15px",height:"15px",icon:"CloseIcon"}))))},R=n(155),j=n(117),S=n(436);const D=Object(i.b)("div",()=>({width:"100%",height:"450px"})),W=Object(i.d)(S.c,()=>({borderTopLeftRadius:"0 !important",borderTopRightRadius:"0 !important",borderBottomLeftRadius:"0 !important",borderBottomRightRadius:"0 !important",alignContent:"start"})),M=Object(i.d)(S.b,()=>({fontFamily:"'Lato', sans-serif",fontWeight:700,color:"#161F6A !important",alignItems:"center",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",borderTopColor:"rgba(0, 0, 0, 0.12)",borderRightColor:"rgba(0, 0, 0, 0.12)",borderBottomColor:"rgba(0, 0, 0, 0.12)",borderLeftColor:"rgba(0, 0, 0, 0.12)",alignSelf:"start"})),C=Object(i.d)(S.a,()=>({fontFamily:"'Lato', sans-serif",fontWeight:400,color:"#161F6A !important",alignSelf:"center"}));var T=n(121),B=n(11);function I(){const e=Object(r.a)(["\n  query staffs {\n    getStaffs {\n      id\n      name\n      email\n      role\n      created_at\n      phones{\n        number\n        id\n        is_primary\n      }\n      workInfo{\n        stoppedWorkTime\n        startedWorkTime\n        ratePerHour\n        totalWorkingMinutesPerWeek\n        totalSalaryToPayWeekly\n        advancedSalaryPaid\n        isWorking\n        taskRelated\n      }\n      tasks{\n        taskId\n        startDate\n        finishDate\n        plannedDate\n        isRepetitived\n        completationTimes\n        isDone\n        description\n        workedHours\n      }\n      logs{\n        logDescription\n        timestamp\n      }\n    }\n  }\n"]);return I=function(){return e},e}const $=g()(I()),P=Object(i.d)(c.a,()=>({"@media only screen and (max-width: 767px)":{marginBottom:"20px",":last-child":{marginBottom:0}}})),A=Object(i.d)(c.d,()=>({"@media only screen and (min-width: 768px)":{alignItems:"center"}})),F=[{value:B.n.MANAGER,label:"Manager"},{value:B.n.MEMBER,label:"Member"},{value:B.n.DELIVERY_BOY,label:"Delivery boy"},{value:B.n.CLIENT,label:"Client"},{value:B.n.GROWER,label:"Grower"},{value:B.n.STAFF,label:"Staff"}];function _(){const e=Object(s.b)(),t=Object(o.useState)(0),n=Object(a.a)(t,2),r=n[0],i=(n[1],Object(o.useCallback)(()=>e({type:"OPEN_DRAWER",drawerComponent:"STAFF_MEMBER_FORM"}),[e])),b=Object(o.useState)([]),p=Object(a.a)(b,2),h=p[0],f=p[1],g=Object(o.useState)(""),v=Object(a.a)(g,2),x=v[0],y=v[1],k=Object(E.b)($),O=k.data,S=k.error,I=k.refetch;if(S)return l.a.createElement("div",null,"Error! ",S.message);return l.a.createElement(c.c,{fluid:!0},l.a.createElement(A,null,l.a.createElement(P,{md:12},l.a.createElement(j.a,{style:{marginBottom:40,boxShadow:"0 0 5px rgba(0, 0 ,0, 0.05)"}},l.a.createElement(P,{md:3,xs:12},l.a.createElement(j.b,null,"Staff Members")),l.a.createElement(P,{md:9,xs:12},l.a.createElement(A,null,l.a.createElement(P,{md:3,xs:12},l.a.createElement(m.a,{options:F,labelKey:"label",valueKey:"value",placeholder:"Role",value:h,searchable:!1,onChange:function({value:e}){f(e),e.length?I({role:e[0].value,searchBy:x}):I({role:null})}})),l.a.createElement(P,{md:5,xs:12},l.a.createElement(d.a,{value:x,placeholder:"Ex: Quick Search By Name",onChange:function(e){const t=e.currentTarget.value;y(t),I({searchBy:t})},clearable:!0})),l.a.createElement(P,{md:4,xs:12},l.a.createElement(u.b,{onClick:i,startEnhancer:()=>l.a.createElement(R.b,null),overrides:{BaseButton:{style:()=>({width:"100%",borderTopLeftRadius:"3px",borderTopRightRadius:"3px",borderBottomLeftRadius:"3px",borderBottomRightRadius:"3px"})}}},"Add Members"))))),l.a.createElement(j.c,{style:{boxShadow:"0 0 5px rgba(0, 0 , 0, 0.05)"}},l.a.createElement(D,null,l.a.createElement(W,{$gridTemplateColumns:"minmax(150px, auto) minmax(75px, auto) minmax(75px, auto) minmax(75px, auto) minmax(75px, auto) minmax(150px, auto) minmax(150px, max-content) minmax(75px, auto)"},l.a.createElement(M,null,"Name"),l.a.createElement(M,null,"Role"),l.a.createElement(M,null,"Is Working"),l.a.createElement(M,null,"Hourly rate"),l.a.createElement(M,null,"Weekly Salary"),l.a.createElement(M,null,"Pending Tasks"),l.a.createElement(M,null,"Working Hours"),l.a.createElement(M,null,"Action"),O?O.getStaffs.length?O.getStaffs.map((e,t)=>{var n,a,o,i,c,s,m,d,u,b,p,h;if(e.role===B.n.STAFF)return l.a.createElement(l.a.Fragment,{key:t},l.a.createElement(C,null,e.name||"-"),l.a.createElement(C,null,e.role||"-"),l.a.createElement(C,null,(null===(n=e.workInfo)||void 0===n||null===(a=n.isWorking)||void 0===a||null===(o=a.toString())||void 0===o?void 0:o.toUpperCase())||"-"),l.a.createElement(C,null,"$",(null===(i=e.workInfo)||void 0===i?void 0:i.ratePerHour)||"0"),l.a.createElement(C,null,"$",(null===(c=e.workInfo)||void 0===c?void 0:c.totalSalaryToPayWeekly)||"0"),l.a.createElement(C,null,null===(s=e.tasks)||void 0===s||null===(m=s.filter(e=>{var t,n;return 0===(null===(t=e.startDate)||void 0===t?void 0:t.length)&&0===(null===(n=e.finishDate)||void 0===n?void 0:n.length)&&!1===(null===e||void 0===e?void 0:e.isDone)}))||void 0===m?void 0:m.length),l.a.createElement(C,null,(null===(d=e.workInfo)||void 0===d?void 0:d.totalWorkingMinutesPerWeek)?"".concat((null===(u=e.workInfo)||void 0===u?void 0:u.totalWorkingMinutesPerWeek)/60|0,":").concat(Number((null===(b=e.workInfo)||void 0===b?void 0:b.totalWorkingMinutesPerWeek)%60|0)>=9?(null===(p=e.workInfo)||void 0===p?void 0:p.totalWorkingMinutesPerWeek)%60|0:"0"+(null===(h=e.workInfo)||void 0===h?void 0:h.totalWorkingMinutesPerWeek)%60," hs"):"0"),l.a.createElement(C,null,l.a.createElement(w,{itemsOffset:r,itemData:e})))}):l.a.createElement(T.a,{hideButton:!1,style:{gridColumnStart:"1",gridColumnEnd:"one"}}):null))))))}}}]);
//# sourceMappingURL=26.556bce84.chunk.js.map