import{Q as J}from"./QSpace.e7ca0a79.js";import{bX as E,r,w as M,aV as R,c as h,B as x,C as y,d as t,bt as s,cW as W,E as c,H as j,aa as f,ae as p,cV as X,cX as H,bS as F,bY as b,az as k}from"./index.8838c464.js";import{Q as C}from"./QTooltip.72214d5e.js";import{Q as q}from"./QTd.1bc00af2.js";import{u as G}from"./use-quasar.ed4be5d9.js";import{e as K}from"./export-file.dc78ba05.js";import{c as Z,b as ee,u as te}from"./app.42c36b1f.js";import{dayjs as ae}from"./dayjs.106d80ab.js";import{_ as oe}from"./recruitingTabs.21d05f96.js";import{_ as le}from"./officeSelector.2ba3a485.js";import{_ as se}from"./aTable.aadceb25.js";import"./position-engine.cba8bd09.js";import"./selection.26380b58.js";import"./_commonjsHelpers.a26ce4be.js";import"./localForage.ca6e9d39.js";import"./index.04bc0a32.js";import"./i18n.c69e89dd.js";import"./QBadge.44381be8.js";import"./QRouteTab.82105e35.js";import"./QTabs.a3e7b08b.js";import"./QResizeObserver.9199488f.js";import"./rtl.b51694b1.js";import"./QSelect.78b00ca7.js";import"./QChip.5ba75959.js";import"./QMenu.b8edc490.js";import"./QTable.2b553278.js";import"./QList.43880dff.js";import"./QMarkupTable.8c4a6d35.js";import"./use-fullscreen.abb80350.js";const ie={class:"q-pa-md"},ne={class:"row items-center"},re={class:"col-12 col-md-5 q-px-sm"},ce={class:"col-12 col-md-3 q-px-sm"},de={class:"col-12 col-md-5 q-px-sm"},fe={key:0},ue={key:1},Ue={__name:"index",setup(me){const u=G(),S=Z(),{openWindow:V}=ee(),I=te(),{primaryOffice:m}=I,{fetchJobPost:T,fetchAllJobPost:N}=S,{getJobPost:L,getSelectedOffice:n,getLoadingState:$}=E(S),i=r(n.value?n.value[8]:null),v=r("Job Post"),P=r("jobPost"),_=r(""),Q=r({sortBy:"1",descending:!1,rowsPerPage:150}),g=a=>{i.value?T({selectedId:i.value,refresh:a}):N({can:"read",refresh:a})};g(!0),M(n,()=>{i.value=n.value?n.value[8]:null,g()});const z=r(new Date),Y=setInterval(()=>{z.value=new Date},1e3);R(()=>{clearInterval(Y)});const A=h(()=>["index","craft","job","locationCity","#applications","action",...n.value?[]:["office"]]),w=h(()=>[{name:"index",align:"left",label:"#",sortable:!1},{name:"craft",align:"left",label:"Craft",field:"17",sortable:!1},{name:"job",align:"left",label:"Job",field:"19",sortable:!1},{name:"locationCity",align:"center",label:"Location City",field:"42",sortable:!1},{name:"#applications",align:"center",label:"# of Applications",field:"30",sortable:!1},{name:"office",align:"center",label:"Office",field:"93",sortable:!1},{name:"action",align:"center",label:"",sortable:!1}]),d=h(()=>L.value(i.value).filter(a=>!0).sort((a,o)=>Q.value.descending?a[1].isBefore(o[1]):a[1].isAfter(o[1]))),D=(a,o,e)=>{let l=o!==void 0?o(a,e):a;return l=l==null?"":String(l),l=l.split('"').join('""'),`"${l}"`},O=a=>{const o=m?m[8]:i.value?i.value:0;V(null,{url:`https://elitehcms.quickbase.com/db/bpz457c9d?a=dbpage&pageID=37&post_id=${a[3]}&page_id=15&office_id=${o}`,name:"Job Post"})},U=a=>{const o=m?m[8]:i.value?i.value:0;V(null,{url:`https://elitehcms.quickbase.com/db/bpz457c9d?a=dbpage&pageID=33&office_id=${o}&page_id=13`,name:"Post New Job"})},B=()=>{const a=[w.value.map(e=>D(e.label))].concat(d.value.map(e=>w.value.map(l=>D(typeof l.field=="function"?l.field(e):e[l.field===void 0?l.name:l.field],l.format,e)).join(","))).join(`\r
`);K(`${v.value} ${ae().format("MM.DD.YYYY")}.csv`,a,"text/csv")!==!0&&u.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})};return(a,o)=>(x(),y("div",ie,[t(oe),t(X,{flat:"",class:"q-pt-none"},{default:s(()=>[t(W,null,{default:s(()=>[c("div",ne,[c("div",re,[c("div",{class:j(["text-dark",f(u).screen.lt.md?"text-body1":"text-h5"])},p(v.value),3)]),t(J),c("div",ce,[t(le,{styleSelection:!0})])])]),_:1})]),_:1}),t(se,{rows:d.value,columns:w.value,pagination:Q.value,filter:_.value,title:v.value,separator:"vertical","row-key":"3",loading:f($)(P.value),"visible-columns":A.value,downloadButton:!0,onDownload:B},{top:s(()=>[c("div",de,[t(H,{dense:f(u).screen.lt.md,modelValue:_.value,"onUpdate:modelValue":o[0]||(o[0]=e=>_.value=e),label:"Search...",clearable:""},{prepend:s(()=>[t(F,{name:"search"})]),_:1},8,["dense","modelValue"])]),t(J),c("div",{class:j(["text-dark text-caption text-italic",f(u).screen.lt.md?"offset-xs-5":""])},"(Total: "+p(d.value.length)+")",3),t(b,{flat:"",round:"",color:"primary",icon:"download",disable:d.value.length<1,onClick:B},{default:s(()=>[t(C,{class:"bg-accent text-black shadow-4",offset:[10,10]},{default:s(()=>[k(" Download ")]),_:1})]),_:1},8,["disable"]),t(b,{flat:"",round:"",color:"primary",icon:"add_circle",disable:d.value.length<1,onClick:U},{default:s(()=>[t(C,{class:"bg-accent text-black shadow-4",offset:[10,10]},{default:s(()=>[k(" Post New Job ")]),_:1})]),_:1},8,["disable"]),t(b,{flat:"",round:"",color:"primary",icon:"refresh",onClick:o[1]||(o[1]=e=>g(!0)),loading:f($)(P.value)},{default:s(()=>[t(C,{class:"bg-accent text-black shadow-4",offset:[10,10]},{default:s(()=>[k(" Refresh ")]),_:1})]),_:1},8,["loading"])]),"body-cell-submissionTime":s(e=>[t(q,{props:e},{default:s(()=>[a.$dayjs(e.value).isValid()?(x(),y("div",fe,p(e.value.format("L LT")),1)):(x(),y("div",ue,p(e.row[1].format("L LT")),1))]),_:2},1032,["props"])]),"body-cell-action":s(e=>[t(q,{props:e},{default:s(()=>[t(b,{color:"primary",label:"View",onClick:l=>O(e.row),size:".75rem"},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","filter","title","loading","visible-columns"])]))}};export{Ue as default};
