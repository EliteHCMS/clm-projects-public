import{Q as L,a as pe,b as M}from"./QTabPanels.a9bd5734.js";import{Q as me}from"./QTabs.56f7cfd1.js";import{Q as fe}from"./QToolbar.edd351f0.js";import{Q as ve}from"./QPage.b5c31638.js";import{E as be}from"./roster.f689af58.js";import{l as X,bU as H,r as S,bV as W,c as b,_ as O,b5 as R,A as _,B as q,d as a,br as n,cT as x,D as d,ar as B,cU as N,cS as G,bT as we,w as ge,F as ae,b4 as oe,aq as U,ax as z,ac as Y,bQ as le,bW as se,y as $e}from"./index.9dd15430.js";import{a as he}from"./QSelect.b771c9d2.js";import{u as J}from"./use-quasar.07d34863.js";import{u as K}from"./dataStore.fea3a289.js";import{I as Z,q as de}from"./app.727217bc.js";import{u as ee}from"./dataStore.c18945c8.js";import{dayjs as Q}from"./dayjs.2f8688b0.js";import{u as ce}from"./useQuerySaver.d29ff9ee.js";import{R as ye}from"./rosterTable.b589c850.js";import{_ as te}from"./projectSelector.19f1057e.js";import{Q as re,a as _e}from"./QTable.c682818c.js";import{Q as ne}from"./QTr.d584fc0e.js";import{Q as ie}from"./QTd.3a283869.js";import{Q as De}from"./QInnerLoading.f0f0848c.js";import{e as je}from"./export-file.dc78ba05.js";import{g as Ve}from"./quickbaseDataHelpers.e8880705.js";import{P as Pe}from"./projectPipeline.c2246d3f.js";import"./use-panel.e516c240.js";import"./touch.70a9dd44.js";import"./selection.a10d025f.js";import"./QResizeObserver.d243739e.js";import"./rtl.b51694b1.js";import"./QChip.96daacbb.js";import"./QMenu.c2bc0e92.js";import"./position-engine.c6215dd3.js";import"./localForage.eb119360.js";import"./_commonjsHelpers.a26ce4be.js";import"./api.4f913c74.js";import"./index.04bc0a32.js";import"./i18n.0b66fc90.js";import"./arrivalDate.ebdbd517.js";import"./QTooltip.6f5bc820.js";import"./QForm.685a561c.js";import"./vee-validate.esm.73d552b4.js";import"./array.f318e1cc.js";import"./QList.b7324a87.js";import"./QMarkupTable.a7c1e34c.js";import"./use-fullscreen.b7a8783b.js";const Ae=X({props:{},components:{RosterTable:ye,projectSelector:te},setup(t){const o=J(),j=H(),p=Z(),w=S(""),g=S(null),m=S(null),{getSelectedProject:l}=W(p),{getAssignments:i,fetchAllAssignments:V,fetchAssignments:P}=K(),{getManpowerData:T,setRosters:F}=ee(),D=b(()=>j.params.id?j.params.id:null),$=b(()=>l.value?l.value[3]:null),f=b(()=>{let r;const c=Q().subtract(14,"day");return D.value?r=(T({dataset:"rosters",id:D.value})||[]).sort((s,h)=>s[1].$d<h[1].$d?1:-1):r=i($.value).sort((v,s)=>v[1].$d<s[1].$d?1:-1),r.filter(v=>!v[112]&&v.latest&&v[102]==="Active"&&Q(v[1].$d).isSameOrAfter(c)&&Q(v[1].$d).isSameOrBefore(Q()))}),C=b(()=>{let r=[];return f.value.forEach(c=>{c[75].toLowerCase().includes(w.value.toLowerCase())&&r.push(c)}),r=g.value?r.filter(c=>Q(c[1].$d).tz("America/Chicago").format("MM/DD/YYYY")===Q(g.value).tz("America/Chicago").format("MM/DD/YYYY")):r,r=m.value?r.filter(c=>c[68]===m.value):r,r.sort((c,v)=>c.employee[22]>v.employee[22]?1:-1)}),k=b(()=>[...new Map(f.value.map(r=>[r[68],r[68]])).values()]),E=async r=>{o.loading.show(),D.value?(r||!T({dataset:"rosters",id:D.value}))&&await I():$.value?await P({projectId:$.value,refresh:r}):await V({refresh:r}),o.loading.hide()},I=async()=>{const r=`{'74'.EX.'${D.value}'}AND{'21'.EX.'In Process'}AND{'102'.EX.'Active'}`,{data:c}=await de.fetchFromProjectsApp({fields:[ce({type:"assignments",query:r})]});F({id:D.value,data:c})};return{allAssignments:f,search:w,startDateFilter:g,craftFilter:m,craftOptions:k,rows:C,loadData:E}}}),Re={class:"row items-center"},Se={key:0,class:"col-12 col-md-3"},Ce={class:"col-12 col-md-3 q-px-sm"},Qe={class:"col-12 col-md-3 q-px-sm"},qe={class:"col-12 col-md-3 q-px-sm"};function ke(t,o,j,p,w,g){const m=R("projectSelector"),l=R("roster-table");return _(),q("div",null,[a(G,{flat:""},{default:n(()=>[a(x,null,{default:n(()=>[d("div",Re,[t.$route.params.id?B("",!0):(_(),q("div",Se,[a(m,{dense:""})])),d("div",Ce,[a(N,{dense:"",modelValue:t.search,"onUpdate:modelValue":o[0]||(o[0]=i=>t.search=i),label:"Search"},null,8,["modelValue"])]),d("div",Qe,[a(N,{dense:"",modelValue:t.startDateFilter,"onUpdate:modelValue":o[1]||(o[1]=i=>t.startDateFilter=i),label:"Arrival Date",type:"date","stack-label":""},null,8,["modelValue"])]),d("div",qe,[a(he,{dense:"",label:"Craft","transition-show":"flip-up","transition-hide":"flip-down",modelValue:t.craftFilter,"onUpdate:modelValue":o[2]||(o[2]=i=>t.craftFilter=i),options:t.craftOptions,"use-chips":""},null,8,["modelValue","options"])])])]),_:1})]),_:1}),a(l,{rows:t.rows,onRefreshData:o[3]||(o[3]=i=>t.loadData(!0)),title:"New Arrivals"},null,8,["rows"])])}var Te=O(Ae,[["render",ke]]);const Fe=X({props:{},components:{projectSelector:te},setup(t){const o=J(),j=we(),p=H(),{capitalize:w}=$e,g=Z(),m=S(""),l=S(null),i=S(null),{getSelectedProject:V}=W(g),{getReleases:P,fetchReleases:T,fetchAllReleases:F}=K(),{getManpowerData:D,setDepartures:$}=ee(),f=b(()=>p.params.id?p.params.id:null),C=b(()=>V.value?V.value[3]:null),k=[{name:1,label:"Name",align:"left",field:e=>e[49],format:e=>`${E(e)}`,sortable:!0,sortOrder:"ad"},{name:7,label:"Phone #",align:"left",field:e=>e[56],sortable:!1},{name:2,label:"Workday ID",align:"left",field:e=>e[50],format:e=>`${e}`,sortable:!0,sortOrder:"ad"},{name:3,label:"Payroll ID",align:"left",field:e=>e[51],format:e=>e===""?"not available":e,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e[82],format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:5,label:"Job #",align:"left",field:e=>e[81],format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:6,label:"Depature Date",align:"left",field:e=>e[36].$d,format:e=>`${Q(e).format("MM/DD/YYYY")}`,sortable:!0}],E=e=>{const A=e.split(" ");let y="";return A.forEach((u,ue)=>{y+=ue>0?` ${w(u.toLowerCase())}`:w(u.toLowerCase())}),y};function I(e){j.push({name:"view-release",params:{release:e[3]}})}function r(e,A,y){let u=A!==void 0?A(e,y):e;return u=u==null?"":String(u),u=u.split('"').join('""'),`"${u}"`}function c(){const e=[k.value.map(y=>r(y.label))].concat(v.value.map(y=>k.value.map(u=>r(typeof u.field=="function"?u.field(y):y[u.field===void 0?u.name:u.field],u.format,y)).join(","))).join(`\r
`);je(`${Q().format("MM.DD.YYYY")} Releases-Export.csv`,e,"text/csv")!==!0&&o.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}const v=b(()=>{let e;return f.value?e=D({dataset:"departures",id:f.value})||[]:e=P(C.value).sort((A,y)=>A[1].$d<y[1].$d?1:-1),e}),s=async e=>{o.loading.show(),f.value?(e||!D({dataset:"departures",id:f.value}))&&await h():C.value?await T({projectId:C.value,refresh:e}):await F({refresh:e}),o.loading.hide()},h=async()=>{const e=`{'41'.EX.'${f.value}'}AND{'42'.XEX.'Complete'}AND({'36'.OAF.'today'}OR{'36'.IR.'last 30 d'}OR{'1'.IR.'last 30 d'})`,{data:A}=await de.fetchFromHiringApp({fields:[ce({type:"releases",query:e})]});$({id:f.value,data:A})};return ge(V,()=>{s()}),s(!0),{projectFilterValue:C,search:m,dateFilter:l,craftFilter:i,loadData:s,getReleases:P,columns:k,viewRelease:I,exportAllReleases:c,rows:v}}}),Ee={class:"row items-center"},Ie={key:0,class:"col-12 col-md-3"},Ye={class:"col-12 col-md-3 q-px-sm"},Ne={class:"col-12 col-md-3 q-px-sm"},Le=d("div",{class:"col-12 col-md-3 q-px-sm"},null,-1),Me={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"},xe={class:"text-dark text-caption text-italic"};function Ue(t,o,j,p,w,g){const m=R("projectSelector");return _(),q("div",null,[a(G,{flat:""},{default:n(()=>[a(x,null,{default:n(()=>[d("div",Ee,[t.$route.params.id?B("",!0):(_(),q("div",Ie,[a(m,{dense:""})])),d("div",Ye,[a(N,{dense:"",modelValue:t.search,"onUpdate:modelValue":o[0]||(o[0]=l=>t.search=l),label:"Search"},null,8,["modelValue"])]),d("div",Ne,[a(N,{dense:"",modelValue:t.dateFilter,"onUpdate:modelValue":o[1]||(o[1]=l=>t.dateFilter=l),label:"Departure Date",type:"date","stack-label":""},null,8,["modelValue"])]),Le])]),_:1})]),_:1}),d("div",null,[a(_e,{title:"Recent Releases","title-class":"text-h5 text-primary",columns:t.columns,rows:t.rows,"row-key":l=>l[3],class:"q-pa-sm",pagination:{rowsPerPage:25},"table-header-class":"bg-dark text-white","no-data-label":"There are no recent releases",dense:""},{header:n(l=>[a(ne,{class:"bg-dark text-white",props:l},{default:n(()=>[a(re,{"auto-width":""}),(_(!0),q(ae,null,oe(l.cols,i=>(_(),U(re,{key:i.name,props:l},{default:n(()=>[z(Y(i.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:n(l=>[a(ne,{props:l},{default:n(()=>[a(ie,{"auto-width":""},{default:n(()=>[a(le,{class:"cursor-pointer",size:t.$q.screen.gt.sm?"sm":"xs",color:"info",round:"",dense:"",onClick:i=>t.viewRelease(l.row),name:l.expand?"visibility_off":"visibility"},null,8,["size","onClick","name"])]),_:2},1024),(_(!0),q(ae,null,oe(l.cols,i=>(_(),U(ie,{key:i.name,props:l},{default:n(()=>[z(Y(i.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"no-data":n(({message:l})=>[d("div",Me,[a(le,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),d("span",null,Y(l),1)])]),"top-right":n(()=>[d("div",xe,"(Total: "+Y(t.getReleases(t.projectFilterValue).length)+" departures)",1),a(se,{color:"secondary",flat:"","icon-right":"refresh",label:"Refresh",onClick:o[2]||(o[2]=l=>t.loadData(!0))}),a(se,{dense:t.$q.screen.lt.md,class:"q-ml-sm",color:"primary",label:"Download",onClick:t.exportAllReleases,disable:t.getReleases(t.projectFilterValue).length<1},null,8,["dense","onClick","disable"])]),loading:n(()=>[a(De,{showing:"",color:"primary"})]),_:1},8,["columns","rows","row-key"])])])}var Oe=O(Fe,[["render",Ue]]);const Be={name:"Pipeline",components:{ProjectPipelineTable:Pe,projectSelector:te},setup(){const t=J(),o=H(),j=Z(),p=S(null),w=S(""),{getSelectedProject:g}=W(j),{fetchAllDeployments:m,fetchAllInProcess:l,fetchAllPending:i,getDeployments:V,getInProcess:P,getPending:T}=K(),{getManpowerData:F,setPipelines:D}=ee(),$=b(()=>o.params.id?o.params.id:null),f=b(()=>g.value?g.value[3]:null),C=b(()=>V(f.value).filter(s=>s[20]==="Complete")),k=b(()=>{const s=[];return V(f.value).forEach(h=>{h[31].toLowerCase().includes(w.value.toLowerCase())&&s.push(h)}),s}),E=b(()=>{const s=[];return T(f.value).forEach(h=>{h[25].toLowerCase().includes(w.value.toLowerCase())&&s.push(h)}),s}),I=b(()=>{const s=[];return P(f.value).forEach(h=>{h[39].toLowerCase().includes(w.value.toLowerCase())&&s.push(h)}),s}),r=b(()=>{let s;return $.value?s=F({dataset:"pipelines",id:$.value})||[]:s=I.value.concat(E.value.concat(k.value)),s}),c=async s=>{t.loading.show(),$.value?(s||!F({dataset:"pipelines",id:$.value}))&&await v():(await m(s),await l(s),await i(s)),t.loading.hide()},v=async()=>{const s=await Ve($.value);D({id:$.value,data:s})};return c(),{projectFilter:p,arrived:C,allPipeline:r,search:w,loadData:c}}},ze={class:"text-h5 text-dark"},Xe={class:"text-body2 text-italic q-ml-sm"},He=d("div",{class:"text-subtitle2 text-accent"},"The following people are currently in process or deployed for your job site(s).",-1),We={class:"row items-center"},Ge={key:0,class:"col-12 col-md-3 q-px-sm"},Je={class:"col-12 col-md-3 q-px-sm"};function Ke(t,o,j,p,w,g){const m=R("projectSelector"),l=R("project-pipeline-table");return _(),q("div",null,[a(G,{flat:""},{default:n(()=>[a(x,{class:"q-pb-none"},{default:n(()=>[d("div",ze,[z(" Staffing Pipeline "),d("span",Xe,"("+Y(p.allPipeline.length)+" total)",1)]),He]),_:1}),a(x,null,{default:n(()=>[d("div",We,[t.$route.params.id?B("",!0):(_(),q("div",Ge,[a(m,{dense:""})])),d("div",Je,[a(N,{dense:"",modelValue:p.search,"onUpdate:modelValue":o[0]||(o[0]=i=>p.search=i),label:"Search"},null,8,["modelValue"])])])]),_:1})]),_:1}),a(l,{rows:p.allPipeline,onRefresh:o[1]||(o[1]=i=>p.loadData(!0))},null,8,["rows"])])}var Ze=O(Be,[["render",Ke]]);const et=X({name:"Employees",components:{RosterTab:be,NewArrivalsTab:Te,ReleasesTab:Oe,PipelineTab:Ze},setup(){return{tab:S(0)}}}),tt={class:"q-pa-md"};function at(t,o,j,p,w,g){const m=R("roster-tab"),l=R("new-arrivals-tab"),i=R("pipeline-tab"),V=R("releases-tab");return _(),U(ve,{style:{"max-width":"100vw"}},{default:n(()=>[d("div",tt,[a(fe,{class:"bg-info text-white shadow-2 rounded-borders"},{default:n(()=>[a(me,{modelValue:t.tab,"onUpdate:modelValue":o[0]||(o[0]=P=>t.tab=P),"bg-color":"none","indicator-color":"accent",align:"justify",dense:""},{default:n(()=>[a(L,{name:0,label:t.$q.screen.gt.xs?"All Employees":"Employees"},null,8,["label"]),a(L,{name:1,label:"New Arrivals"}),t.$route.name==="project-manpower"?(_(),U(L,{key:0,name:3,label:"Pipeline"})):B("",!0),a(L,{name:2,label:"Releases"})]),_:1},8,["modelValue"])]),_:1}),a(pe,{modelValue:t.tab,"onUpdate:modelValue":o[1]||(o[1]=P=>t.tab=P),animated:""},{default:n(()=>[a(M,{name:0},{default:n(()=>[a(m)]),_:1}),a(M,{name:1},{default:n(()=>[a(l)]),_:1}),a(M,{name:3},{default:n(()=>[a(i)]),_:1}),a(M,{name:2},{default:n(()=>[a(V)]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var zt=O(et,[["render",at]]);export{zt as default};
