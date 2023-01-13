import{Q as S,b as U,a as x}from"./QTabPanels.0df2a8c9.js";import{Q as G}from"./QTabs.26b904e3.js";import{Q as Z}from"./QToolbar.cff7de89.js";import{Q as J}from"./QPage.987dae48.js";import{u as _}from"./use-quasar.f362f467.js";import{l as O,bM as j,r as Y,c as v,_ as I,A as s,B as p,an as b,bi as u,d as y,bO as K,D as V,ab as w,ao as C,F as N,aY as q,au as W,bI as ee,bL as te,aZ as ae,y as oe}from"./index.0dddbf49.js";import"./array.2a69a999.js";import{q as A}from"./quickbase.c1f7b402.js";import{u as Q}from"./useQuerySaver.bb1ebf35.js";import{dayjs as i}from"./dayjs.b650d6a4.js";import{u as re}from"./index.d8bc6e7d.js";import{u as z}from"./dataStore.aa435c1a.js";import{Q as H}from"./QRating.9e63dda6.js";import{Q as le}from"./QInnerLoading.220f2c4b.js";import{Q as M,a as se}from"./QTable.8a4ac7c4.js";import{Q as B}from"./QTr.0744195d.js";import{Q as L}from"./QTd.61b760e4.js";import"./use-panel.3cd36c56.js";import"./touch.60582172.js";import"./selection.1ecd6506.js";import"./QResizeObserver.79867edd.js";import"./rtl.cf9bbe47.js";import"./_commonjsHelpers.a26ce4be.js";import"./index.7dbe61ef.js";import"./localForage.5c039857.js";import"./i18n.1d81d753.js";import"./api.5ba01119.js";import"./QList.c6e274bc.js";import"./QMarkupTable.b40a30ae.js";import"./QSelect.af0bdc06.js";import"./QChip.40f77c99.js";import"./QItemLabel.8751cc33.js";import"./QMenu.bcbd89cc.js";import"./position-engine.67a5d571.js";import"./use-fullscreen.4b93e4f9.js";const ne=O({props:{category:Object},components:{},setup(t){_();const m=j(),D=Y(!0),k=Y(!1),{getEmployee:g,updateViewedEmployees:E}=z(),o=v(()=>g(m.params.id)),r=v(()=>(o.value&&o.value.history&&o.value.history[t.category.key]?o.value.history[t.category.key]:[]).sort((a,l)=>a[1].$d>l[1].$d?-1:1)),d=async e=>{const{getter:a}=t.category;D.value=!0,await a(),D.value=!1},R=v(()=>{const{averageDuration:e,showDuration:a}=t.category;return a&&e?e(r.value):null}),P=v(()=>{const{completionRate:e,showCompletion:a}=t.category;return a&&e?e(r.value):null}),X=v(()=>{const{showRating:e,averageRating:a}=t.category;return e&&a?a(r.value):null}),T=e=>{const{viewer:a}=t.category;a&&a(e)};function f(e){}return d(),{props:t,loading:D,loadData:d,rows:r,initialPagination:Y({rowsPerPage:100}),removeRow:f,addNew:k,duration:R,completion:P,rating:X,viewData:T}}}),ie={key:0,class:"text-dark text-italic text-caption"},ue={key:0},me={key:1},de={key:2},fe=V("span",{class:"q-mr-sm"},"Rating:",-1),ce={key:0,class:"text-caption"},ge={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"};function pe(t,m,D,k,g,E){return s(),p("div",null,[t.addNew?C("",!0):(s(),b(se,{key:0,dense:"",columns:t.category.columns.filter(o=>!o.hide),rows:t.rows,"row-key":o=>o[3],"table-header-class":"bg-dark text-white",class:"sticky-header-table",pagination:t.initialPagination,loading:t.loading,"no-data-label":`This employee has no ${t.category.label}.`},{"top-right":u(()=>[y(K,{color:"secondary",flat:"","icon-right":"refresh",label:"Refresh",onClick:m[0]||(m[0]=o=>t.loadData(!0))})]),"top-left":u(()=>[t.rows.length>0?(s(),p("div",ie,[V("div",null,"Total - "+w(t.rows.length)+" "+w(t.category.label),1),t.category.showDuration&&t.duration?(s(),p("div",ue,"Avg. Duration - "+w(t.duration.toFixed(2))+" days",1)):C("",!0),t.category.showCompletion&&t.completion?(s(),p("div",me,w(t.category.completionRateOverride?t.category.completionRateOverride:"Completion Rate")+" - "+w(t.completion)+"%",1)):C("",!0),t.category.showRating&&t.rating?(s(),p("div",de,[fe,y(H,{modelValue:t.rating,"onUpdate:modelValue":m[1]||(m[1]=o=>t.rating=o),max:"5",size:"xs",color:"accent",icon:"star_border","icon-selected":"star","icon-half":"star_half","no-dimming":"",readonly:""},null,8,["modelValue"])])):C("",!0)])):C("",!0)]),loading:u(()=>[y(le,{showing:t.loading,label:"Loading...","label-class":"text-info"},null,8,["showing"])]),header:u(o=>[y(B,{class:"bg-dark text-white",props:o},{default:u(()=>[t.category.showView?(s(),b(M,{key:0,"auto-width":""})):C("",!0),(s(!0),p(N,null,q(o.cols,r=>(s(),b(M,{class:"text-left",key:r.name},{default:u(()=>[W(w(r.label),1)]),_:2},1024))),128))]),_:2},1032,["props"])]),body:u(o=>[y(B,{props:o},{default:u(()=>[t.category.showView?(s(),b(L,{key:0},{default:u(()=>[y(ee,{class:"cursor-pointer",size:t.$q.screen.gt.sm?"sm":"xs",color:"info",round:"",dense:"",onClick:r=>t.viewData(o.row),name:o.expand?"visibility_off":"visibility"},null,8,["size","onClick","name"])]),_:2},1024)):C("",!0),(s(!0),p(N,null,q(o.cols,r=>(s(),b(L,{key:r.name,props:o},{default:u(()=>[r.showRating?(s(),b(H,{key:1,modelValue:r.value,"onUpdate:modelValue":d=>r.value=d,max:"5",size:"xs",color:"accent",icon:"star_border","icon-selected":"star","icon-half":"star_half","no-dimming":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])):(s(),p("span",ce,w(r.value),1))]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"no-data":u(({message:o})=>[V("div",ge,[V("span",null,w(o),1)])]),_:1},8,["columns","rows","row-key","pagination","loading","no-data-label"]))])}var ye=I(ne,[["render",pe]]);const be=O({components:{HistoryPanel:ye},setup(){const t=Y("offers");_();const m=j(),D=te(),{can:k}=re(),{capitalize:g}=oe,{getEmployee:E,updateViewedEmployees:o}=z(),r=v(()=>E(m.params.id)),d=v(()=>m.params.id?m.params.id:null),R=({start:f,end:e,status:a})=>a==="In Process"?"TBD":a==="DNC"?"N/A":a==="Complete"&&f&&e?`${i(e).diff(i(f),"day",!0).toFixed(2)} days`:"N/A",P=f=>f[145].$d?f[145].$d:f[1].$d,X=f=>{if(!f||!f[0]||!f[0][44])return"N/A";{const e=f[0][44];return`${g(e[20].toLowerCase())} ${g(e[22].toLowerCase())}`}},T=v(()=>[{label:"Offers",key:"offers",columns:[{name:0,label:"Date",align:"left",field:e=>e[1].$d,format:e=>`${i(e).format("MM/DD/YYYY")}`,sortable:!0,required:!0},{name:1,label:"Hiring Center",align:"left",field:e=>e[44],format:e=>`${e}`,sortable:!0},{name:2,label:"Project",align:"left",field:e=>e[56],format:e=>`${e}`,sortable:!0},{name:3,label:"Classification",align:"left",field:e=>e[57],format:e=>`${e}`,sortable:!0},{name:4,label:"Rate",align:"left",field:e=>e[22],format:e=>`$ ${e.toFixed(2)}`,sortable:!0,hide:!k("read","rates")},{name:5,label:"Status",align:"left",field:e=>e[21],format:e=>`${e}`,sortable:!0}],getter:async()=>{const{data:e}=await A.fetchFromHiringApp({fields:[Q({type:"offers",query:`{'25'.EX.'${d.value}'}AND{'21'.XEX.'Canceled'}AND{'29'.XEX.'In Process'}AND{'29'.XEX.'Canceled'}`})]});o({id:d.value,dataset:"history",nested:!0,subset:"offers",data:e})},showCompletion:!0,completionRateOverride:"Acceptance Rate",completionRate:e=>(e.filter(n=>n[21]==="Accepted").length/e.length*100).toFixed(2)},{label:"Processing",key:"inProcess",columns:[{name:0,label:"Date",align:"left",field:e=>e[1].$d,format:e=>`${i(e).format("MM/DD/YYYY")}`,sortable:!0,required:!0},{name:1,label:"Hiring Center",align:"left",field:e=>e[126],format:e=>`${e}`,sortable:!0},{name:2,label:"Project",align:"left",field:e=>e[109],format:e=>`${e}`,sortable:!0},{name:3,label:"Classification",align:"left",field:e=>e[106],format:e=>`${e}`,sortable:!0},{name:4,label:"Processing Time",align:"left",field:e=>e[237],format:(e,a)=>R({start:a[1].$d,end:e.$d,status:a[37]}),sortable:!1}],getter:async()=>{const{data:e}=await A.fetchFromHiringApp({fields:[Q({type:"rawInProcesses",query:`{'16'.EX.'${d.value}'}AND{'37'.XEX.'Canceled'}`})]});o({id:d.value,dataset:"history",nested:!0,subset:"inProcess",data:e})},showCompletion:!0,completionRate:e=>(e.filter(n=>n[37]==="Complete").length/e.length*100).toFixed(2),showDuration:!0,averageDuration:e=>{const a=e.filter(c=>c[37]==="Complete");let l=0;a.forEach(c=>{const h=c[1].$d,$=c[237].$d;h&&$&&(l+=i($).diff(i(h),"ms",!0))});const n=l/a.length;return i.duration(n).asDays()}},{label:"Deployments",key:"deployments",columns:[{name:0,label:"Date",align:"left",field:e=>e[1].$d,format:e=>`${i(e).format("MM/DD/YYYY")}`,sortable:!0,required:!0},{name:1,label:"Hiring Center",align:"left",field:e=>e[68],format:e=>`${e}`,sortable:!0},{name:2,label:"Project",align:"left",field:e=>e[148],format:e=>`${e}`,sortable:!0},{name:3,label:"Classification",align:"left",field:e=>e[45],format:e=>`${e}`,sortable:!0},{name:4,label:"Time to Arrival",align:"left",field:e=>e[22],format:(e,a)=>R({start:a[1].$d,end:e.$d,status:a[20]}),sortable:!1}],getter:async()=>{const{data:e}=await A.fetchFromHiringApp({fields:[Q({type:"rawDeployments",query:`{'21'.EX.'${d.value}'}AND{'20'.XEX.'Canceled'}`})]});o({id:d.value,dataset:"history",nested:!0,subset:"deployments",data:e})},showCompletion:!0,completionRate:e=>(e.filter(n=>n[20]==="Complete").length/e.length*100).toFixed(2),showDuration:!0,averageDuration:e=>{const a=e.filter(c=>c[20]==="Complete");let l=0;a.forEach(c=>{const h=c[1].$d,$=c[22].$d;h&&$&&(l+=i($).diff(i(h),"ms",!0))});const n=l/a.length;return i.duration(n).asDays()}},{label:"Assignments",key:"assignments",columns:[{name:0,label:"Date",align:"left",field:e=>e[1].$d,format:e=>`${i(e).format("MM/DD/YYYY")}`,sortable:!0,required:!0},{name:1,label:"Hiring Center",align:"left",field:e=>e[23],format:e=>`${e}`,sortable:!0},{name:2,label:"Project",align:"left",field:e=>e[94],format:e=>`${e}`,sortable:!0},{name:3,label:"Classification",align:"left",field:e=>e[20],format:e=>`${e}`,sortable:!0},{name:4,label:"Time On Site",align:"left",field:e=>e[22],format:(e,a)=>R({start:P(a),end:e.$d,status:a[21]}),sortable:!1}],getter:async()=>{const{data:e}=await A.fetchFromHiringApp({fields:[Q({type:"rawAssignments",query:`{'18'.EX.'${d.value}'}AND{'21'.XEX.'Canceled'}`})]});o({id:d.value,dataset:"history",nested:!0,subset:"assignments",data:e})},showCompletion:!0,completionRate:e=>(e.filter(n=>n[21]==="Complete").length/e.length*100).toFixed(2),showDuration:!0,averageDuration:e=>{const a=e.filter(c=>c[21]==="Complete");let l=0;a.forEach(c=>{const h=P(c),$=c[22].$d;h&&$&&(l+=i($).diff(i(h),"ms",!0))});const n=l/a.length;return i.duration(n).asDays()}},{label:"Releases",key:"releases",columns:[{name:0,label:"Date",align:"left",field:e=>e[36].$d,format:e=>`${i(e).format("MM/DD/YYYY")}`,sortable:!0,required:!0},{name:1,label:"Project",align:"left",field:e=>e[83],format:e=>`${e}`,sortable:!0},{name:2,label:"Classification",align:"left",field:e=>e[48],format:e=>`${e}`,sortable:!0},{name:3,label:"Rating",align:"left",field:e=>e[59],format:e=>e[0]&&e[0][37]?e[0][37]:"N/A",sortable:!1,showRating:!0},{name:4,label:"Disposition",align:"left",field:e=>e[43],format:e=>`${e}`,sortable:!0},{name:5,label:"Evaluated By",align:"left",field:e=>e[59],format:(e,a)=>e?`${X(e)}`:"N/A",sortable:!1},{name:6,label:"Reviewed By",align:"left",field:e=>e[75],format:(e,a)=>e?`${g(e[35].toLowerCase())} ${g(e[37].toLowerCase())}`:"N/A",sortable:!1},{name:7,label:"Processed By",align:"left",field:e=>e[76],format:(e,a)=>e?`${g(e[35].toLowerCase())} ${g(e[37].toLowerCase())}`:"N/A",sortable:!1}],getter:async()=>{const{data:e}=await A.fetchFromHiringApp({fields:[Q({type:"releases",query:`{'25'.EX.'${d.value}'}`})]});o({id:d.value,dataset:"history",nested:!0,subset:"releases",data:e})},showCompletion:!0,completionRateOverride:"Reassignment Rate",completionRate:e=>(e.filter(n=>n[43]==="Reassign").length/e.length*100).toFixed(2),showRating:!0,averageRating:e=>e.filter(l=>l[59]&&l[59][0]&&l[59][0][37]).reduce((l,n)=>l+n[59][0][37],0),showView:!0,viewer:e=>{D.push({name:"view-ee-release",params:{id:e[25],release:e[3]}})}}]);return{tab:t,employee:r,categories:T}}}),he={class:"q-pa-sm"};function $e(t,m,D,k,g,E){const o=ae("history-panel");return s(),b(J,{style:{"max-width":"100vw"}},{default:u(()=>[V("div",he,[y(Z,{class:"bg-info text-white shadow-2 rounded-borders"},{default:u(()=>[y(G,{dense:"",modelValue:t.tab,"onUpdate:modelValue":m[0]||(m[0]=r=>t.tab=r),align:"left","indicator-color":"accent"},{default:u(()=>[(s(!0),p(N,null,q(t.categories,r=>(s(),b(S,{key:r.key,name:r.key,label:`${r.label}`},null,8,["name","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),y(x,{modelValue:t.tab,"onUpdate:modelValue":m[1]||(m[1]=r=>t.tab=r),animated:""},{default:u(()=>[(s(!0),p(N,null,q(t.categories,r=>(s(),b(U,{key:r.key,name:r.key,class:"q-px-xs"},{default:u(()=>[y(o,{category:r},null,8,["category"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])])]),_:1})}var tt=I(be,[["render",$e]]);export{tt as default};
