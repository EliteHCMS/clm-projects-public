import{Q as S,a as ge,b as B}from"./QTabPanels.9f94c184.js";import{Q as Z}from"./QTabs.f623a5d2.js";import{Q as $e}from"./QToolbar.a5c37bda.js";import{Q as we}from"./QPage.3d5ce7e1.js";import{u as de,q as ue,i as ee}from"./app.0cf6c26c.js";import{l as J,bU as z,r as w,c as A,_ as O,b5 as C,A as q,B as I,d as a,br as r,cT as F,D as c,cU as U,aq as Y,ar as W,cS as L,bT as ye,w as he,o as _e,F as ae,b4 as te,ax as H,ac as E,bQ as oe,a8 as le,bW as se,y as De}from"./index.af6d7727.js";import{a as ce}from"./QSelect.3c9e92f5.js";import{u as X}from"./use-quasar.2eaf8a48.js";import{u as G}from"./dataStore.805a8dfb.js";import{dayjs as j}from"./dayjs.d6561f67.js";import{u as me}from"./useQuerySaver.d29ff9ee.js";import{_ as Ve}from"./projectSelector.bbbbf51c.js";import{R as pe,g as Pe}from"./quickbaseDataHelpers.661ad5cb.js";import{a as re,Q as qe}from"./QTable.a594cfe3.js";import{Q as ne}from"./QTr.b62d6ab2.js";import{Q as ie}from"./QTd.c76309ed.js";import{Q as Re}from"./QInnerLoading.a6dc0348.js";import{e as je}from"./export-file.dc78ba05.js";import{P as Ae}from"./projectPipeline.afb5e9b3.js";import"./use-panel.748be206.js";import"./touch.3df10340.js";import"./selection.0443513d.js";import"./QResizeObserver.2efdc8b3.js";import"./rtl.b51694b1.js";import"./_commonjsHelpers.a26ce4be.js";import"./localForage.b83444b5.js";import"./api.aee798c5.js";import"./index.04bc0a32.js";import"./i18n.f52b7141.js";import"./QChip.5596a83c.js";import"./QMenu.6e91bc40.js";import"./position-engine.c080856a.js";import"./index.97824189.js";import"./arrivalDate.8969b3d1.js";import"./QTooltip.8a843c64.js";import"./QForm.16477e67.js";import"./vee-validate.esm.6f05bad0.js";import"./array.59f93f43.js";import"./QList.1bf12ac6.js";import"./QMarkupTable.20a8ae07.js";import"./use-fullscreen.be03fc8d.js";const ke=J({props:{},components:{RosterTable:pe,projectSelector:Ve},setup(o){const t=X(),P=z(),{getUserType:m}=de(),D=w(""),b=w(null),p=w(null),{getManpowerData:n,setRosters:d}=G(),f=A(()=>P.params.id?P.params.id:null),y=A(()=>(n({dataset:"rosters",id:f.value})||[]).sort((v,k)=>v[1].$d<k[1].$d?1:-1).filter(v=>!v[112]&&v.latest&&v[102]==="Active")),V=A(()=>{let l=[];return y.value.forEach(h=>{h[75].toLowerCase().includes(D.value.toLowerCase())&&l.push(h)}),l=b.value?l.filter(h=>j(h[1].$d).tz("America/Chicago").format("MM/DD/YYYY")===j(b.value).tz("America/Chicago").format("MM/DD/YYYY")):l,l=p.value?l.filter(h=>h[68]===p.value):l,l.sort((h,v)=>h.employee[22]>v.employee[22]?1:-1)}),N=A(()=>[...new Map(y.value.map(l=>[l[68],l[68]])).values()]),T=async l=>{(l||!n({dataset:"rosters",id:f.value}))&&(t.loading.show(),await u(),t.loading.hide())},u=async()=>{const l=`{'173'.EX.'${f.value}'}AND{'21'.EX.'In Process'}AND{'102'.EX.'Active'}`,{data:h}=await ue.fetchFromHiringApp({fields:[me({type:"assignments",query:l})]});d({id:f.value,data:h})};return T(!1),{allAssignments:y,search:D,startDateFilter:b,craftFilter:p,craftOptions:N,rows:V,getUserType:m,loadData:T}}}),Qe={class:"row items-center"},Ye={class:"col-12 col-md-3 q-px-sm"},Ce={class:"col-12 col-md-3 q-px-sm"},Ne={class:"col-12 col-md-3 q-px-sm"};function Te(o,t,P,m,D,b){const p=C("projectSelector"),n=C("roster-table");return q(),I("div",null,[a(L,{flat:""},{default:r(()=>[a(F,null,{default:r(()=>[c("div",Qe,[c("div",Ye,[a(U,{dense:"",modelValue:o.search,"onUpdate:modelValue":t[0]||(t[0]=d=>o.search=d),label:"Search"},null,8,["modelValue"])]),c("div",Ce,[a(U,{dense:"",modelValue:o.startDateFilter,"onUpdate:modelValue":t[1]||(t[1]=d=>o.startDateFilter=d),label:"Arrival Date",type:"date","stack-label":""},null,8,["modelValue"])]),c("div",Ne,[a(ce,{dense:"",label:"Craft","transition-show":"flip-up","transition-hide":"flip-down",modelValue:o.craftFilter,"onUpdate:modelValue":t[2]||(t[2]=d=>o.craftFilter=d),options:o.craftOptions,"use-chips":""},null,8,["modelValue","options"]),o.getUserType==="Project User"?(q(),Y(p,{key:0,can:"read",dense:"",style:{display:"none"}})):W("",!0)])])]),_:1})]),_:1}),a(n,{rows:o.rows,onRefreshData:t[3]||(t[3]=d=>o.loadData(!0)),title:"Active Roster"},null,8,["rows"])])}var Se=O(ke,[["render",Te]]);const Ue=J({props:{},components:{RosterTable:pe},setup(o){const t=X(),P=z(),m=w(""),D=w(null),b=w(null),{getManpowerData:p,setRosters:n}=G(),d=A(()=>P.params.id?P.params.id:null),f=A(()=>{const u=j().subtract(14,"day");return(p({dataset:"rosters",id:d.value})||[]).sort((v,k)=>v[1].$d<k[1].$d?1:-1).filter(v=>!v[112]&&v.latest&&v[102]==="Active"&&j(v[1].$d).isSameOrAfter(u)&&j(v[1].$d).isSameOrBefore(j()))}),y=A(()=>{let u=[];return f.value.forEach(l=>{l[75].toLowerCase().includes(m.value.toLowerCase())&&u.push(l)}),u=D.value?u.filter(l=>j(l[1].$d).tz("America/Chicago").format("MM/DD/YYYY")===j(D.value).tz("America/Chicago").format("MM/DD/YYYY")):u,u=b.value?u.filter(l=>l[68]===b.value):u,u.sort((l,h)=>l.employee[22]>h.employee[22]?1:-1)}),V=A(()=>[...new Map(f.value.map(u=>[u[68],u[68]])).values()]),N=async u=>{(u||!p({dataset:"rosters",id:d.value}))&&(t.loading.show(),await T(),t.loading.hide())},T=async()=>{const u=`{'173'.EX.'${d.value}'}AND{'21'.EX.'In Process'}AND{'102'.EX.'Active'}`,{data:l}=await ue.fetchFromProjectsApp({fields:[me({type:"assignments",query:u})]});n({id:d.value,data:l})};return{allAssignments:f,search:m,startDateFilter:D,craftFilter:b,craftOptions:V,rows:y,loadData:N}}}),Me={class:"row items-center"},Ie={class:"col-12 col-md-3 q-px-sm"},Ee={class:"col-12 col-md-3 q-px-sm"},Fe={class:"col-12 col-md-3 q-px-sm"};function xe(o,t,P,m,D,b){const p=C("roster-table");return q(),I("div",null,[a(L,{flat:""},{default:r(()=>[a(F,null,{default:r(()=>[c("div",Me,[c("div",Ie,[a(U,{dense:"",modelValue:o.search,"onUpdate:modelValue":t[0]||(t[0]=n=>o.search=n),label:"Search"},null,8,["modelValue"])]),c("div",Ee,[a(U,{dense:"",modelValue:o.startDateFilter,"onUpdate:modelValue":t[1]||(t[1]=n=>o.startDateFilter=n),label:"Arrival Date",type:"date","stack-label":""},null,8,["modelValue"])]),c("div",Fe,[a(ce,{dense:"",label:"Craft","transition-show":"flip-up","transition-hide":"flip-down",modelValue:o.craftFilter,"onUpdate:modelValue":t[2]||(t[2]=n=>o.craftFilter=n),options:o.craftOptions,"use-chips":""},null,8,["modelValue","options"])])])]),_:1})]),_:1}),a(p,{rows:o.rows,onRefresh:t[3]||(t[3]=n=>o.loadData(!0)),title:"New Arrivals"},null,8,["rows"])])}var Be=O(Ue,[["render",xe]]);const ze={class:"row items-center"},Oe={class:"col-12 col-md-3 q-px-sm"},Le={class:"col-12 col-md-3 q-px-sm"},Xe={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"},We={class:"text-dark text-caption text-italic"},He={__name:"releases",setup(o){const t=ye(),P=z(),m=X(),{capitalize:D}=De,b=w(P.params.id?P.params.id:null),p=w(),n=w([]),d=w(""),f=w(""),y=w(!1),V=w({sortBy:6,descending:!0,page:1,rowsPerPage:25,rowsNumber:0});he(f,()=>{v()});const N=w([{name:1,label:"Name",align:"left",field:e=>e[49],format:e=>`${u(e)}`,sortable:!1,sortOrder:"ad"},{name:7,label:"Phone #",align:"left",field:e=>e[56],sortable:!1},{name:2,label:"Workday ID",align:"left",field:e=>e[50],format:e=>`${e}`,sortable:!1,sortOrder:"ad"},{name:3,label:"Payroll ID",align:"left",field:e=>e[51],format:e=>e===""?"not available":e,sortable:!1},{name:4,label:"Classification",align:"left",field:e=>e[82],format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!1},{name:5,label:"Job #",align:"left",field:e=>e[81],format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!1},{name:6,label:"Release Date",align:"left",field:e=>e[36].$d,format:e=>`${j(e).format("MM/DD/YYYY")}`,sortable:!0}]),T=w([{name:1,label:"Name",align:"left",field:e=>e[49],format:e=>`${u(e)}`,sortable:!1,sortOrder:"ad"},{name:7,label:"Phone #",align:"left",field:e=>e[56],sortable:!1},{name:2,label:"Workday ID",align:"left",field:e=>e[50],format:e=>`${e}`,sortable:!1,sortOrder:"ad"},{name:3,label:"Payroll ID",align:"left",field:e=>e[51],format:e=>e===""?"not available":e,sortable:!1},{name:4,label:"Classification",align:"left",field:e=>e[82],format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!1},{name:5,label:"Job #",align:"left",field:e=>e[81],format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!1},{name:7,label:"Term Reason",align:"left",field:e=>e[32],format:e=>`${e}`,sortable:!1},{name:6,label:"Release Date",align:"left",field:e=>e[36].$d,format:e=>`${j(e).format("MM/DD/YYYY")}`,sortable:!0}]),u=e=>{const g=e.split(" ");let s="";return g.forEach((i,Q)=>{s+=Q>0?` ${D(i.toLowerCase())}`:D(i.toLowerCase())}),s},l=({page:e,pageSize:g,descending:s,filter:i,sortBy:Q})=>{try{let R="";i&&(R=i.trim());const x={...i&&{$or:[{fullName:{$containsi:`${R}`}},{classification:{$containsi:`${R}`}},{jobNumber:{$containsi:`${R}`}},{workdayId:{$containsi:`${R}`}},{phoneNumber:{$containsi:`${R}`}},{payrollId:{$containsi:`${R}`}}]},...f.value&&{effectiveDate:{$eq:f.value}},...b.value&&{projectRID:{$eq:b.value}}};return ee.getReleases({pagination:{page:e,pageSize:g},sort:`effectiveDate:${s?"desc":"asc"}`,filters:x}).then(_=>{const{data:$,meta:M}=_,K=[];return $.forEach(ve=>{K.push(ee.formatObject(ve.syncObject))}),y.value=!1,{data:K,meta:M}})}catch{y.value=!1}},h=async e=>{const{page:g,rowsPerPage:s,sortBy:i,descending:Q}=e.pagination,R=e.filter,x=s===0?V.value.rowsNumber:s;y.value=!0;const _=await l({page:g,sortBy:i,descending:Q,pageSize:x,filter:R});if(y.value=!1,_){const{data:$,meta:M}=_;n.value.splice(0,n.value.length,...$),V.value.page=M.pagination.page,V.value.rowsPerPage=M.pagination.pageSize,V.value.sortBy=i,V.value.rowsPerPage=M.pagination.pageSize,V.value.rowsNumber=M.pagination.total}};_e(()=>{p.value.requestServerInteraction()});const v=()=>{p.value.requestServerInteraction()};function k(e,g,s){let i=g!==void 0?g(e,s):e;return i=i==null?"":String(i),i=i.split('"').join('""'),`"${i}"`}const fe=async()=>{const{page:e,rowsNumber:g,sortBy:s,descending:i}=V.value,Q=await l({page:e,sortBy:s,descending:i,pageSize:g,filter:d.value});let R=[N.value.map(_=>k(_.label))].concat(n.value.map(_=>N.value.map($=>k(typeof $.field=="function"?$.field(_):_[$.field===void 0?$.name:$.field],$.format,_)).join(","))).join(`\r
`);Q&&Q.data&&(R=[T.value.map(_=>k(_.label))].concat(Q.data.map(_=>T.value.map($=>k(typeof $.field=="function"?$.field(_):_[$.field===void 0?$.name:$.field],$.format,_)).join(","))).join(`\r
`)),je(`${j().format("MM.DD.YYYY")} Releases-Export.csv`,R,"text/csv")!==!0&&m.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})};function be(e){t.push({name:"view-release",params:{release:e[3]}})}return(e,g)=>(q(),I("div",null,[a(L,{flat:""},{default:r(()=>[a(F,null,{default:r(()=>[c("div",ze,[c("div",Oe,[a(U,{dense:"",debounce:"300",modelValue:d.value,"onUpdate:modelValue":g[0]||(g[0]=s=>d.value=s),label:"Search"},null,8,["modelValue"])]),c("div",Le,[a(U,{dense:"",debounce:"300",modelValue:f.value,"onUpdate:modelValue":g[1]||(g[1]=s=>f.value=s),label:"Release Date",type:"date","stack-label":""},null,8,["modelValue"])])])]),_:1})]),_:1}),c("div",null,[a(qe,{title:"Releases","title-class":"text-h5 text-primary",ref_key:"tableRef",ref:p,columns:N.value,rows:n.value,"row-key":s=>s[3],class:"q-pa-sm",pagination:V.value,"onUpdate:pagination":g[2]||(g[2]=s=>V.value=s),"table-header-class":"bg-dark text-white","no-data-label":"There are no releases",dense:"",filter:d.value,onRequest:h},{header:r(s=>[a(ne,{class:"bg-dark text-white",props:s},{default:r(()=>[a(re,{"auto-width":""}),(q(!0),I(ae,null,te(s.cols,i=>(q(),Y(re,{key:i.name,props:s},{default:r(()=>[H(E(i.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:r(s=>[a(ne,{props:s},{default:r(()=>[a(ie,{"auto-width":""},{default:r(()=>[a(oe,{class:"cursor-pointer",size:le(m).screen.gt.sm?"sm":"xs",color:"info",round:"",dense:"",onClick:i=>be(s.row),name:s.expand?"visibility_off":"visibility"},null,8,["size","onClick","name"])]),_:2},1024),(q(!0),I(ae,null,te(s.cols,i=>(q(),Y(ie,{key:i.name,props:s},{default:r(()=>[H(E(i.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"no-data":r(({message:s})=>[c("div",Xe,[a(oe,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),c("span",null,E(s),1)])]),"top-right":r(()=>[c("div",We,"(Total: "+E(V.value.rowsNumber)+" releases)",1),a(se,{color:"secondary",flat:"","icon-right":"refresh",label:"Refresh",onClick:v}),a(se,{dense:le(m).screen.lt.md,class:"q-ml-sm",color:"primary",label:"Download",onClick:fe,disable:V.value.rowsNumber<1},null,8,["dense","disable"])]),loading:r(()=>[a(Re,{showing:"",color:"primary"})]),_:1},8,["columns","rows","row-key","pagination","filter"])])]))}},Je={name:"Pipeline",components:{ProjectPipelineTable:Ae},setup(){const o=X(),t=z(),P=w(""),{getManpowerData:m,setPipelines:D}=G(),b=A(()=>t.params.id?t.params.id:null),p=A(()=>m({dataset:"pipelines",id:b.value})||[]),n=async f=>{(f||!m({dataset:"pipelines",id:b.value}))&&(o.loading.show(),await d(),o.loading.hide())},d=async()=>{const f=await Pe(b.value);D({id:b.value,data:f})};return n(),{allPipeline:p,search:P,loadData:n}}},Ge={class:"text-h5 text-dark"},Ke={class:"text-body2 text-italic q-ml-sm"},Ze=c("div",{class:"text-subtitle2 text-accent"},"The following people are currently in process or deployed for your job site(s).",-1),ea={class:"row items-center"},aa={class:"col-12 col-md-3 q-px-sm"};function ta(o,t,P,m,D,b){const p=C("project-pipeline-table");return q(),I("div",null,[a(L,{flat:""},{default:r(()=>[a(F,{class:"q-pb-none"},{default:r(()=>[c("div",Ge,[H(" Staffing Pipeline "),c("span",Ke,"("+E(m.allPipeline.length)+" total)",1)]),Ze]),_:1}),a(F,null,{default:r(()=>[c("div",ea,[c("div",aa,[a(U,{dense:"",modelValue:m.search,"onUpdate:modelValue":t[0]||(t[0]=n=>m.search=n),label:"Search"},null,8,["modelValue"])])])]),_:1})]),_:1}),a(p,{rows:m.allPipeline,onRefresh:t[1]||(t[1]=n=>m.loadData(!0))},null,8,["rows"])])}var oa=O(Je,[["render",ta]]);const la=J({name:"Employees",components:{RosterTab:Se,NewArrivalsTab:Be,ReleasesTab:He,PipelineTab:oa},setup(){const o=w(0),{getUserType:t}=de();return t==="QuickBase User"&&(o.value=3),{tab:o,getUserType:t}}}),sa={class:"q-pa-md"};function ra(o,t,P,m,D,b){const p=C("roster-tab"),n=C("new-arrivals-tab"),d=C("pipeline-tab"),f=C("releases-tab");return q(),Y(we,{style:{"max-width":"100vw"}},{default:r(()=>[c("div",sa,[a($e,{class:"bg-info text-white shadow-2 rounded-borders"},{default:r(()=>[o.getUserType==="QuickBase User"?(q(),Y(Z,{key:0,modelValue:o.tab,"onUpdate:modelValue":t[0]||(t[0]=y=>o.tab=y),"bg-color":"none","indicator-color":"accent",align:"justify",dense:""},{default:r(()=>[o.$route.name==="project-manpower"?(q(),Y(S,{key:0,name:3,label:"Pipeline"})):W("",!0),a(S,{name:2,label:"Releases"}),a(S,{name:0,label:o.$q.screen.gt.xs?"All Employees":"Employees"},null,8,["label"])]),_:1},8,["modelValue"])):(q(),Y(Z,{key:1,modelValue:o.tab,"onUpdate:modelValue":t[1]||(t[1]=y=>o.tab=y),"bg-color":"none","indicator-color":"accent",align:"justify",dense:""},{default:r(()=>[a(S,{name:0,label:o.$q.screen.gt.xs?"All Employees":"Employees"},null,8,["label"]),a(S,{name:1,label:"New Arrivals"}),o.$route.name==="project-manpower"?(q(),Y(S,{key:0,name:3,label:"Pipeline"})):W("",!0),a(S,{name:2,label:"Releases"})]),_:1},8,["modelValue"]))]),_:1}),a(ge,{modelValue:o.tab,"onUpdate:modelValue":t[2]||(t[2]=y=>o.tab=y),animated:""},{default:r(()=>[a(B,{name:0},{default:r(()=>[a(p)]),_:1}),a(B,{name:1},{default:r(()=>[a(n)]),_:1}),a(B,{name:3},{default:r(()=>[a(d)]),_:1}),a(B,{name:2},{default:r(()=>[a(f)]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var Wa=O(la,[["render",ra]]);export{Wa as default};
