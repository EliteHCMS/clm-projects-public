import{Q as Y,b as q,a as te}from"./QTabPanels.4c237201.js";import{Q as ae}from"./QTabs.24f10fed.js";import{Q as oe}from"./QToolbar.1b1a4d4d.js";import{Q as se}from"./QPage.55f2abc8.js";import{R as le,E as re}from"./roster.ad98835f.js";import{k as M,r as v,bN as J,c as R,_ as P,aZ as D,A as y,B as k,d as a,bi as l,cw as W,D as d,cx as A,cz as Z,bL as ne,w as ie,F as B,aY as E,an as N,au as I,ab as S,bI as L,bO as x,y as de}from"./index.c09bc2a4.js";import{Q as me}from"./QSelect.c52b58d3.js";import{u as G}from"./use-quasar.e0cdf7ef.js";import{u as H}from"./dataStore.22bea712.js";import{I as K}from"./quickbase.3c094681.js";import{dayjs as w}from"./dayjs.b00e5e8b.js";import{_ as X}from"./projectSelector.a7139fd3.js";import{Q as z,a as ce}from"./QTable.f30a16f5.js";import{Q as O}from"./QTr.19724e4f.js";import{Q as U}from"./QTd.5238d2a7.js";import{Q as ue}from"./QInnerLoading.23a4e323.js";import{e as pe}from"./export-file.eb604dd4.js";import"./use-panel.4e6ac68c.js";import"./touch.60582172.js";import"./selection.6b3a67ea.js";import"./QResizeObserver.44f1d5bc.js";import"./rtl.cf9bbe47.js";import"./QChip.9fb9a4d7.js";import"./QItemLabel.3dafae5d.js";import"./QMenu.f586b24f.js";import"./position-engine.a348f403.js";import"./localForage.ff6a6a7e.js";import"./_commonjsHelpers.a26ce4be.js";import"./useQuerySaver.e863619d.js";import"./index.7dbe61ef.js";import"./i18n.6b16a0d1.js";import"./api.8270b409.js";import"./QList.be97f1ab.js";import"./QMarkupTable.3ad2a985.js";import"./use-fullscreen.fb259c5e.js";const fe=M({props:{},components:{RosterTable:le,projectSelector:X},setup(t){const s=G(),V=K(),p=v(null),g=v(""),$=v(null),c=v(null),{getSelectedProject:o}=J(V),{getAssignments:r,fetchAllAssignments:f}=H(),F=R(()=>o.value?o.value[3]:null),Q=R(()=>{const i=w().subtract(14,"day");return r(F.value).sort((u,C)=>u[1].$d<C[1].$d?1:-1).filter(u=>!u[112]&&u.latest&&u[102]==="Active"&&w(u[1].$d).isSameOrAfter(i)&&w(u[1].$d).isSameOrBefore(w()))}),h=R(()=>{let i=[];return Q.value.forEach(m=>{m[75].toLowerCase().includes(g.value.toLowerCase())&&i.push(m)}),i=$.value?i.filter(m=>w(m[1].$d).tz("America/Chicago").format("MM/DD/YYYY")===w($.value).tz("America/Chicago").format("MM/DD/YYYY")):i,i=c.value?i.filter(m=>m[68]===c.value):i,i.sort((m,u)=>m.employee[22]>u.employee[22]?1:-1)}),j=R(()=>[...new Map(Q.value.map(i=>[i[68],i[68]])).values()]);async function T(){s.loading.show(),await f(),s.loading.hide()}return T(),{allAssignments:Q,projectFilter:p,search:g,startDateFilter:$,craftFilter:c,craftOptions:j,rows:h}}}),be={class:"row items-center"},ve={class:"col-12 col-md-3"},$e={class:"col-12 col-md-3 q-px-sm"},we={class:"col-12 col-md-3 q-px-sm"},ge={class:"col-12 col-md-3 q-px-sm"};function he(t,s,V,p,g,$){const c=D("projectSelector"),o=D("roster-table");return y(),k("div",null,[a(Z,{flat:""},{default:l(()=>[a(W,null,{default:l(()=>[d("div",be,[d("div",ve,[a(c,{dense:""})]),d("div",$e,[a(A,{dense:"",modelValue:t.search,"onUpdate:modelValue":s[0]||(s[0]=r=>t.search=r),label:"Search"},null,8,["modelValue"])]),d("div",we,[a(A,{dense:"",modelValue:t.startDateFilter,"onUpdate:modelValue":s[1]||(s[1]=r=>t.startDateFilter=r),label:"Arrival Date",type:"date","stack-label":""},null,8,["modelValue"])]),d("div",ge,[a(me,{dense:"",label:"Craft","transition-show":"flip-up","transition-hide":"flip-down",modelValue:t.craftFilter,"onUpdate:modelValue":s[2]||(s[2]=r=>t.craftFilter=r),options:t.craftOptions,"use-chips":""},null,8,["modelValue","options"])])])]),_:1})]),_:1}),a(o,{rows:t.rows},null,8,["rows"])])}var _e=P(fe,[["render",he]]);const ye=M({props:{},components:{projectSelector:X},setup(t){const s=G(),V=ne(),{capitalize:p}=de,g=K();v(null);const $=v(""),c=v(null),o=v(null),{getSelectedProject:r}=J(g),{getReleases:f,fetchReleases:F,fetchAllReleases:Q}=H(),h=R(()=>r.value?r.value[3]:null),j=[{name:1,label:"Name",align:"left",field:e=>e[66][22],format:(e,_)=>`${T(_[66])}`,sortable:!0,sortOrder:"ad"},{name:2,label:"Workday ID",align:"left",field:e=>e[66][378],format:e=>`${e}`,sortable:!0,sortOrder:"ad"},{name:3,label:"Payroll ID",align:"left",field:e=>e[66][213],format:e=>e===""?"not available":e,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e[67][20],format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:5,label:"Job #",align:"left",field:e=>e[67][105],format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:6,label:"Depature Date",align:"left",field:e=>e[36].$d,format:e=>`${w(e).format("MM/DD/YYYY")}`,sortable:!0}],T=e=>{const _=e[20]!==""?p(e[20].toLowerCase().trim()):"",b=e[22]!==""?p(e[22].toLowerCase().trim()):"",n=e[21]!==""?` ${p(e[21].toLowerCase().trim())}`:"",ee=e[23]!==""?` ${p(e[23])}`:"";return`${b}${ee}, ${_}${n}`};function i(e){V.push({name:"view-release",params:{release:e[3]}})}function m(e,_,b){let n=_!==void 0?_(e,b):e;return n=n==null?"":String(n),n=n.split('"').join('""'),`"${n}"`}function u(){const e=[j.value.map(b=>m(b.label))].concat(f(h.value).map(b=>j.value.map(n=>m(typeof n.field=="function"?n.field(b):b[n.field===void 0?n.name:n.field],n.format,b)).join(","))).join(`\r
`);pe(`${w().format("MM.DD.YYYY")} Releases-Export.csv`,e,"text/csv")!==!0&&s.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}const C=async e=>{h.value?await F({projectId:h.value}):await Q(),console.log(f(h.value))};return ie(r,()=>{C()}),C(),{projectFilterValue:h,search:$,dateFilter:c,craftFilter:o,loadData:C,getReleases:f,columns:j,viewRelease:i,exportAllReleases:u}}}),Ve={class:"row items-center"},De={class:"col-12 col-md-3"},Qe={class:"col-12 col-md-3 q-px-sm"},je={class:"col-12 col-md-3 q-px-sm"},Ce=d("div",{class:"col-12 col-md-3 q-px-sm"},null,-1),Re={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"},Se={class:"text-dark text-caption text-italic"};function ke(t,s,V,p,g,$){const c=D("projectSelector");return y(),k("div",null,[a(Z,{flat:""},{default:l(()=>[a(W,null,{default:l(()=>[d("div",Ve,[d("div",De,[a(c,{dense:""})]),d("div",Qe,[a(A,{dense:"",modelValue:t.search,"onUpdate:modelValue":s[0]||(s[0]=o=>t.search=o),label:"Search"},null,8,["modelValue"])]),d("div",je,[a(A,{dense:"",modelValue:t.dateFilter,"onUpdate:modelValue":s[1]||(s[1]=o=>t.dateFilter=o),label:"Departure Date",type:"date","stack-label":""},null,8,["modelValue"])]),Ce])]),_:1})]),_:1}),d("div",null,[a(ce,{title:"Recent Departures","title-class":"text-h5 text-primary",columns:t.columns,rows:t.getReleases(t.projectFilterValue),"row-key":o=>o[3],class:"q-pa-sm",pagination:{rowsPerPage:25},"table-header-class":"bg-dark text-white","no-data-label":"There are no recent departures",dense:""},{header:l(o=>[a(O,{class:"bg-dark text-white",props:o},{default:l(()=>[a(z,{"auto-width":""}),(y(!0),k(B,null,E(o.cols,r=>(y(),N(z,{key:r.name,props:o},{default:l(()=>[I(S(r.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:l(o=>[a(O,{props:o},{default:l(()=>[a(U,{"auto-width":""},{default:l(()=>[a(L,{class:"cursor-pointer",size:t.$q.screen.gt.sm?"sm":"xs",color:"info",round:"",dense:"",onClick:r=>t.viewRelease(o.row),name:o.expand?"visibility_off":"visibility"},null,8,["size","onClick","name"])]),_:2},1024),(y(!0),k(B,null,E(o.cols,r=>(y(),N(U,{key:r.name,props:o},{default:l(()=>[I(S(r.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"no-data":l(({message:o})=>[d("div",Re,[a(L,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),d("span",null,S(o),1)])]),"top-right":l(()=>[d("div",Se,"(Total: "+S(t.getReleases(t.projectFilterValue).length)+" departures)",1),a(x,{color:"secondary",flat:"","icon-right":"refresh",label:"Refresh",onClick:s[2]||(s[2]=o=>t.loadData(!0))}),a(x,{dense:t.$q.screen.lt.md,class:"q-ml-sm",color:"primary",label:"Download",onClick:t.exportAllReleases,disable:t.getReleases(t.projectFilterValue).length<1},null,8,["dense","onClick","disable"])]),loading:l(()=>[a(ue,{showing:"",color:"primary"})]),_:1},8,["columns","rows","row-key"])])])}var Ae=P(ye,[["render",ke]]);const Fe=M({name:"Employees",components:{RosterTab:re,NewArrivalsTab:_e,ReleasesTab:Ae},setup(){return{tab:v(0)}}}),Te={class:"q-pa-md"};function Ye(t,s,V,p,g,$){const c=D("roster-tab"),o=D("new-arrivals-tab"),r=D("releases-tab");return y(),N(se,{style:{"max-width":"100vw"}},{default:l(()=>[d("div",Te,[a(oe,{class:"bg-info text-white shadow-2 rounded-borders"},{default:l(()=>[a(ae,{modelValue:t.tab,"onUpdate:modelValue":s[0]||(s[0]=f=>t.tab=f),"bg-color":"none","indicator-color":"accent",align:"justify",dense:""},{default:l(()=>[a(Y,{name:0,label:t.$q.screen.gt.xs?"All Employees":"Employees"},null,8,["label"]),a(Y,{name:1,label:"New Arrivals"}),a(Y,{name:2,label:"Departures"})]),_:1},8,["modelValue"])]),_:1}),a(te,{modelValue:t.tab,"onUpdate:modelValue":s[1]||(s[1]=f=>t.tab=f),animated:""},{default:l(()=>[a(q,{name:0},{default:l(()=>[a(c)]),_:1}),a(q,{name:1},{default:l(()=>[a(o)]),_:1}),a(q,{name:2},{default:l(()=>[a(r)]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var vt=P(Fe,[["render",Ye]]);export{vt as default};
