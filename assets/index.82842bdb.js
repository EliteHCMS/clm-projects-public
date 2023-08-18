import{Q as L}from"./QSpace.0b427355.js";import{bV as K,r as n,w as N,aT as X,c as C,aQ as Z,A as v,B as b,d as l,br as s,cT as ee,D as r,G as I,a8 as _,ac as d,cS as te,cU as O,bQ as ae,bW as y,ax as U}from"./index.dd77155d.js";import{a as le}from"./QSelect.e46c7380.js";import{Q as oe}from"./QMenu.237258b2.js";import{Q as A}from"./QTooltip.f6619c32.js";import{Q as k}from"./QTd.86bfdff9.js";import{u as se}from"./use-quasar.6320e378.js";import{e as ne}from"./export-file.dc78ba05.js";import{g as re,b as ie,_ as Y}from"./app.05652b82.js";import{dayjs as ce}from"./dayjs.6e814a2c.js";import{_ as ue}from"./hiringTabs.a625cac4.js";import{_ as de}from"./officeSelector.d107a210.js";import{_ as me}from"./aTable.78b2fe34.js";import"./QChip.8eec8f03.js";import"./rtl.b51694b1.js";import"./position-engine.f42cc476.js";import"./selection.1b0fcc11.js";import"./_commonjsHelpers.a26ce4be.js";import"./localForage.a5ce8de1.js";import"./api.9cc8c4bd.js";import"./index.04bc0a32.js";import"./i18n.660e2ed7.js";import"./QBadge.68dd842c.js";import"./QRouteTab.6669b84b.js";import"./QTabs.fea55dbc.js";import"./QResizeObserver.b5542db0.js";import"./QTable.cd770be3.js";import"./QList.bd0eedab.js";import"./QMarkupTable.888535da.js";import"./use-fullscreen.d86e788f.js";const fe={class:"q-pa-md"},pe={class:"row items-center"},ve={class:"col-12 col-md-4 q-px-sm"},be={class:"col-12 col-md-3 q-px-sm"},_e={class:"col-12 col-md-5 q-px-sm"},ge={class:"col-12 col-md-4 q-px-sm"},we={class:"row no-wrap q-pa-md"},ye={class:"row items-center"},he={key:0},xe={key:1},De={key:0},Ve={key:1},at={__name:"index",setup(je){const g=se(),Q=re(),{openWindow:z}=ie(),{fetchDeployments:M,fetchAllDeployments:R}=Q,{getDeployments:h,getSelectedOffice:i,getLoadingState:S}=K(Q),c=n(i.value?i.value[8]:null),x=n("Deployed"),T=n("deployments"),D=n(""),m=n(null),w=n(null),B=n(null),P=n({sortBy:"1",descending:!0,rowsPerPage:150}),u=n(Y.uniqBy(h.value(c.value).filter(t=>t[167].toLowerCase().indexOf(w.value)>-1).sort((t,a)=>t[167].localeCompare(a[167])),"167")),f=n(u.value),V=t=>{c.value?M({selectedId:c.value,refresh:t}):R({can:"read",refresh:t})};V(!0),N(i,()=>{c.value=i.value?i.value[8]:null,V()});const F=n(new Date),W=setInterval(()=>{F.value=new Date},1e3);X(()=>{clearInterval(W)});const E=C(()=>["startTimestamp","name","phoneNumber","project","jobNumber","classification","action","startDate",...i.value?[]:["office"]]),j=C(()=>[{name:"startTimestamp",align:"left",label:"Time",field:"1",sortable:!0},{name:"name",align:"left",label:"Name",field:"31",sortable:!1},{name:"phoneNumber",align:"center",label:"Phone Number",field:"42",sortable:!1},{name:"project",align:"center",label:"Project",field:"167",sortable:!1},{name:"jobNumber",align:"center",label:"Job #",field:"85",sortable:!1},{name:"classification",align:"center",label:"Classification",field:"30",sortable:!1},{name:"office",align:"center",label:"Office",field:"68",sortable:!1},{name:"startDate",align:"center",label:"Start Date",field:"33",sortable:!1},{name:"action",align:"center",label:"",sortable:!1}]),p=C(()=>h.value(c.value).filter(t=>{let a=!0,e=!0;return m.value&&(a=t[167]===m.value[167],a||(e=!1)),e}).sort((t,a)=>P.value.descending?t[1].isBefore(a[1]):t[1].isAfter(a[1])));N(p,()=>{Z(()=>{u.value=Y.uniqBy(h.value(c.value).sort((t,a)=>t[167].localeCompare(a[167])),"167"),f.value=u.value})});const G=(t,a,e)=>{if(t===""){a(()=>{if(w.value=null,f.value.length===u.value.length){console.log("same length"),e();return}f.value=u.value});return}a(()=>{w.value=t.toLocaleLowerCase(),f.value=u.value.filter(o=>o[167].toLowerCase().indexOf(w.value)>-1).sort((o,H)=>o[167].localeCompare(H[167]))})},$=(t,a,e)=>{let o=a!==void 0?a(t,e):t;return o=o==null?"":String(o),o=o.split('"').join('""'),`"${o}"`},J=t=>{z(null,{url:`https://elitehcms.quickbase.com/db/bpzpy6n3x?a=dbpage&pageID=2&ee=${t[21]}`,name:"View Profile"})},q=()=>{const t=[j.value.map(e=>$(e.label))].concat(p.value.map(e=>j.value.map(o=>$(typeof o.field=="function"?o.field(e):e[o.field===void 0?o.name:o.field],o.format,e)).join(","))).join(`\r
`);ne(`${x.value} ${ce().format("MM.DD.YYYY")}.csv`,t,"text/csv")!==!0&&g.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})};return(t,a)=>(v(),b("div",fe,[l(ue),l(te,{flat:"",class:"q-pt-none"},{default:s(()=>[l(ee,null,{default:s(()=>[r("div",pe,[r("div",ve,[r("div",{class:I(["text-dark",_(g).screen.lt.md?"text-body1":"text-h5"])},d(x.value),3)]),l(L),r("div",be,[l(de,{styleSelection:!0})])])]),_:1})]),_:1}),l(me,{rows:p.value,columns:j.value,pagination:P.value,filter:D.value,title:x.value,separator:"vertical","row-key":"3",loading:_(S)(T.value),"visible-columns":E.value,downloadButton:!0,onDownload:q},{top:s(()=>[r("div",_e,[l(O,{dense:_(g).screen.lt.md,modelValue:D.value,"onUpdate:modelValue":a[0]||(a[0]=e=>D.value=e),label:"Search...",clearable:""},{prepend:s(()=>[l(ae,{name:"search"})]),_:1},8,["dense","modelValue"])]),l(L),r("div",ge,[l(le,{modelValue:m.value,"onUpdate:modelValue":a[1]||(a[1]=e=>m.value=e),options:f.value,label:m.value?"Project":"Select Project","option-label":"167","option-value":"167","use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",onFilter:G,clearable:""},null,8,["modelValue","options","label"])]),r("div",{class:I(["text-dark text-caption text-italic",_(g).screen.lt.md?"offset-xs-5":""])},"(Total: "+d(p.value.length)+")",3),l(y,{flat:"",round:"",color:"primary",icon:"filter_list"},{default:s(()=>[l(oe,null,{default:s(()=>[r("div",we,[r("div",ye,[l(O,{modelValue:B.value,"onUpdate:modelValue":a[2]||(a[2]=e=>B.value=e),label:"Date",type:"date"},null,8,["modelValue"])])])]),_:1})]),_:1}),l(y,{flat:"",round:"",color:"primary",icon:"download",disable:p.value.length<1,onClick:q},{default:s(()=>[l(A,{class:"bg-accent text-black shadow-4",offset:[10,10]},{default:s(()=>[U(" Download ")]),_:1})]),_:1},8,["disable"]),l(y,{flat:"",round:"",color:"primary",icon:"refresh",onClick:a[3]||(a[3]=e=>V(!0)),loading:_(S)(T.value)},{default:s(()=>[l(A,{class:"bg-accent text-black shadow-4",offset:[10,10]},{default:s(()=>[U(" Refresh ")]),_:1})]),_:1},8,["loading"])]),"body-cell-startTimestamp":s(e=>[l(k,{props:e},{default:s(()=>[t.$dayjs(e.value).isValid()?(v(),b("div",he,d(e.value.format("L LT")),1)):(v(),b("div",xe,d(e.row[1].format("L LT")),1))]),_:2},1032,["props"])]),"body-cell-startDate":s(e=>[l(k,{props:e},{default:s(()=>[t.$dayjs(e.value).isValid()?(v(),b("div",De,d(e.value.format("L")),1)):(v(),b("div",Ve,d(e.row[1].format("L")),1))]),_:2},1032,["props"])]),"body-cell-action":s(e=>[l(k,{props:e},{default:s(()=>[l(y,{color:"primary",label:"View Profile",onClick:o=>J(e.row),size:".75rem"},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","filter","title","loading","visible-columns"])]))}};export{at as default};
