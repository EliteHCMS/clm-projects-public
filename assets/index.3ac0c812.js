import{_ as A,r as g,bV as L,c as r,b5 as x,A as Q,aq as T,br as i,D as s,d as n,cS as k,cT as y,ax as B,ac as E,cU as N}from"./index.af6d7727.js";import{Q as F}from"./QPage.3d5ce7e1.js";import{u as U}from"./use-quasar.2eaf8a48.js";import{c as $}from"./app.0cf6c26c.js";import"./dayjs.d6561f67.js";import{u as z}from"./dataStore.6800035f.js";import{P as G}from"./projectPipeline.afb5e9b3.js";import{_ as H}from"./projectSelector.bbbbf51c.js";import"./_commonjsHelpers.a26ce4be.js";import"./localForage.b83444b5.js";import"./api.aee798c5.js";import"./index.04bc0a32.js";import"./i18n.f52b7141.js";import"./QInnerLoading.a6dc0348.js";import"./QTable.a594cfe3.js";import"./QList.1bf12ac6.js";import"./QMarkupTable.20a8ae07.js";import"./QSelect.3c9e92f5.js";import"./QChip.5596a83c.js";import"./QMenu.6e91bc40.js";import"./position-engine.c080856a.js";import"./selection.0443513d.js";import"./rtl.b51694b1.js";import"./use-fullscreen.be03fc8d.js";import"./QTr.b62d6ab2.js";import"./QTd.c76309ed.js";import"./export-file.dc78ba05.js";const J={name:"Pipeline",components:{ProjectPipelineTable:G,projectSelector:H},setup(){const p=U(),l=$(),h=g(null),o=g(""),{getSelectedProject:d}=L(l),{fetchAllDeployments:v,fetchDeployments:u,fetchAllInProcess:m,fetchInProcess:c,fetchAllPending:j,fetchPending:q,getDeployments:P,getInProcess:D,getPending:S}=z(),a=r(()=>d.value?d.value[3]:null),b=r(()=>P(a.value).filter(e=>e[20]==="Complete")),C=r(()=>{const e=[];return P(a.value).forEach(t=>{t[31].toLowerCase().includes(o.value.toLowerCase())&&e.push(t)}),e}),I=r(()=>{const e=[];return S(a.value).forEach(t=>{t[25].toLowerCase().includes(o.value.toLowerCase())&&e.push(t)}),e}),R=r(()=>{const e=[];return D(a.value).forEach(t=>{t[39].toLowerCase().includes(o.value.toLowerCase())&&e.push(t)}),e}),V=r(()=>R.value.concat(I.value.concat(C.value)));async function w(e){if(p.loading.show(),a.value){const t=u({projectId:a.value,refresh:e}),f=c({projectId:a.value,refresh:e}),_=q({projectId:a.value,refresh:e});await t,await f,await _}else{const t=v({refresh:e}),f=m({refresh:e}),_=j({refresh:e});await t,await f,await _}p.loading.hide()}return w(),{projectFilter:h,arrived:b,allPipeline:V,search:o,loadData:w}}},K={class:"q-pt-sm"},M={class:"text-h5 text-dark"},O={class:"text-body2 text-italic q-ml-sm"},W=s("div",{class:"text-subtitle2 text-accent"},"The following people are currently in process or deployed for your job site(s).",-1),X={class:"row items-center"},Y={class:"col-12 col-md-3 q-px-sm"},Z={class:"col-12 col-md-3 q-px-sm"};function ee(p,l,h,o,d,v){const u=x("projectSelector"),m=x("project-pipeline-table");return Q(),T(F,{style:{"max-width":"100vw"}},{default:i(()=>[s("div",K,[n(k,{flat:""},{default:i(()=>[n(y,{class:"q-pb-none"},{default:i(()=>[s("div",M,[B(" Staffing Pipeline "),s("span",O,"("+E(o.allPipeline.length)+" total)",1)]),W]),_:1}),n(y,null,{default:i(()=>[s("div",X,[s("div",Y,[n(u,{dense:""})]),s("div",Z,[n(N,{dense:"",modelValue:o.search,"onUpdate:modelValue":l[0]||(l[0]=c=>o.search=c),label:"Search"},null,8,["modelValue"])])])]),_:1})]),_:1}),n(m,{rows:o.allPipeline,onRefreshData:l[1]||(l[1]=c=>o.loadData(!0))},null,8,["rows"])])]),_:1})}var Ce=A(J,[["render",ee]]);export{Ce as default};
