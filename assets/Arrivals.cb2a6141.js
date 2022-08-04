import{Q}from"./QPage.2aeb9df0.js";import{k as P,c1 as $,r as u,aJ as N,aL as F,c as g,_ as q,z as C,A as I,d as r,bh as i,c2 as U,C as n,cx as h,c3 as j,aa as w,d5 as D,bX as T,aY as B,am as _}from"./index.b5f0fe3c.js";import{a as E}from"./QSelect.659fc465.js";import{Q as z}from"./QTable.5cc7ffc7.js";import{m as y,b as J,f as Y}from"./quickbase.8650d165.js";import{u as L}from"./use-quasar.0c044b38.js";import{dayjs as V}from"./dayjs.62e4342b.js";import"./QChip.1f1c4c1f.js";import"./QMenu.51c983fc.js";import"./position-engine.7869b9b0.js";import"./selection.9755dcd0.js";import"./rtl.65b79c69.js";import"./QList.5e8ce258.js";import"./QMarkupTable.60d12315.js";import"./use-fullscreen.c6e73b37.js";import"./_commonjsHelpers.dfee5925.js";import"./localForage.6d9c618d.js";import"./index.7dbe61ef.js";import"./i18n.d12f430e.js";import"./api.7db09cb0.js";const R=[{name:1,label:"Name",align:"left",field:e=>e.map.name,format:e=>`${e}`,sortable:!0},{name:2,label:"Workday ID",align:"left",field:e=>e.map.workdayId,format:(e,l)=>l[20]==="In Process"?"W---------":e,sortable:!0},{name:3,label:"Craft",align:"left",field:e=>e.map.craft,format:e=>`${e}`,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e.map.job,format:e=>`${e}`,sortable:!0},{name:5,label:"Job Number",align:"left",field:e=>e.map.jobNumber,format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:6,label:"Site Contact",align:"left",field:e=>e.map.contact,format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:7,label:"Start Date",align:"left",field:e=>e.map.start,format:e=>`${Y.formatDate(new Date(e),"MM/DD/YYYY")}`,sortable:!0}],W=[{name:1,label:"Name",align:"left",field:e=>e,format:e=>`${e.map.name} (ID: ${e[20]==="In Process"?"W---------":e.map.workdayId})`,sortable:!0},{name:3,label:"Job",align:"left",field:e=>e.map,format:e=>`${e.craft} ${e.job}`,sortable:!0},{name:6,label:"Site Contact",align:"left",field:e=>e.map.contact,format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:7,label:"Start Date",align:"left",field:e=>e.map.start,format:e=>`${Y.formatDate(new Date(e),"MM/DD/YYYY")}`,sortable:!0}],O=P({name:"Arrivals Table",components:{},setup(){const e=L(),{deploymentsForProject:l,alreadyArrived:m}=$(y()),p=l,{updateArrival:f}=y(),{active:b}=$(J()),t=u(""),s=u(null),v=u(null),d=u([]);N(()=>{m.value.forEach(a=>{d.value.includes(a)||d.value.push(a)})}),F(()=>{m.value.forEach(a=>{d.value.includes(a)||d.value.push(a)})});const c=g(()=>{let a=[];return p.value.forEach(o=>{o[31].toLowerCase().includes(t.value.toLowerCase())&&a.push(o)}),a=s.value?a.filter(o=>V(o[33].$d).tz("America/Chicago").format("MM/DD/YYYY")===V(s.value).tz("America/Chicago").format("MM/DD/YYYY")):a,a=v.value?a.filter(o=>o[132]===v.value):a,a}),S=g(()=>c.value&&c.value!==void 0?e.screen.lt.md?100:c.value.length>=25?Math.round(c.value.length/5):10:5);function k({rows:a,added:o,evt:re}){f({row:a[0],added:o})}const M=g(()=>[...new Map(l.value.map(a=>[a[132],a[132]])).values()]);return{columns:R,mobileColumns:W,rows:c,initialPagination:{rowsPerPage:S},separator:"vertical",arrivals:d,updateArrivals:k,active:b,alreadyArrived:m,search:t,craftOptions:M,craftFilter:v,startDateFilter:s,deploymentsForProject:l}}}),x={class:"q-px-sm"},H={class:"row items-center"},X={class:"col-12 col-md-4 q-px-sm"},G={class:"col-12 col-md-4 q-px-sm"},K={class:"col-12 col-md-4 q-px-sm"},Z={class:"text-dark text-caption text-italic"},ee={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"};function ae(e,l,m,p,f,b){return C(),I("div",x,[r(j,{flat:""},{default:i(()=>[r(U,{class:"q-pt-none"},{default:i(()=>[n("div",H,[n("div",X,[r(h,{dense:e.$q.screen.lt.md,modelValue:e.search,"onUpdate:modelValue":l[0]||(l[0]=t=>e.search=t),label:"Search"},null,8,["dense","modelValue"])]),n("div",G,[r(h,{dense:e.$q.screen.lt.md,modelValue:e.startDateFilter,"onUpdate:modelValue":l[1]||(l[1]=t=>e.startDateFilter=t),label:"Arrival Date",type:"date","stack-label":""},null,8,["dense","modelValue"])]),n("div",K,[r(E,{dense:e.$q.screen.lt.md,label:"Craft","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.craftFilter,"onUpdate:modelValue":l[2]||(l[2]=t=>e.craftFilter=t),options:e.craftOptions,"use-chips":""},null,8,["dense","modelValue","options"])])])]),_:1})]),_:1}),r(z,{"title-class":e.$q.screen.gt.sm?"text-primary text-h6":"text-primary text-body1",title:e.$q.screen.gt.md?`Expected Arrivals for ${e.active[20]}`:"Arrivals",columns:e.$q.screen.lt.md?e.mobileColumns:e.columns,rows:e.rows,"row-key":"3",class:"q-pa-sm",pagination:e.initialPagination,separator:"vertical",selection:"multiple",onSelection:e.updateArrivals,selected:e.alreadyArrived,"table-header-class":"bg-dark text-white","no-data-label":`There are no expected arrivals for ${e.active[20]}`,grid:e.$q.screen.lt.sm},{"top-right":i(()=>[n("div",Z,"(Total: "+w(e.deploymentsForProject.length)+" arrivals)",1)]),"header-selection":i(t=>[r(D,{disable:"",modelValue:t.selected,"onUpdate:modelValue":s=>t.selected=s},null,8,["modelValue","onUpdate:modelValue"])]),"body-selection":i(t=>[r(D,{label:e.$q.screen.lt.sm?"Arrived":"",modelValue:t.selected,"onUpdate:modelValue":s=>t.selected=s},null,8,["label","modelValue","onUpdate:modelValue"])]),"no-data":i(({message:t})=>[n("div",ee,[r(T,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),n("span",null,w(t),1)])]),_:1},8,["title-class","title","columns","rows","pagination","onSelection","selected","no-data-label","grid"])])}var A=q(O,[["render",ae]]);const te={name:"Arrivals",components:{arrivalTable:A},setup(){return{arrivalTable:A}}};function le(e,l,m,p,f,b){const t=B("arrival-table");return C(),_(Q,{style:{"max-width":"100vw"}},{default:i(()=>[r(t)]),_:1})}var qe=q(te,[["render",le]]);export{qe as default};
