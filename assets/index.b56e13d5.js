import{l as U,r as _,c as b,_ as N,aZ as $,A as u,B as x,d as s,bi as i,au as y,F as j,aY as S,an as g,ab as D,db as E,D as c,bI as W,bN as X,cw as T,cx as V,cz as J}from"./index.b48bafa3.js";import{Q as H}from"./QSelect.b8f07e1a.js";import{Q as Z}from"./QPage.f2628afe.js";import{u as P}from"./use-quasar.ed3977b0.js";import{H as Y,I as G,q as w}from"./quickbase.76c41fac.js";import{dayjs as h}from"./dayjs.1b825f16.js";import{u as K}from"./dataStore.708e0494.js";import{Q as A,a as ee}from"./QTable.a5b8e509.js";import{Q as I}from"./QTr.a2300b34.js";import{Q as C}from"./QTd.cb00d1da.js";import{Q as te}from"./QInnerLoading.7b168168.js";import{A as ae}from"./arrivalDate.cceb9cd2.js";import{_ as oe}from"./projectSelector.e9985509.js";import"./QChip.a60f92f6.js";import"./QItemLabel.6755a8b9.js";import"./QMenu.c9ecf4aa.js";import"./position-engine.859102af.js";import"./selection.880c234f.js";import"./rtl.cf9bbe47.js";import"./_commonjsHelpers.a26ce4be.js";import"./index.7dbe61ef.js";import"./localForage.81a16957.js";import"./i18n.469ad19f.js";import"./api.004b0e8a.js";import"./useQuerySaver.b8f46e72.js";import"./QList.fb685d10.js";import"./QMarkupTable.971575d1.js";import"./use-fullscreen.0ef5a5d5.js";import"./QTooltip.b1ab7884.js";import"./QForm.fc9a358b.js";import"./vee-validate.esm.caf1489b.js";import"./array.b59bb1b2.js";const le=U({emits:["arrivalMarked"],name:"Arrivals Table",components:{ArrivalDate:ae},props:{rows:Array,selected:Array},setup(d,{emit:m}){const f=P(),o=_(!1);return{columns:b(()=>f.screen.gt.sm?[{name:1,label:"Name",align:"left",field:e=>e[31],format:e=>`${e}`,sortable:!0},{name:2,label:"Workday ID",align:"left",field:e=>e[152],format:(e,a)=>a[20]==="In Process"?"W---------":e,sortable:!0},{name:3,label:"Project",align:"left",field:e=>e[171],format:e=>`${e}`,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e[45],format:e=>`${e}`,sortable:!0},{name:5,label:"Job Number",align:"left",field:e=>e[85],format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:6,label:"Site Contact",align:"left",field:e=>e[186],format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:7,label:"Start Date",align:"left",field:e=>e[33].$d,format:e=>`${Y.formatDate(new Date(e),"MM/DD/YYYY")}`,sortable:!0}]:[{name:1,label:"Name",align:"left",field:e=>e[31],format:e=>`${e}`,sortable:!0},{name:2,label:"Workday ID",align:"left",field:e=>e[152],format:(e,a)=>a[20]==="In Process"?"W---------":e,sortable:!0},{name:3,label:"Project",align:"left",field:e=>e[171],format:e=>`${e}`,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e[45],format:e=>`${e}`,sortable:!0},{name:5,label:"Job Number",align:"left",field:e=>e[85],format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:6,label:"Site Contact",align:"left",field:e=>e[186],format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:7,label:"Start Date",align:"left",field:e=>e[33].$d,format:e=>`${Y.formatDate(new Date(e),"MM/DD/YYYY")}`,sortable:!0}]),updateArrivals:({rows:e,added:a,evt:r})=>{o.value=!0,m("arrivalMarked",{record:e[0],added:a}),setTimeout(function(){o.value=!1},1500)},props:d,loading:o}}}),re={class:"q-px-sm"},se={class:"text-caption"},ne={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"};function ie(d,m,f,o,p,v){const e=$("arrival-date");return u(),x("div",re,[s(ee,{dense:"",columns:d.columns,rows:d.rows,"row-key":a=>a[3],class:"q-pa-sm",pagination:{rowsPerPage:d.$q.screen.gt.sm?25:100},separator:"vertical",selection:"multiple",onSelection:d.updateArrivals,selected:d.selected,"table-header-class":"bg-dark text-white","no-data-label":"There are no expected arrivals",loading:d.loading,grid:d.$q.screen.lt.md},{header:i(a=>[s(I,{class:"bg-dark text-white",props:a},{default:i(()=>[s(A,{"auto-width":""}),s(A,{class:"text-left","auto-width":""},{default:i(()=>[y("Arrival Date")]),_:1}),(u(!0),x(j,null,S(a.cols,r=>(u(),g(A,{class:"text-left",key:r.name},{default:i(()=>[y(D(r.label),1)]),_:2},1024))),128))]),_:2},1032,["props"])]),body:i(a=>[s(I,{"no-hover":"",props:a},{default:i(()=>[s(C,{"auto-width":""},{default:i(()=>[s(E,{class:"q-pa-none q-ma-none",size:"xs",modelValue:a.selected,"onUpdate:modelValue":r=>a.selected=r},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a.row[20]==="Complete"&&a.row[207]?(u(),g(e,{key:0,class:"text-left",rowType:"deployment",row:a.row},null,8,["row"])):(u(),g(C,{key:1,"auto-width":"",class:"text-left"},{default:i(()=>[y("TBD")]),_:1})),(u(!0),x(j,null,S(a.cols,r=>(u(),g(C,{key:r.name,props:a},{default:i(()=>[c("span",se,D(r.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"no-data":i(({message:a})=>[c("div",ne,[s(W,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),c("span",null,D(a),1)])]),loading:i(()=>[s(te,{showing:"",color:"primary"})]),_:1},8,["columns","rows","row-key","pagination","onSelection","selected","loading","grid"])])}var de=N(le,[["render",ie]]);const ce={name:"Arrivals",components:{MarkArrivalsTable:de,projectSelector:oe},setup(){const d=P(),m=G(),f=_(null),o=_(""),p=_(""),{getSelectedProject:v}=X(m),{fetchAllDeployments:e,updateDeployment:a,getDeployments:r}=K(),q=b(()=>v.value?v.value[3]:null),F=b(()=>r(q.value).filter(t=>t[20]==="Complete")),k=b(()=>{let t=[];return r(q.value).forEach(l=>{l[31].toLowerCase().includes(p.value.toLowerCase())&&t.push(l)}),t=o.value?t.filter(l=>h(l[33].$d).tz("America/Chicago").format("MM/DD/YYYY")===h(o.value).tz("America/Chicago").format("MM/DD/YYYY")):t,t=f.value?t.filter(l=>l[132]===f.value):t,t}),R=b(()=>[...new Map(k.value.map(t=>[t[132],t[132]])).values()]);async function L(){d.loading.show(),await e(),d.loading.hide(),console.log(k.value)}async function z({record:t,added:l}){if(l){await B(t),await M({id:t[21],status:7});const n=await Q(t[3],"Complete");a({projectId:n[134],key:n[3],record:n})}else{await O(t),await M({id:t[21],status:6});const n=await Q(t[3],"In Process");a({projectId:n[134],key:n[3],record:n})}}async function B(t){try{const{data:l}=await w.upsertRecordsXML({to:"bp3gazpqj",data:[{6:{value:t[3]},13:{value:t[15]},18:{value:t[21]},60:{value:""},125:{value:h()},145:{value:h()}}],fieldsToReturn:[108],formatObject:108},{action:"create",type:"arrival"});return l[0][108]}catch(l){throw{message:"Cannot add assignment",error:l}}}async function M({id:t,status:l}){try{const{data:n}=await w.upsertRecordsXML({to:"bp3gb7ng2",data:[{3:{value:t},79:{value:l}}],fieldsToReturn:[3]});return n[0][3]}catch(n){throw{message:"Cannot edit employee",error:n}}}async function Q(t,l){try{const{data:n}=await w.upsertRecordsXML({to:"bp3gaymc3",data:[{3:{value:t},20:{value:l},22:{value:new Date}}],fieldsToReturn:[204],formatObject:204});return n[0][204]}catch(n){throw{message:"Cannot edit deployment",error:n}}}async function O(t){try{const{data:l}=await w.upsertRecordsXML({to:"bp3gazpqj",data:[{3:{value:t.assignment[3]},22:{value:new Date},21:{value:"Canceled"},19:{value:""},60:{value:""}}],fieldsToReturn:[108],formatObject:108});return l[0][108]}catch(l){throw{message:"Cannot cancel assignment",error:l}}}return L(),{arrived:F,allDeployments:k,arrivalMarked:z,craftOptions:R,craftFilter:f,startDateFilter:o,search:p}}},me={class:"q-pt-sm"},ue={class:"text-h5 text-dark"},fe={class:"text-body2 text-italic q-ml-sm"},pe=c("div",{class:"text-subtitle2 text-accent"},"Please toggle the switch for everyone that has arrived at the job site.",-1),ve={class:"row items-center"},be={class:"col-12 col-md-3 q-px-sm"},ge={class:"col-12 col-md-3 q-px-sm"},we={class:"col-12 col-md-3 q-px-sm"},he={class:"col-12 col-md-3 q-px-sm"};function _e(d,m,f,o,p,v){const e=$("projectSelector"),a=$("mark-arrivals-table");return u(),g(Z,{style:{"max-width":"100vw"}},{default:i(()=>[c("div",me,[s(J,{flat:""},{default:i(()=>[s(T,{class:"q-pb-none"},{default:i(()=>[c("div",ue,[y(" Expected Arrivals "),c("span",fe,"("+D(o.allDeployments.length)+" total)",1)]),pe]),_:1}),s(T,null,{default:i(()=>[c("div",ve,[c("div",be,[s(e,{dense:""})]),c("div",ge,[s(V,{dense:"",modelValue:o.search,"onUpdate:modelValue":m[0]||(m[0]=r=>o.search=r),label:"Search"},null,8,["modelValue"])]),c("div",we,[s(V,{dense:"",modelValue:o.startDateFilter,"onUpdate:modelValue":m[1]||(m[1]=r=>o.startDateFilter=r),label:"Arrival Date",type:"date","stack-label":""},null,8,["modelValue"])]),c("div",he,[s(H,{dense:"",label:"Craft","transition-show":"flip-up","transition-hide":"flip-down",modelValue:o.craftFilter,"onUpdate:modelValue":m[2]||(m[2]=r=>o.craftFilter=r),options:o.craftOptions,"use-chips":""},null,8,["modelValue","options"])])])]),_:1})]),_:1}),s(a,{rows:o.allDeployments,selected:o.arrived,onArrivalMarked:o.arrivalMarked},null,8,["rows","selected","onArrivalMarked"])])]),_:1})}var Ke=N(ce,[["render",_e]]);export{Ke as default};
