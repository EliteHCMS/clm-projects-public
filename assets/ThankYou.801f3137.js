import{_ as k,l as S,bV as $,bX as q,B as s,C as o,E as f,H as a,G as B,ae as r}from"./index.8838c464.js";import{u as x}from"./i18n.c69e89dd.js";import{u as T,e as C,t as A,b as D,k as E,q as R}from"./app.42c36b1f.js";import"./_commonjsHelpers.a26ce4be.js";import"./dayjs.106d80ab.js";import"./localForage.ca6e9d39.js";import"./index.04bc0a32.js";const w=S({name:"Thanks",setup(){const e=$(),n=T(),l=C(),{locale:i}=x(),{storeBoardApp:c}=A(),{updateEmployeeData:u,employeeData:p}=l,{onKiosk:d,checkedIn:v}=D(),h=E(),{onJobBoard:t,profileData:y}=q(h),b=async()=>{i.value="en-US",n.logout().then(()=>{e.replace({name:"login"})})};async function g(){const m={122:{value:1}};(p.reset||p[79]===0)&&Object.assign(m,{79:{value:1}}),t.value||await R.upsertRecordsXML({to:"bp3gci48x",data:[{3:{value:y.value[3].value},80:{value:1}}],fieldsToReturn:[3]}),t.value||await u({fields:m}),setTimeout(d?async function(){b()}:function(){v?e.replace({path:"/"}):(c({}),e.replace({name:"jobs"}))},5e3)}return g(),{onJobBoard:t}}}),z={class:"fullscreen bg-primary text-white text-center q-pa-md flex flex-center"};function J(e,n,l,i,c,u){return s(),o("div",z,[f("div",null,[f("div",{class:a(e.$q.screen.gt.sm?"":"text-h5 q-mb-xl"),style:B(e.$q.screen.gt.sm?"font-size: 10vh":"")},r(e.$t("thankYouForCompleting")),7),e.onJobBoard?(s(),o("div",{key:1,class:a(e.$q.screen.gt.sm?"text-h5":"text-body1")},r(e.$t("pleaseCheckOtherJobs")),3)):(s(),o("div",{key:0,class:a(e.$q.screen.gt.sm?"text-h5":"text-body1")},r(e.$t("pleaseHaveASeat")),3))])])}var V=k(w,[["render",J]]);export{V as default};
