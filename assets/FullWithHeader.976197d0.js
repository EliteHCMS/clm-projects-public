import{Q as y,a as S}from"./QHeader.63e47eaa.js";import{Q}from"./QToolbar.1e286d91.js";import{Q as k,a as w}from"./QLayout.671ebad3.js";import{_ as I,bV as B,bX as C,b7 as n,B as a,as as i,bt as t,d as e,C as p,ae as H,aa as c,at as x,b3 as T,b1 as E,E as F}from"./index.8838c464.js";import{u as U}from"./i18n.c69e89dd.js";import{u as V,b as q}from"./app.42c36b1f.js";import{_ as N}from"./version.039f5186.js";import"./QResizeObserver.9199488f.js";import"./_commonjsHelpers.a26ce4be.js";import"./dayjs.106d80ab.js";import"./localForage.ca6e9d39.js";import"./index.04bc0a32.js";import"./QList.43880dff.js";import"./QMenu.b8edc490.js";import"./position-engine.cba8bd09.js";import"./selection.26380b58.js";import"./ClosePopup.c3165d18.js";const R=o=>(T("data-v-040f170c"),o=o(),E(),o),W=R(()=>F("img",{class:"q-mr-sm q-ml-sm",src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo-white.png",alt:"BrandSafway Logo",height:"25"},null,-1)),L={key:0},P={key:1},$={__name:"FullWithHeader",setup(o){const s=B(),{locale:r}=U(),{logout:_}=V(),m=q(),{onKiosk:l,toolbarTitle:u,startPageEnabled:d}=C(m),f=async()=>{_().then(()=>{d.value&&l.value?s.replace({name:"start"}):s.replace({name:"login"})})},h=()=>{r.value!=="en-US"&&(r.value="en-US"),f()};return(v,j)=>{const g=n("router-view"),b=n("v-idle");return a(),i(w,{view:"hHh lpR fFf"},{default:t(()=>[e(y,{elevated:""},{default:t(()=>[e(Q,{style:{height:"62px"}},{default:t(()=>[W,e(S,null,{default:t(()=>[v.$q.screen.lt.sm?(a(),p("span",L)):(a(),p("span",P,H(c(u)),1))]),_:1})]),_:1})]),_:1}),e(k,null,{default:t(()=>[e(g)]),_:1}),c(l)?(a(),i(b,{key:0,onIdle:h,duration:600,style:{display:"none"}})):x("",!0),e(N)]),_:1})}}};var le=I($,[["__scopeId","data-v-040f170c"]]);export{le as default};
