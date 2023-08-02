import{l as M,bU as Q,r as h,bV as k,c,w as I,_ as N,b5 as $,A as g,B as b,d as r,br as y,cT as U,D as p,ar as B,cU as S,cS as P}from"./index.9dd15430.js";import{a as T}from"./QSelect.b771c9d2.js";import{u as X}from"./use-quasar.07d34863.js";import{u as z}from"./dataStore.fea3a289.js";import{u as H}from"./dataStore.c18945c8.js";import{I as L,q as O}from"./app.727217bc.js";import{dayjs as C}from"./dayjs.2f8688b0.js";import{u as G}from"./useQuerySaver.d29ff9ee.js";import{R as J}from"./rosterTable.b589c850.js";import{_ as K}from"./projectSelector.19f1057e.js";const W=M({props:{},components:{RosterTable:J,projectSelector:K},setup(a){const o=X(),f=Q(),A=L(),v=h(""),d=h(null),n=h(null),{getSelectedProject:u}=k(A),{getAssignments:s,fetchAllAssignments:_,fetchAssignments:j}=z(),{getManpowerData:V,setRosters:R}=H(),l=c(()=>f.params.id?f.params.id:null),m=c(()=>u.value?u.value[3]:null),w=c(()=>{let e;return l.value?e=(V({dataset:"rosters",id:l.value})||[]).sort((i,E)=>i[1].$d<E[1].$d?1:-1):e=s(m.value).sort((t,i)=>t[1].$d<i[1].$d?1:-1),e.filter(t=>!t[112]&&t.latest&&t[102]==="Active")}),F=c(()=>{let e=[];return w.value.forEach(t=>{t[75].toLowerCase().includes(v.value.toLowerCase())&&e.push(t)}),e=d.value?e.filter(t=>C(t[1].$d).tz("America/Chicago").format("MM/DD/YYYY")===C(d.value).tz("America/Chicago").format("MM/DD/YYYY")):e,e=n.value?e.filter(t=>t[68]===n.value):e,e.sort((t,i)=>t.employee[22]>i.employee[22]?1:-1)}),Y=c(()=>[...new Map(w.value.map(e=>[e[68],e[68]])).values()]),D=async e=>{o.loading.show(),l.value?(e||!V({dataset:"rosters",id:l.value}))&&await q():m.value?await j({projectId:m.value,refresh:e}):await _({refresh:e}),o.loading.hide()},q=async()=>{const e=`{'74'.EX.'${l.value}'}AND{'21'.EX.'In Process'}AND{'102'.EX.'Active'}`,{data:t}=await O.fetchFromHiringApp({fields:[G({type:"assignments",query:e})]});R({id:l.value,data:t})};return I(m,()=>{D()}),D(),{allAssignments:w,search:v,startDateFilter:d,craftFilter:n,craftOptions:Y,rows:F,loadData:D}}}),Z={class:"row items-center"},x={key:0,class:"col-12 col-md-3"},ee={class:"col-12 col-md-3 q-px-sm"},te={class:"col-12 col-md-3 q-px-sm"},ae={class:"col-12 col-md-3 q-px-sm"};function oe(a,o,f,A,v,d){const n=$("projectSelector"),u=$("roster-table");return g(),b("div",null,[r(P,{flat:""},{default:y(()=>[r(U,null,{default:y(()=>[p("div",Z,[a.$route.params.id?B("",!0):(g(),b("div",x,[r(n,{dense:""})])),p("div",ee,[r(S,{dense:"",modelValue:a.search,"onUpdate:modelValue":o[0]||(o[0]=s=>a.search=s),label:"Search"},null,8,["modelValue"])]),p("div",te,[r(S,{dense:"",modelValue:a.startDateFilter,"onUpdate:modelValue":o[1]||(o[1]=s=>a.startDateFilter=s),label:"Arrival Date",type:"date","stack-label":""},null,8,["modelValue"])]),p("div",ae,[r(T,{dense:"",label:"Craft","transition-show":"flip-up","transition-hide":"flip-down",modelValue:a.craftFilter,"onUpdate:modelValue":o[2]||(o[2]=s=>a.craftFilter=s),options:a.craftOptions,"use-chips":""},null,8,["modelValue","options"])])])]),_:1})]),_:1}),r(u,{rows:a.rows,onRefreshData:o[3]||(o[3]=s=>a.loadData(!0)),title:"Active Roster"},null,8,["rows"])])}var fe=N(W,[["render",oe]]);export{fe as E};
