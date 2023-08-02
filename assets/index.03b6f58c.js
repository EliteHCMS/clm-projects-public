import{Q as ie,a as we,b as re}from"./QTabPanels.a9bd5734.js";import{Q as $e}from"./QTabs.56f7cfd1.js";import{Q as ye}from"./QPage.b5c31638.js";import{u as ne}from"./use-quasar.07d34863.js";import{l as ae,r as p,_ as se,A as f,aq as x,br as n,D as i,bT as de,c as D,b5 as oe,B as y,d as s,cT as H,cS as Z,ac as c,bW as ee,F as P,b4 as O,bS as ve,ar as he,cU as te,ax as S,bQ as L,y as ge}from"./index.9dd15430.js";import{a as M}from"./QSelect.b771c9d2.js";import{Q as T,a as ue}from"./QTable.c682818c.js";import{Q as W}from"./QTr.d584fc0e.js";import{Q as U}from"./QTd.3a283869.js";import{Q as me}from"./QInnerLoading.f0f0848c.js";import{u as pe}from"./dataStore.c18945c8.js";import{dayjs as w}from"./dayjs.2f8688b0.js";import{u as be,a as _e}from"./useQuerySaver.d29ff9ee.js";import{q as ce}from"./app.727217bc.js";import{c as De}from"./checkTermStatus.125398dd.js";import"./workdayAPI.ff2e0b3a.js";import"./workday.0f04e809.js";import"./dataStore.fea3a289.js";import"./use-panel.e516c240.js";import"./touch.70a9dd44.js";import"./selection.a10d025f.js";import"./QResizeObserver.d243739e.js";import"./rtl.b51694b1.js";import"./QChip.96daacbb.js";import"./QMenu.c2bc0e92.js";import"./position-engine.c6215dd3.js";import"./QList.b7324a87.js";import"./QMarkupTable.a7c1e34c.js";import"./use-fullscreen.b7a8783b.js";import"./localForage.eb119360.js";import"./_commonjsHelpers.a26ce4be.js";import"./api.4f913c74.js";import"./index.04bc0a32.js";import"./i18n.0b66fc90.js";import"./syncEmployeeWithWorkday.39dde532.js";const ke=ae({emits:[],props:{id:String,release:Object},setup(l){const r=p(null),C=p(!0);return{record:r,loading:C}}}),qe=i("div",null,null,-1);function Se(l,r,C,R,j,V){return f(),x(U,{class:"text-left","auto-width":""},{default:n(()=>[qe]),_:1})}var Ve=se(ke,[["render",Se]]);const Fe=ae({props:{},components:{GetWorkerCell:Ve},setup(l){const r=ne(),C=de(),{capitalize:R}=ge,j=p(""),V=p(null),t=p(null),o=p(null),g=p(null),$=p(null),_=p(null),F=p(null),A=p(null),E=p(null),X=p(!0),{setAdminData:G,getAdminData:le,setAdminItemData:z}=pe(),k=[{name:1,label:"Name",align:"left",field:e=>e[49],format:e=>`${J(e)}`,sortable:!0},{name:2,label:"Disposition",align:"left",field:e=>e[43],format:e=>`${e}`,sortable:!0},{name:3,label:"Workday Status",align:"left",field:e=>e[87],format:e=>`${e}`,sortable:!0},{name:4,label:"Hiring Status",align:"left",field:e=>e[92],format:e=>`${e}`,sortable:!0},{name:5,label:"Submission Status",align:"left",field:e=>e[73],format:e=>`${e}`,sortable:!0}],Y=async()=>{r.loading.show(),await B(),r.loading.hide()},B=async()=>{const e=N.value.filter(q=>q[87]==="Terminated"&&q[92]==="Review Release"&&q[73]!=="Processed");console.log(e);const m=await De({array:e}),v=m.filter(q=>q.terminated);console.log(m),console.log(v)},N=D(()=>le({dataset:"releases"})||[]),b=D(()=>{const e=N.value;let m;if(t.value?m=e.filter(v=>v[87]===t.value):m=e,o.value&&(m=m.filter(v=>v[43]===o.value.value)),V.value&&(m=m.filter(v=>v[73]===V.value)),g.value&&(m=m.filter(v=>v[92]===g.value)),$.value){const v=$.value==="Yes";m=m.filter(q=>q[95]===v)}return _.value&&(m=m.filter(v=>v[84]===_.value)),F.value&&(m=m.filter(v=>v[84]!==F.value)),A.value&&(m=m.filter(v=>w(v[1].$d)>=w(A.value))),E.value&&(m=m.filter(v=>w(v[1].$d)<=w(E.value))),m}),I=async e=>{if(e||b.value.length===0){X.value=!0;const{data:m}=await ce.fetchFromHiringApp({fields:[be({type:"releases",query:"{'104'.EX.true}AND{'74'.EX.false}AND{'1'.OAF.'12-12-2022'}"})]}),v=m&&m.length>0?[...new Map(m.map(q=>[{e:q[25],o:q[105]},q])).values()].sort((q,fe)=>q[1].$d>fe[1].$d?-1:1):[];G({dataset:"releases",data:v}),X.value=!1}else X.value=!1},J=e=>{const m=e.split(" ");let v="";return m.forEach((q,fe)=>{v+=fe>0?` ${R(q.toLowerCase())}`:R(q.toLowerCase())}),v},K=e=>{C.push({name:"view-release",params:{release:e[3]}})},a=D(()=>[...new Map(N.value.map(e=>[e[92],e[92]])).values()].filter(e=>e!=="")),u=D(()=>[...new Map(N.value.map(e=>[e[84],e[84]])).values()].filter(e=>e!=="")),h=D(()=>N.value.length>0?[{label:"Termed but Not Processed",value:b.value.filter(e=>e[73]!=="Processed"&&e[87]==="Terminated").length,denominator:b.value.length},{label:"Decision to Reassign",value:b.value.filter(e=>e[43]==="Reassign").length,denominator:b.value.filter(e=>e[43]!=="").length},{label:"Decision to Terminate",value:b.value.filter(e=>e[43]==="Terminate").length,denominator:b.value.filter(e=>e[43]!=="").length},{label:"Waiting on Reassignment",value:b.value.filter(e=>e[43]==="Reassign"&&e[42]!=="Complete"&&e[87]==="Active").length,denominator:b.value.filter(e=>e[43]==="Reassign").length},{label:"Waiting on Termination",value:b.value.filter(e=>e[43]==="Terminate"&&e[73]!=="Processed"&&e[87]==="Active").length,denominator:b.value.filter(e=>e[43]==="Terminate").length}]:[]),Q=D(()=>N.value.length>0?[{label:"Complete",value:b.value.filter(e=>e[42]==="Complete").length,denominator:b.value.length,separate:!0},{label:"Decision Made",value:b.value.filter(e=>e[43]!==""&&e[42]!=="Complete").length,denominator:b.value.filter(e=>e[42]!=="Complete").length},{label:"Waiting on Decision",value:b.value.filter(e=>e[42]!=="Complete"&&e[43]==="").length,denominator:b.value.filter(e=>e[42]!=="Complete").length,separate:!0},{label:"Reassigned",value:b.value.filter(e=>e[43]==="Reassign"&&e[42]==="Complete").length,denominator:b.value.filter(e=>e[42]==="Complete").length},{label:"Terminated",value:b.value.filter(e=>e[43]==="Terminate"&&e[42]==="Complete").length,denominator:b.value.filter(e=>e[42]==="Complete").length}]:[]),d=D(()=>b.value.length>0?[{label:"Employment Status",updateFunction:e=>{t.value=e},model:t.value,type:"select",options:["Active","Terminated"]},{label:"Hiring Status",updateFunction:e=>{g.value=e},model:g.value,type:"select",options:a.value},{label:"Submission Status",updateFunction:e=>{V.value=e},model:V.value,type:"select",options:["Processed","Pending","Cancelled","Submitted","Rescinded"]},{label:"Disposition",updateFunction:e=>{o.value=e},model:o.value,type:"select",options:[{value:"Reassign",label:"Reassign"},{value:"Terminate",label:"Terminate"},{value:"",label:"None"}]},{label:"Possible Reassignment",updateFunction:e=>{$.value=e},model:$.value,type:"select",options:["Yes","No"]},{label:"Project",updateFunction:e=>{_.value=e},model:_.value,type:"select",options:u.value},{label:"Remove Project",updateFunction:e=>{F.value=e},model:F.value,type:"select",options:u.value},{label:"Start Date",updateFunction:e=>{A.value=e},model:A.value,type:"date",options:null},{label:"End Date",updateFunction:e=>{E.value=e},model:E.value,type:"date",options:null}]:[]);return I(),{search:j,columns:k,rows:b,loadData:I,loading:X,checkForUpdates:Y,viewRelease:K,stats:Q,hiddenStats:h,filters:d}}}),Re={class:"row items-start"},Ce={class:"col-4 q-pr-xs"},Ae={class:"row"},xe={class:"col-8"},Pe=i("div",{class:"text-body1"},"Releases Summary",-1),Te={class:"text-caption text-italic"},Ue={class:"col-4 text-right"},Ne={class:"text-caption"},Qe={class:"text-primary q-mr-sm"},je={key:0,class:"text-dark"},Ye={key:1,class:"text-dark"},Oe={class:"col-8 q-px-xs"},Me={class:"row items-center"},ze={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"};function Ee(l,r,C,R,j,V){const t=oe("get-worker-cell");return f(),y("div",null,[s(Z,{flat:""},{default:n(()=>[s(H,{class:"q-px-none q-pt-none"},{default:n(()=>[i("div",Re,[i("div",Ce,[s(Z,null,{default:n(()=>[s(H,{class:"q-pa-sm bg-dark text-white"},{default:n(()=>[i("div",Ae,[i("div",xe,[Pe,i("div",Te,"Total: "+c(l.rows.length)+" Releases",1)]),i("div",Ue,[s(ee,{round:"",dense:"",size:"md",color:"white",flat:"",icon:"refresh",onClick:r[0]||(r[0]=o=>l.loadData(!0))})])])]),_:1}),(f(!0),y(P,null,O(l.stats,(o,g)=>(f(),y(P,{key:g},[s(H,{class:"q-py-xs q-pr-xs q-pl-sm"},{default:n(()=>[i("div",Ne,[i("span",Qe,c(o.label)+": ",1),o.value>0?(f(),y("span",je,c(o.value)+" / "+c(o.denominator)+" ("+c((o.value/o.denominator*100).toFixed(2))+"%) ",1)):(f(),y("span",Ye,"None"))])]),_:2},1024),o.separate?(f(),x(ve,{key:0})):he("",!0)],64))),128))]),_:1})]),i("div",Oe,[i("div",Me,[(f(!0),y(P,null,O(l.filters,(o,g)=>(f(),y("div",{key:g,class:"col-12 col-md-4 q-px-xs q-pb-sm"},[o.type==="select"?(f(),x(M,{key:0,dense:"",label:o.label,"transition-show":"flip-up","transition-hide":"flip-down",modelValue:o.model,"onUpdate:modelValue":[$=>o.model=$,$=>o.updateFunction($)],options:o.options,clearable:""},null,8,["label","modelValue","onUpdate:modelValue","options"])):(f(),x(te,{key:1,dense:"",modelValue:o.model,"onUpdate:modelValue":[$=>o.model=$,$=>o.updateFunction($)],label:o.label},null,8,["modelValue","onUpdate:modelValue","label"]))]))),128))])])])]),_:1})]),_:1}),i("div",null,[s(ue,{columns:l.columns,rows:l.rows,"row-key":o=>o[3],class:"q-pa-sm",pagination:{rowsPerPage:100},"table-header-class":"bg-dark text-white","no-data-label":"There are no recent releases",dense:"",loading:l.loading},{header:n(o=>[s(W,{class:"bg-dark text-white",props:o},{default:n(()=>[s(T,{"auto-width":""}),s(T,{"auto-width":""},{default:n(()=>[S("Date")]),_:1}),(f(!0),y(P,null,O(o.cols,g=>(f(),x(T,{key:g.name,props:o},{default:n(()=>[S(c(g.label),1)]),_:2},1032,["props"]))),128)),s(T,{"auto-width":""})]),_:2},1032,["props"])]),body:n(o=>[s(W,{props:o},{default:n(()=>[s(U,{"auto-width":""},{default:n(()=>[s(L,{class:"cursor-pointer",size:l.$q.screen.gt.sm?"sm":"xs",color:"info",round:"",dense:"",onClick:g=>l.viewRelease(o.row),name:o.expand?"visibility_off":"visibility"},null,8,["size","onClick","name"])]),_:2},1024),s(U,{"auto-width":""},{default:n(()=>[S(c(l.$dayjs(o.row[1].$d).format("MM/DD/YYYY")||""),1)]),_:2},1024),(f(!0),y(P,null,O(o.cols,g=>(f(),x(U,{key:g.name,props:o},{default:n(()=>[S(c(g.value),1)]),_:2},1032,["props"]))),128)),s(t,{id:o.row[50],release:o.row},null,8,["id","release"])]),_:2},1032,["props"])]),"no-data":n(({message:o})=>[i("div",ze,[s(L,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),i("span",null,c(o),1)])]),"top-left":n(()=>[s(ee,{color:"primary","icon-right":"sync_alt",label:"Check for Updates",onClick:l.checkForUpdates},null,8,["onClick"])]),loading:n(()=>[s(me,{showing:"",color:"primary"})]),_:1},8,["columns","rows","row-key","loading"])])])}var Xe=se(Fe,[["render",Ee]]);const He=ae({props:{},components:{},setup(l){const r=ne(),C=de(),{capitalize:R}=ge,j=p(""),V=p(null),t=p(null),o=p(null),g=p(null),$=p(null),_=p(!0),F=p(null),A=p(null),E=[{name:1,label:"Name",align:"left",field:d=>d[75],format:d=>`${b(d)}`,sortable:!0},{name:2,label:"Status",align:"left",field:d=>d[21],format:d=>`${d}`,sortable:!0},{name:3,label:"Workday Status",align:"left",field:d=>d[102],format:d=>`${d}`,sortable:!0},{name:4,label:"Project",align:"left",field:d=>d[141],format:d=>`${d}`,sortable:!0}],X=[{value:"Reassign",label:"Reassign"},{value:"Terminate",label:"Terminate"},{value:"",label:"None"}],{setAdminData:G,getAdminData:le,setAdminItemData:z}=pe(),k=D(()=>{const d=Y.value;let e;if(t.value?e=d.filter(m=>m[102]===t.value):e=d,g.value&&(e=e.filter(m=>m[146]===g.value)),o.value&&(e=e.filter(m=>m[146]!==o.value)),$.value){const m=$.value==="Yes";e=e.filter(v=>v[148]===m)}return F.value&&(e=e.filter(m=>a(m).isSameOrAfter(w(F.value)))),A.value&&(e=e.filter(m=>a(m).isSameOrBefore(w(A.value)))),e}),Y=D(()=>le({dataset:"assignments"})||[]),B=D(()=>k.value.filter(d=>d[148])||[]),N=async d=>{if(d||k.value.length===0){_.value=!0;const{data:e}=await ce.fetchFromHiringApp({fields:[be({type:"rawAssignments",query:"{'147'.EX.true}AND{'21'.XEX.'Canceled'}AND{'1'.OAF.'06-30-2022'}"})]}),m=e&&e.length>0?[...new Map(e.map(v=>[v[85],v])).values()].sort((v,q)=>v[1].$d>q[1].$d?-1:1):[];G({dataset:"assignments",data:m}),_.value=!1}else _.value=!1},b=d=>{const e=d.split(" ");let m="";return e.forEach((v,q)=>{m+=q>0?` ${R(v.toLowerCase())}`:R(v.toLowerCase())}),m},I=async()=>{r.loading.show(),r.loading.hide()};function J(d){C.push({name:"view-release",params:{release:d[3]}})}const K=D(()=>[...new Map(Y.value.map(d=>[d[146],d[146]])).values()].filter(d=>d!==""));N();const a=d=>d[145]&&d[145].$d?w(d[145].$d):w(d[1].$d),u=d=>a(d).isSameOrAfter(w(F.value))&&a(d).isSameOrBefore(w(A.value)),h=d=>!d[149]||!d[149].$d||w(d[149].$d).isAfter(w()),Q=D(()=>Y.value.length>0?[{label:"Retained No Filter",value:Y.value.filter(d=>u(d)&&h(d)).length,denominator:Y.value.filter(d=>u(d)).length,separate:!0},{label:"Retained With Filter",value:k.value.filter(d=>u(d)&&h(d)).length,denominator:k.value.filter(d=>u(d)).length,separate:!0}]:[]);return{search:j,columns:E,rows:k,loadData:N,loading:_,statusFilter:t,checkForUpdates:I,viewRelease:J,dispositionFilter:o,dispositions:X,submissionStatus:V,hiringStatusFilter:g,hiringStatusOptions:K,possibleReassignment:$,startDate:F,endDate:A,bySite:B,stats:Q,getArrivalDate:a}}}),Be={class:"row items-start"},Ie={class:"col-4 q-pr-xs"},Le={class:"row"},We={class:"col-8"},Ge=i("div",{class:"text-body1"},"Assignments Summary",-1),Je={class:"text-caption text-italic"},Ke={class:"col-4 text-right"},Ze={class:"text-caption"},et={class:"text-primary q-mr-sm"},tt={class:"text-dark"},lt={class:"col-8 q-px-xs"},at={class:"row items-center"},st={class:"col-12 col-md-2 q-px-sm"},ot={class:"col-12 col-md-2 q-px-sm"},nt={class:"col-12 col-md-2 q-px-sm"},it={class:"col-12 col-md-2 q-px-sm"},rt={class:"col-12 col-md-2 q-px-sm"},dt={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"},ut={class:"text-dark text-caption text-italic"},mt={class:"text-dark text-caption text-italic"};function pt(l,r,C,R,j,V){return f(),y("div",null,[s(Z,{flat:""},{default:n(()=>[s(H,null,{default:n(()=>[i("div",Be,[i("div",Ie,[s(Z,null,{default:n(()=>[s(H,{class:"q-pa-sm bg-dark text-white"},{default:n(()=>[i("div",Le,[i("div",We,[Ge,i("div",Je,"Total: "+c(l.rows.length)+" Releases",1)]),i("div",Ke,[s(ee,{round:"",dense:"",size:"md",color:"white",flat:"",icon:"refresh",onClick:r[0]||(r[0]=t=>l.loadData(!0))})])])]),_:1}),(f(!0),y(P,null,O(l.stats,(t,o)=>(f(),y(P,{key:o},[s(H,{class:"q-py-xs q-pr-xs q-pl-sm"},{default:n(()=>[i("div",Ze,[i("span",et,c(t.label)+": ",1),i("span",tt,c(t.value)+" / "+c(t.denominator)+" ("+c((t.value/t.denominator*100).toFixed(2))+"%) ",1)])]),_:2},1024),t.separate?(f(),x(ve,{key:0})):he("",!0)],64))),128))]),_:1})]),i("div",lt,[i("div",at,[i("div",st,[s(M,{dense:"",label:"Project","transition-show":"flip-up","transition-hide":"flip-down",modelValue:l.hiringStatusFilter,"onUpdate:modelValue":r[1]||(r[1]=t=>l.hiringStatusFilter=t),options:l.hiringStatusOptions,clearable:""},null,8,["modelValue","options"])]),i("div",ot,[s(M,{dense:"",label:"Remove Project","transition-show":"flip-up","transition-hide":"flip-down",modelValue:l.dispositionFilter,"onUpdate:modelValue":r[2]||(r[2]=t=>l.dispositionFilter=t),options:l.hiringStatusOptions,clearable:""},null,8,["modelValue","options"])]),i("div",nt,[s(M,{dense:"",label:"Created by Project App","transition-show":"flip-up","transition-hide":"flip-down",modelValue:l.possibleReassignment,"onUpdate:modelValue":r[3]||(r[3]=t=>l.possibleReassignment=t),options:["Yes","No"],clearable:""},null,8,["modelValue"])]),i("div",it,[s(te,{"stack-label":"",dense:"",type:"date",modelValue:l.startDate,"onUpdate:modelValue":r[4]||(r[4]=t=>l.startDate=t),label:"Start Date"},null,8,["modelValue"])]),i("div",rt,[s(te,{"stack-label":"",dense:"",type:"date",modelValue:l.endDate,"onUpdate:modelValue":r[5]||(r[5]=t=>l.endDate=t),label:"End Date"},null,8,["modelValue"])])])])])]),_:1})]),_:1}),i("div",null,[s(ue,{title:"Assignments","title-class":"text-h5 text-primary",columns:l.columns,rows:l.rows,"row-key":t=>t[3],class:"q-pa-sm",pagination:{rowsPerPage:100},"table-header-class":"bg-dark text-white","no-data-label":"There are no recent releases",dense:"",loading:l.loading},{header:n(t=>[s(W,{class:"bg-dark text-white",props:t},{default:n(()=>[s(T,{"auto-width":""}),s(T,{"auto-width":""},{default:n(()=>[S("Date")]),_:1}),(f(!0),y(P,null,O(t.cols,o=>(f(),x(T,{key:o.name,props:t},{default:n(()=>[S(c(o.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:n(t=>[s(W,{props:t},{default:n(()=>[s(U,{"auto-width":""},{default:n(()=>[s(L,{class:"cursor-pointer",size:l.$q.screen.gt.sm?"sm":"xs",color:"info",round:"",dense:"",onClick:o=>l.viewRelease(t.row),name:t.expand?"visibility_off":"visibility"},null,8,["size","onClick","name"])]),_:2},1024),s(U,{"auto-width":""},{default:n(()=>[S(c(l.getArrivalDate(t.row).format("MM/DD/YYYY")||""),1)]),_:2},1024),(f(!0),y(P,null,O(t.cols,o=>(f(),x(U,{key:o.name,props:t},{default:n(()=>[S(c(o.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"no-data":n(({message:t})=>[i("div",dt,[s(L,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),i("span",null,c(t),1)])]),"top-right":n(()=>[i("div",ut,"(Total: "+c(l.rows.length)+" assignments)",1),s(ee,{color:"secondary",flat:"","icon-right":"refresh",label:"Refresh",onClick:r[6]||(r[6]=t=>l.loadData(!0))})]),"top-left":n(()=>[i("div",mt,"Created by Ratio (Site/HC): "+c(l.bySite.length)+" / "+c(l.rows.length)+" ("+c((l.bySite.length/l.rows.length*100).toFixed(2))+"%)",1)]),loading:n(()=>[s(me,{showing:"",color:"primary"})]),_:1},8,["columns","rows","row-key","loading"])])])}var ct=se(He,[["render",pt]]);const ft=ae({props:{},components:{},setup(l){const r=ne(),C=de(),{capitalize:R}=ge,j=p(""),V=p(null),t=p(null),o=p(null),g=p(null),$=p(null),_=p(!0),F=p(null),A=p(null),E=[{name:1,label:"Name",align:"left",field:a=>a[31],format:a=>`${b(a)}`,sortable:!0},{name:2,label:"Status",align:"left",field:a=>a[20],format:a=>`${a}`,sortable:!0},{name:3,label:"Hiring Center",align:"left",field:a=>a[68],format:a=>`${a}`,sortable:!0},{name:4,label:"Project",align:"left",field:a=>a[190],format:a=>`${a}`,sortable:!0}],X=[{value:"Reassign",label:"Reassign"},{value:"Terminate",label:"Terminate"},{value:"",label:"None"}],{setAdminData:G,getAdminData:le,setAdminItemData:z}=pe(),k=D(()=>{const a=Y.value;let u;return t.value?u=a.filter(h=>h[20]===t.value):u=a,g.value&&(u=u.filter(h=>h[190]===g.value)),o.value&&(u=u.filter(h=>h[190]!==o.value)),F.value&&(u=u.filter(h=>w(h[1].$d)>=w(F.value))),A.value&&(u=u.filter(h=>w(h[1].$d)<=w(A.value))),u}),Y=D(()=>le({dataset:"deployments"})||[]),B=D(()=>k.value),N=async a=>{if(a||k.value.length===0){_.value=!0;const{data:u}=await ce.fetchFromHiringApp({fields:[be({type:"rawDeployments",query:"{'220'.EX.true}AND{'20'.XEX.'Canceled'}AND{'1'.OAF.'06-01-2022'}"})]}),h=u&&u.length>0?[...new Map(u.map(Q=>[{e:Q[21],o:Q[72]},Q])).values()].sort((Q,d)=>Q[1].$d>d[1].$d?-1:1):[];G({dataset:"deployments",data:h}),_.value=!1}else _.value=!1},b=a=>{const u=a.split(" ");let h="";return u.forEach((Q,d)=>{h+=d>0?` ${R(Q.toLowerCase())}`:R(Q.toLowerCase())}),h},I=async()=>{r.loading.show(),r.loading.hide()};function J(a){C.push({name:"view-release",params:{release:a[3]}})}const K=D(()=>[...new Map(Y.value.map(a=>[a[190],a[190]])).values()].filter(a=>a!==""));return N(),{search:j,columns:E,rows:k,loadData:N,loading:_,statusFilter:t,checkForUpdates:I,viewRelease:J,dispositionFilter:o,dispositions:X,submissionStatus:V,hiringStatusFilter:g,hiringStatusOptions:K,possibleReassignment:$,startDate:F,endDate:A,bySite:B}}}),vt={class:"row items-center"},ht={class:"col-12 col-md-2 q-px-sm"},gt={class:"col-12 col-md-2 q-px-sm"},bt={class:"col-12 col-md-2 q-px-sm"},wt={class:"col-12 col-md-2 q-px-sm"},$t={class:"col-12 col-md-2 q-px-sm"},yt={class:"col-12 col-md-2 q-px-sm"},_t={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"},Dt={class:"text-dark text-caption text-italic"};function kt(l,r,C,R,j,V){return f(),y("div",null,[s(Z,{flat:""},{default:n(()=>[s(H,null,{default:n(()=>[i("div",vt,[i("div",ht,[s(M,{dense:"",label:"Status","transition-show":"flip-up","transition-hide":"flip-down",modelValue:l.statusFilter,"onUpdate:modelValue":r[0]||(r[0]=t=>l.statusFilter=t),options:["In Process","Complete","DNC"],clearable:""},null,8,["modelValue"])]),i("div",gt,[s(M,{dense:"",label:"Project","transition-show":"flip-up","transition-hide":"flip-down",modelValue:l.hiringStatusFilter,"onUpdate:modelValue":r[1]||(r[1]=t=>l.hiringStatusFilter=t),options:l.hiringStatusOptions,clearable:""},null,8,["modelValue","options"])]),i("div",bt,[s(M,{dense:"",label:"Remove Project","transition-show":"flip-up","transition-hide":"flip-down",modelValue:l.dispositionFilter,"onUpdate:modelValue":r[2]||(r[2]=t=>l.dispositionFilter=t),options:l.hiringStatusOptions,clearable:""},null,8,["modelValue","options"])]),i("div",wt,[s(M,{dense:"",label:"Created by Project App","transition-show":"flip-up","transition-hide":"flip-down",modelValue:l.possibleReassignment,"onUpdate:modelValue":r[3]||(r[3]=t=>l.possibleReassignment=t),options:["Yes","No"],clearable:""},null,8,["modelValue"])]),i("div",$t,[s(te,{"stack-label":"",dense:"",type:"date",modelValue:l.startDate,"onUpdate:modelValue":r[4]||(r[4]=t=>l.startDate=t),label:"Start Date"},null,8,["modelValue"])]),i("div",yt,[s(te,{"stack-label":"",dense:"",type:"date",modelValue:l.endDate,"onUpdate:modelValue":r[5]||(r[5]=t=>l.endDate=t),label:"End Date"},null,8,["modelValue"])])])]),_:1})]),_:1}),i("div",null,[s(ue,{title:"Assignments","title-class":"text-h5 text-primary",columns:l.columns,rows:l.rows,"row-key":t=>t[3],class:"q-pa-sm",pagination:{rowsPerPage:100},"table-header-class":"bg-dark text-white","no-data-label":"There are no recent releases",dense:"",loading:l.loading},{header:n(t=>[s(W,{class:"bg-dark text-white",props:t},{default:n(()=>[s(T,{"auto-width":""}),s(T,{"auto-width":""},{default:n(()=>[S("Date")]),_:1}),(f(!0),y(P,null,O(t.cols,o=>(f(),x(T,{key:o.name,props:t},{default:n(()=>[S(c(o.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:n(t=>[s(W,{props:t},{default:n(()=>[s(U,{"auto-width":""},{default:n(()=>[s(L,{class:"cursor-pointer",size:l.$q.screen.gt.sm?"sm":"xs",color:"info",round:"",dense:"",onClick:o=>l.viewRelease(t.row),name:t.expand?"visibility_off":"visibility"},null,8,["size","onClick","name"])]),_:2},1024),s(U,{"auto-width":""},{default:n(()=>[S(c(l.$dayjs(t.row[1].$d).format("MM/DD/YYYY")||""),1)]),_:2},1024),(f(!0),y(P,null,O(t.cols,o=>(f(),x(U,{key:o.name,props:t},{default:n(()=>[S(c(o.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"no-data":n(({message:t})=>[i("div",_t,[s(L,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),i("span",null,c(t),1)])]),"top-right":n(()=>[i("div",Dt,"(Total: "+c(l.rows.length)+" deployments)",1),s(ee,{color:"secondary",flat:"","icon-right":"refresh",label:"Refresh",onClick:r[6]||(r[6]=t=>l.loadData(!0))})]),"top-left":n(()=>[]),loading:n(()=>[s(me,{showing:"",color:"primary"})]),_:1},8,["columns","rows","row-key","loading"])])])}var qt=se(ft,[["render",kt]]);const St=ae({props:{},components:{},setup(l){const r=ne(),C=de(),R=p(""),j=p(null),V=p(null),t=p(null),o=p(null),g=p(null),$=p(!0),_=p(null),F=p(null),A=[{name:1,label:"Number",align:"left",field:a=>a[3],format:a=>`${a}`,sortable:!0},{name:2,label:"Status",align:"left",field:a=>a[14],format:a=>`${a}`,sortable:!0},{name:3,label:"Hiring Center",align:"left",field:a=>a[103],format:a=>`${a}`,sortable:!0},{name:4,label:"Project",align:"left",field:a=>a[28],format:a=>`${a}`,sortable:!0}],E=[{value:"Reassign",label:"Reassign"},{value:"Terminate",label:"Terminate"},{value:"",label:"None"}],{setAdminData:X,getAdminData:G,setAdminItemData:le}=pe(),z=D(()=>{const a=k.value;let u;if(V.value?u=a.filter(h=>h[14]===V.value):u=a,o.value&&(u=u.filter(h=>h[28]===o.value)),t.value&&(u=u.filter(h=>h[28]!==t.value)),g.value){const h=g.value==="Yes";u=u.filter(Q=>Q[281]===h)}return _.value&&(u=u.filter(h=>w(h[1].$d).isSameOrAfter(w(_.value)))),F.value&&(u=u.filter(h=>w(h[1].$d).isSameOrBefore(w(F.value)))),u}),k=D(()=>G({dataset:"requests"})||[]),Y=D(()=>z.value.filter(a=>a[148])),B=async a=>{if(a||z.value.length===0){$.value=!0;const{data:u}=await ce.fetchFromProjectsApp({fields:[_e({type:"requests",query:"{'288'.EX.true}AND{'14'.XEX.'Cancelled'}AND{'14'.XEX.''}AND{'1'.OAF.'07-12-2022'}"})]});X({dataset:"requests",data:u||[]}),$.value=!1}else $.value=!1},N=async()=>{r.loading.show(),r.loading.hide()};function b(a){C.push({name:"view-release",params:{release:a[3]}})}const I=D(()=>[...new Map(k.value.map(a=>[a[28],a[28]])).values()].filter(a=>a!==""));B();const J=a=>a[145].$d?w(a[145].$d):w(a[1].$d),K=D(()=>k.value.length>0?[{label:"Submitted by Portal",value:k.value.filter(a=>a[281]).length,denominator:k.value.length,separate:!0},{label:"Filtered Submitted by Portal",value:z.value.filter(a=>a[281]).length,denominator:z.value.length,separate:!0},{label:"Unfiltered Total Needed",value:k.value.reduce((a,u)=>a+u[115],0),separate:!0},{label:"Filtered Total Needed",value:z.value.reduce((a,u)=>a+u[115],0),separate:!0},{label:"Time to Open Unfiltered",value:(k.value.filter(a=>a[82].$d!==null&&a[82].$d!==void 0&&a[14]!=="Pending").reduce((a,u)=>a+w(u[82].$d).diff(w(u[1].$d),"hour",!0),0)/k.value.filter(a=>a[82].$d!==null&&a[82].$d!==void 0&&a[14]!=="Pending").length).toFixed(2)+" hours",separate:!0},{label:"Time to Open Filtered",value:(z.value.filter(a=>a[82].$d!==null&&a[82].$d!==void 0&&a[14]!=="Pending").reduce((a,u)=>a+w(u[82].$d).diff(w(u[1].$d),"hour",!0),0)/z.value.filter(a=>a[82].$d!==null&&a[82].$d!==void 0&&a[14]!=="Pending").length).toFixed(2)+" hours",separate:!0}]:[]);return{search:R,columns:A,rows:z,loadData:B,loading:$,statusFilter:V,checkForUpdates:N,viewRelease:b,dispositionFilter:t,dispositions:E,submissionStatus:j,hiringStatusFilter:o,hiringStatusOptions:I,possibleReassignment:g,startDate:_,endDate:F,bySite:Y,stats:K,getArrivalDate:J}}}),Vt={class:"row items-start"},Ft={class:"col-4 q-pr-xs"},Rt={class:"row"},Ct={class:"col-8"},At=i("div",{class:"text-body1"},"Requests Summary",-1),xt={class:"text-caption text-italic"},Pt={class:"col-4 text-right"},Tt={class:"text-caption"},Ut={class:"text-primary q-mr-sm"},Nt={key:0,class:"text-dark"},Qt={key:1,class:"text-dark"},jt={class:"col-8 q-px-xs"},Yt={class:"row items-center"},Ot={class:"col-12 col-md-2 q-px-sm"},Mt={class:"col-12 col-md-2 q-px-sm"},zt={class:"col-12 col-md-2 q-px-sm"},Et={class:"col-12 col-md-2 q-px-sm"},Xt={class:"col-12 col-md-2 q-px-sm"},Ht={class:"col-12 col-md-2 q-px-sm"},Bt={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"},It={class:"text-dark text-caption text-italic"},Lt=i("div",{class:"text-dark text-caption text-italic"},"Created by Ratio (Site/HC):",-1);function Wt(l,r,C,R,j,V){return f(),y("div",null,[s(Z,{flat:""},{default:n(()=>[s(H,null,{default:n(()=>[i("div",Vt,[i("div",Ft,[s(Z,null,{default:n(()=>[s(H,{class:"q-pa-sm bg-dark text-white"},{default:n(()=>[i("div",Rt,[i("div",Ct,[At,i("div",xt,"Total: "+c(l.rows.length)+" Requests",1)]),i("div",Pt,[s(ee,{round:"",dense:"",size:"md",color:"white",flat:"",icon:"refresh",onClick:r[0]||(r[0]=t=>l.loadData(!0))})])])]),_:1}),(f(!0),y(P,null,O(l.stats,(t,o)=>(f(),y(P,{key:o},[s(H,{class:"q-py-xs q-pr-xs q-pl-sm"},{default:n(()=>[i("div",Tt,[i("span",Ut,c(t.label)+": ",1),t.denominator?(f(),y("span",Nt,c(t.value)+" / "+c(t.denominator)+" ("+c((t.value/t.denominator*100).toFixed(2))+"%) ",1)):(f(),y("span",Qt,c(t.value),1))])]),_:2},1024),t.separate?(f(),x(ve,{key:0})):he("",!0)],64))),128))]),_:1})]),i("div",jt,[i("div",Yt,[i("div",Ot,[s(M,{dense:"",label:"Status","transition-show":"flip-up","transition-hide":"flip-down",modelValue:l.statusFilter,"onUpdate:modelValue":r[1]||(r[1]=t=>l.statusFilter=t),options:["Open","Closed","Pending"],clearable:""},null,8,["modelValue"])]),i("div",Mt,[s(M,{dense:"",label:"Project","transition-show":"flip-up","transition-hide":"flip-down",modelValue:l.hiringStatusFilter,"onUpdate:modelValue":r[2]||(r[2]=t=>l.hiringStatusFilter=t),options:l.hiringStatusOptions,clearable:""},null,8,["modelValue","options"])]),i("div",zt,[s(M,{dense:"",label:"Remove Project","transition-show":"flip-up","transition-hide":"flip-down",modelValue:l.dispositionFilter,"onUpdate:modelValue":r[3]||(r[3]=t=>l.dispositionFilter=t),options:l.hiringStatusOptions,clearable:""},null,8,["modelValue","options"])]),i("div",Et,[s(M,{dense:"",label:"Created by Project App","transition-show":"flip-up","transition-hide":"flip-down",modelValue:l.possibleReassignment,"onUpdate:modelValue":r[4]||(r[4]=t=>l.possibleReassignment=t),options:["Yes","No"],clearable:""},null,8,["modelValue"])]),i("div",Xt,[s(te,{"stack-label":"",dense:"",type:"date",modelValue:l.startDate,"onUpdate:modelValue":r[5]||(r[5]=t=>l.startDate=t),label:"Start Date"},null,8,["modelValue"])]),i("div",Ht,[s(te,{"stack-label":"",dense:"",type:"date",modelValue:l.endDate,"onUpdate:modelValue":r[6]||(r[6]=t=>l.endDate=t),label:"End Date"},null,8,["modelValue"])])])])])]),_:1})]),_:1}),i("div",null,[s(ue,{title:"Requests","title-class":"text-h5 text-primary",columns:l.columns,rows:l.rows,"row-key":t=>t[3],class:"q-pa-sm",pagination:{rowsPerPage:100},"table-header-class":"bg-dark text-white","no-data-label":"There are no requests",dense:"",loading:l.loading},{header:n(t=>[s(W,{class:"bg-dark text-white",props:t},{default:n(()=>[s(T,{"auto-width":""}),s(T,{"auto-width":""},{default:n(()=>[S("Date")]),_:1}),s(T,{"auto-width":""},{default:n(()=>[S("Opened")]),_:1}),s(T,{"auto-width":""},{default:n(()=>[S("Duration")]),_:1}),(f(!0),y(P,null,O(t.cols,o=>(f(),x(T,{key:o.name,props:t},{default:n(()=>[S(c(o.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:n(t=>[s(W,{props:t},{default:n(()=>[s(U,{"auto-width":""},{default:n(()=>[s(L,{class:"cursor-pointer",size:l.$q.screen.gt.sm?"sm":"xs",color:"info",round:"",dense:"",onClick:o=>l.viewRelease(t.row),name:t.expand?"visibility_off":"visibility"},null,8,["size","onClick","name"])]),_:2},1024),s(U,{"auto-width":""},{default:n(()=>[S(c(l.$dayjs(t.row[1].$d).format("MM/DD/YYYY hh:mm:ss")||""),1)]),_:2},1024),s(U,{"auto-width":""},{default:n(()=>[S(c(t.row[82].$d?l.$dayjs(t.row[82].$d).format("MM/DD/YYYY hh:mm:ss"):""),1)]),_:2},1024),s(U,{"auto-width":""},{default:n(()=>[S(c(t.row[82].$d?l.$dayjs(t.row[82].$d).diff(l.$dayjs(t.row[1].$d),"hour",!0).toFixed(2):""),1)]),_:2},1024),(f(!0),y(P,null,O(t.cols,o=>(f(),x(U,{key:o.name,props:t},{default:n(()=>[S(c(o.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"no-data":n(({message:t})=>[i("div",Bt,[s(L,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),i("span",null,c(t),1)])]),"top-right":n(()=>[i("div",It,"(Total: "+c(l.rows.length)+" requests)",1),s(ee,{color:"secondary",flat:"","icon-right":"refresh",label:"Refresh",onClick:r[7]||(r[7]=t=>l.loadData(!0))})]),"top-left":n(()=>[Lt]),loading:n(()=>[s(me,{showing:"",color:"primary"})]),_:1},8,["columns","rows","row-key","loading"])])])}var Gt=se(St,[["render",Wt]]);const Jt=ae({name:"Admin",components:{ReleasesPanel:Xe,AssignmentsPanel:ct,DeploymentsPanel:qt,RequestPanel:Gt},setup(){const l=p(0);return ne(),{tab:l}}}),Kt={class:"q-pa-sm"};function Zt(l,r,C,R,j,V){const t=oe("releases-panel"),o=oe("assignments-panel"),g=oe("deployments-panel"),$=oe("request-panel");return f(),x(ye,{style:{"max-width":"100vw"}},{default:n(()=>[i("div",Kt,[s($e,{class:"q-py-xs q-px-sm bg-info text-white shadow-2 rounded-borders",align:"left",modelValue:l.tab,"onUpdate:modelValue":r[0]||(r[0]=_=>l.tab=_),dense:"","indicator-color":"accent","outside-arrows":"","mobile-arrows":"","inline-label":""},{default:n(()=>[s(ie,{name:0,label:"Releases"}),s(ie,{name:1,label:"Assignments"}),s(ie,{name:2,label:"Deployments"}),s(ie,{name:3,label:"Requests"})]),_:1},8,["modelValue"]),s(we,{modelValue:l.tab,"onUpdate:modelValue":r[1]||(r[1]=_=>l.tab=_),animated:"",class:"q-px-none"},{default:n(()=>[s(re,{class:"q-px-xs",name:0},{default:n(()=>[s(t)]),_:1}),s(re,{class:"q-px-xs",name:1},{default:n(()=>[s(o)]),_:1}),s(re,{class:"q-px-xs",name:2},{default:n(()=>[s(g)]),_:1}),s(re,{class:"q-px-xs",name:3},{default:n(()=>[s($)]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var Ul=se(Jt,[["render",Zt]]);export{Ul as default};
