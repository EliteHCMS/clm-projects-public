import{Q as S,b as U,a as x}from"./QTabPanels.c6a0ab04.js";import{Q as G}from"./QTabs.dae2502b.js";import{Q as Z}from"./QToolbar.85ee1da8.js";import{Q as J}from"./QPage.f2628afe.js";import{u as _}from"./use-quasar.ed3977b0.js";import{l as O,bM as j,r as P,c as w,_ as I,A as s,B as b,an as y,bi as d,d as p,bO as K,D as Y,ab as D,ao as C,F as N,aY as X,au as W,bI as ee,bL as te,aZ as ae,y as oe}from"./index.b48bafa3.js";import"./array.b59bb1b2.js";import{q as A}from"./quickbase.76c41fac.js";import{u as Q}from"./useQuerySaver.b8f46e72.js";import{dayjs as i}from"./dayjs.1b825f16.js";import{u as re}from"./index.6213d1ff.js";import{u as z}from"./dataStore.beef04c5.js";import{Q as H}from"./QRating.2f06f6a3.js";import{Q as le}from"./QInnerLoading.7b168168.js";import{Q as M,a as se}from"./QTable.a5b8e509.js";import{Q as B}from"./QTr.a2300b34.js";import{Q as L}from"./QTd.cb00d1da.js";import"./use-panel.96b32d19.js";import"./touch.60582172.js";import"./selection.880c234f.js";import"./QResizeObserver.1d221316.js";import"./rtl.cf9bbe47.js";import"./_commonjsHelpers.a26ce4be.js";import"./index.7dbe61ef.js";import"./localForage.81a16957.js";import"./i18n.469ad19f.js";import"./api.004b0e8a.js";import"./QList.fb685d10.js";import"./QMarkupTable.971575d1.js";import"./QSelect.b8f07e1a.js";import"./QChip.a60f92f6.js";import"./QItemLabel.6755a8b9.js";import"./QMenu.c9ecf4aa.js";import"./position-engine.859102af.js";import"./use-fullscreen.0ef5a5d5.js";const ne=O({props:{category:Object},components:{},setup(t){_();const u=j(),v=P(!0),k=P(!1),{getEmployee:g,updateViewedEmployees:V}=z(),o=w(()=>g(u.params.id)),r=w(()=>o.value&&o.value.history&&o.value.history[t.category.key]?o.value.history[t.category.key]:[]),m=async e=>{const{getter:a}=t.category;v.value=!0,await a(),v.value=!1},R=w(()=>{const{averageDuration:e,showDuration:a}=t.category;return a&&e?e(r.value):null}),E=w(()=>{const{completionRate:e,showCompletion:a}=t.category;return a&&e?e(r.value):null}),q=w(()=>{const{showRating:e,averageRating:a}=t.category;return e&&a?a(r.value):null}),F=e=>{const{viewer:a}=t.category;a&&a(e)};function f(e){}return m(),{props:t,loading:v,loadData:m,rows:r,initialPagination:P({rowsPerPage:100}),removeRow:f,addNew:k,duration:R,completion:E,rating:q,viewData:F}}}),ie={class:"text-dark text-italic text-caption"},ue={key:0},me={key:1},de={key:2},fe=Y("span",{class:"q-mr-sm"},"Rating:",-1),ce={key:0,class:"text-caption"};function ge(t,u,v,k,g,V){return s(),b("div",null,[t.addNew?C("",!0):(s(),y(se,{key:0,dense:"",columns:t.category.columns.filter(o=>!o.hide),rows:t.rows,"row-key":o=>o[3],"table-header-class":"bg-dark text-white",class:"sticky-header-table",pagination:t.initialPagination,loading:t.loading},{"top-right":d(()=>[p(K,{color:"secondary",flat:"","icon-right":"refresh",label:"Refresh",onClick:u[0]||(u[0]=o=>t.loadData(!0))})]),"top-left":d(()=>[Y("div",ie,[Y("div",null,"Total - "+D(t.rows.length)+" "+D(t.category.label),1),t.category.showDuration&&t.duration?(s(),b("div",ue,"Avg. Duration - "+D(t.duration.toFixed(2))+" days",1)):C("",!0),t.category.showCompletion&&t.completion?(s(),b("div",me,D(t.category.completionRateOverride?t.category.completionRateOverride:"Completion Rate")+" - "+D(t.completion)+"%",1)):C("",!0),t.category.showRating&&t.rating?(s(),b("div",de,[fe,p(H,{modelValue:t.rating,"onUpdate:modelValue":u[1]||(u[1]=o=>t.rating=o),max:"5",size:"xs",color:"accent",icon:"star_border","icon-selected":"star","icon-half":"star_half","no-dimming":"",readonly:""},null,8,["modelValue"])])):C("",!0)])]),loading:d(()=>[p(le,{showing:t.loading,label:"Loading...","label-class":"text-info"},null,8,["showing"])]),header:d(o=>[p(B,{class:"bg-dark text-white",props:o},{default:d(()=>[t.category.showView?(s(),y(M,{key:0,"auto-width":""})):C("",!0),(s(!0),b(N,null,X(o.cols,r=>(s(),y(M,{class:"text-left",key:r.name},{default:d(()=>[W(D(r.label),1)]),_:2},1024))),128))]),_:2},1032,["props"])]),body:d(o=>[p(B,{props:o},{default:d(()=>[t.category.showView?(s(),y(L,{key:0},{default:d(()=>[p(ee,{class:"cursor-pointer",size:t.$q.screen.gt.sm?"sm":"xs",color:"info",round:"",dense:"",onClick:r=>t.viewData(o.row),name:o.expand?"visibility_off":"visibility"},null,8,["size","onClick","name"])]),_:2},1024)):C("",!0),(s(!0),b(N,null,X(o.cols,r=>(s(),y(L,{key:r.name,props:o},{default:d(()=>[r.showRating?(s(),y(H,{key:1,modelValue:r.value,"onUpdate:modelValue":m=>r.value=m,max:"5",size:"xs",color:"accent",icon:"star_border","icon-selected":"star","icon-half":"star_half","no-dimming":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])):(s(),b("span",ce,D(r.value),1))]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["columns","rows","row-key","pagination","loading"]))])}var pe=I(ne,[["render",ge]]);const be=O({components:{HistoryPanel:pe},setup(){const t=P("offers");_();const u=j(),v=te(),{can:k}=re(),{capitalize:g}=oe,{getEmployee:V,updateViewedEmployees:o}=z(),r=w(()=>V(u.params.id)),m=w(()=>u.params.id?u.params.id:null),R=({start:f,end:e,status:a})=>a==="In Process"?"TBD":a==="DNC"?"N/A":a==="Complete"&&f&&e?`${i(e).diff(i(f),"day",!0).toFixed(2)} days`:"N/A",E=f=>f[145].$d?f[145].$d:f[1].$d,q=f=>{if(!f||!f[0]||!f[0][44])return"N/A";{const e=f[0][44];return`${g(e[20].toLowerCase())} ${g(e[22].toLowerCase())}`}},F=w(()=>[{label:"Offers",key:"offers",columns:[{name:0,label:"Date",align:"left",field:e=>e[1].$d,format:e=>`${i(e).format("MM/DD/YYYY")}`,sortable:!0,required:!0},{name:1,label:"Hiring Center",align:"left",field:e=>e[44],format:e=>`${e}`,sortable:!0},{name:2,label:"Project",align:"left",field:e=>e[56],format:e=>`${e}`,sortable:!0},{name:3,label:"Classification",align:"left",field:e=>e[57],format:e=>`${e}`,sortable:!0},{name:4,label:"Rate",align:"left",field:e=>e[22],format:e=>`$ ${e.toFixed(2)}`,sortable:!0,hide:!k("read","rates")},{name:5,label:"Status",align:"left",field:e=>e[21],format:e=>`${e}`,sortable:!0}],getter:async()=>{const{data:e}=await A.fetchFromHiringApp({fields:[Q({type:"offers",query:`{'25'.EX.'${m.value}'}AND{'21'.XEX.'Canceled'}AND{'29'.XEX.'In Process'}AND{'29'.XEX.'Canceled'}`})]});o({id:m.value,dataset:"history",nested:!0,subset:"offers",data:e})},showCompletion:!0,completionRateOverride:"Acceptance Rate",completionRate:e=>(e.filter(n=>n[21]==="Accepted").length/e.length*100).toFixed(2)},{label:"Processing",key:"inProcess",columns:[{name:0,label:"Date",align:"left",field:e=>e[1].$d,format:e=>`${i(e).format("MM/DD/YYYY")}`,sortable:!0,required:!0},{name:1,label:"Hiring Center",align:"left",field:e=>e[126],format:e=>`${e}`,sortable:!0},{name:2,label:"Project",align:"left",field:e=>e[109],format:e=>`${e}`,sortable:!0},{name:3,label:"Classification",align:"left",field:e=>e[106],format:e=>`${e}`,sortable:!0},{name:4,label:"Processing Time",align:"left",field:e=>e[237],format:(e,a)=>R({start:a[1].$d,end:e.$d,status:a[37]}),sortable:!1}],getter:async()=>{const{data:e}=await A.fetchFromHiringApp({fields:[Q({type:"rawInProcesses",query:`{'16'.EX.'${m.value}'}AND{'37'.XEX.'Canceled'}`})]});o({id:m.value,dataset:"history",nested:!0,subset:"inProcess",data:e})},showCompletion:!0,completionRate:e=>(e.filter(n=>n[37]==="Complete").length/e.length*100).toFixed(2),showDuration:!0,averageDuration:e=>{const a=e.filter(c=>c[37]==="Complete");let l=0;a.forEach(c=>{const h=c[1].$d,$=c[237].$d;h&&$&&(l+=i($).diff(i(h),"ms",!0))});const n=l/a.length;return i.duration(n).asDays()}},{label:"Deployments",key:"deployments",columns:[{name:0,label:"Date",align:"left",field:e=>e[1].$d,format:e=>`${i(e).format("MM/DD/YYYY")}`,sortable:!0,required:!0},{name:1,label:"Hiring Center",align:"left",field:e=>e[68],format:e=>`${e}`,sortable:!0},{name:2,label:"Project",align:"left",field:e=>e[148],format:e=>`${e}`,sortable:!0},{name:3,label:"Classification",align:"left",field:e=>e[45],format:e=>`${e}`,sortable:!0},{name:4,label:"Time to Arrival",align:"left",field:e=>e[22],format:(e,a)=>R({start:a[1].$d,end:e.$d,status:a[20]}),sortable:!1}],getter:async()=>{const{data:e}=await A.fetchFromHiringApp({fields:[Q({type:"rawDeployments",query:`{'21'.EX.'${m.value}'}AND{'20'.XEX.'Canceled'}`})]});o({id:m.value,dataset:"history",nested:!0,subset:"deployments",data:e})},showCompletion:!0,completionRate:e=>(e.filter(n=>n[20]==="Complete").length/e.length*100).toFixed(2),showDuration:!0,averageDuration:e=>{const a=e.filter(c=>c[20]==="Complete");let l=0;a.forEach(c=>{const h=c[1].$d,$=c[22].$d;h&&$&&(l+=i($).diff(i(h),"ms",!0))});const n=l/a.length;return i.duration(n).asDays()}},{label:"Assignments",key:"assignments",columns:[{name:0,label:"Date",align:"left",field:e=>e[1].$d,format:e=>`${i(e).format("MM/DD/YYYY")}`,sortable:!0,required:!0},{name:1,label:"Hiring Center",align:"left",field:e=>e[23],format:e=>`${e}`,sortable:!0},{name:2,label:"Project",align:"left",field:e=>e[94],format:e=>`${e}`,sortable:!0},{name:3,label:"Classification",align:"left",field:e=>e[20],format:e=>`${e}`,sortable:!0},{name:4,label:"Time On Site",align:"left",field:e=>e[22],format:(e,a)=>R({start:E(a),end:e.$d,status:a[21]}),sortable:!1}],getter:async()=>{const{data:e}=await A.fetchFromHiringApp({fields:[Q({type:"rawAssignments",query:`{'18'.EX.'${m.value}'}AND{'21'.XEX.'Canceled'}`})]});o({id:m.value,dataset:"history",nested:!0,subset:"assignments",data:e})},showCompletion:!0,completionRate:e=>(e.filter(n=>n[21]==="Complete").length/e.length*100).toFixed(2),showDuration:!0,averageDuration:e=>{const a=e.filter(c=>c[21]==="Complete");let l=0;a.forEach(c=>{const h=E(c),$=c[22].$d;h&&$&&(l+=i($).diff(i(h),"ms",!0))});const n=l/a.length;return i.duration(n).asDays()}},{label:"Releases",key:"releases",columns:[{name:0,label:"Date",align:"left",field:e=>e[36].$d,format:e=>`${i(e).format("MM/DD/YYYY")}`,sortable:!0,required:!0},{name:1,label:"Project",align:"left",field:e=>e[83],format:e=>`${e}`,sortable:!0},{name:2,label:"Classification",align:"left",field:e=>e[48],format:e=>`${e}`,sortable:!0},{name:3,label:"Rating",align:"left",field:e=>e[59],format:e=>e[0]&&e[0][37]?e[0][37]:"N/A",sortable:!1,showRating:!0},{name:4,label:"Disposition",align:"left",field:e=>e[43],format:e=>`${e}`,sortable:!0},{name:5,label:"Evaluated By",align:"left",field:e=>e[59],format:(e,a)=>e?`${q(e)}`:"N/A",sortable:!1},{name:6,label:"Reviewed By",align:"left",field:e=>e[75],format:(e,a)=>e?`${g(e[35].toLowerCase())} ${g(e[37].toLowerCase())}`:"N/A",sortable:!1},{name:7,label:"Processed By",align:"left",field:e=>e[76],format:(e,a)=>e?`${g(e[35].toLowerCase())} ${g(e[37].toLowerCase())}`:"N/A",sortable:!1}],getter:async()=>{const{data:e}=await A.fetchFromHiringApp({fields:[Q({type:"releases",query:`{'25'.EX.'${m.value}'}`})]});o({id:m.value,dataset:"history",nested:!0,subset:"releases",data:e})},showCompletion:!0,completionRateOverride:"Reassignment Rate",completionRate:e=>(e.filter(n=>n[43]==="Reassign").length/e.length*100).toFixed(2),showRating:!0,averageRating:e=>e.filter(l=>l[59]&&l[59][0]&&l[59][0][37]).reduce((l,n)=>l+n[59][0][37],0),showView:!0,viewer:e=>{v.push({name:"view-ee-release",params:{id:e[25],release:e[3]}})}}]);return{tab:t,employee:r,categories:F}}}),ye={class:"q-pa-sm"};function he(t,u,v,k,g,V){const o=ae("history-panel");return s(),y(J,{style:{"max-width":"100vw"}},{default:d(()=>[Y("div",ye,[p(Z,{class:"bg-info text-white shadow-2 rounded-borders"},{default:d(()=>[p(G,{dense:"",modelValue:t.tab,"onUpdate:modelValue":u[0]||(u[0]=r=>t.tab=r),align:"left","indicator-color":"accent"},{default:d(()=>[(s(!0),b(N,null,X(t.categories,r=>(s(),y(S,{key:r.key,name:r.key,label:`${r.label}`},null,8,["name","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),p(x,{modelValue:t.tab,"onUpdate:modelValue":u[1]||(u[1]=r=>t.tab=r),animated:""},{default:d(()=>[(s(!0),b(N,null,X(t.categories,r=>(s(),y(U,{key:r.key,name:r.key,class:"q-px-xs"},{default:d(()=>[p(o,{category:r},null,8,["category"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])])]),_:1})}var et=I(be,[["render",he]]);export{et as default};
