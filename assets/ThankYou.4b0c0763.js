import{_ as g,l as k,bS as $,bU as q,y as s,z as o,B as f,D as a,C as B,ab as r}from"./index.a03c16e1.js";import{u as x}from"./i18n.8ef2ea34.js";import{u as T,e as C,t as D,b as z,k as A,q as R}from"./app.8e730c48.js";import"./_commonjsHelpers.a26ce4be.js";import"./dayjs.8e614a0b.js";import"./localForage.8d2e0f2e.js";import"./index.04bc0a32.js";const w=k({name:"Thanks",setup(){const e=$(),n=T(),l=C(),{locale:i}=x(),{storeBoardApp:c}=D(),{updateEmployeeData:u,employeeData:p}=l,{onKiosk:d,checkedIn:v}=z(),y=A(),{onJobBoard:t,profileData:b}=q(y),h=async()=>{i.value="en-US",n.logout().then(()=>{e.replace({name:"login"})})};async function S(){const m={122:{value:1}};(p.reset||p[79]===0)&&Object.assign(m,{79:{value:1}}),t.value||await R.upsertRecordsXML({to:"bp3gci48x",data:[{3:{value:b.value[3].value},80:{value:1}}],fieldsToReturn:[3]}),t.value||await u({fields:m}),setTimeout(d?async function(){h()}:function(){v?e.replace({path:"/"}):(c({}),e.replace({name:"jobs"}))},5e3)}return S(),{onJobBoard:t}}}),E={class:"fullscreen bg-primary text-white text-center q-pa-md flex flex-center"};function J(e,n,l,i,c,u){return s(),o("div",E,[f("div",null,[f("div",{class:a(e.$q.screen.gt.sm?"":"text-h5 q-mb-xl"),style:B(e.$q.screen.gt.sm?"font-size: 10vh":"")},r(e.$t("thankYouForCompleting")),7),e.onJobBoard?(s(),o("div",{key:1,class:a(e.$q.screen.gt.sm?"text-h5":"text-body1")},r(e.$t("pleaseCheckOtherJobs")),3)):(s(),o("div",{key:0,class:a(e.$q.screen.gt.sm?"text-h5":"text-body1")},r(e.$t("pleaseHaveASeat")),3))])])}var H=g(w,[["render",J]]);export{H as default};
