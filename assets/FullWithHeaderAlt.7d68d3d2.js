import{Q as A,a as H}from"./QHeader.2be79146.js";import{_ as I,bL as z,bN as y,aZ as b,A as a,an as n,bi as s,d as t,B as f,ao as i,ab as T,a7 as e,D as $,bO as p,bI as v}from"./index.df995f5f.js";import{Q as E}from"./QToolbar.f7ec93c9.js";import{a as F,Q as N}from"./QLayout.da2f4985.js";import{u as U}from"./i18n.bd13b955.js";import{b as K,c as L,q as O}from"./quickbase.95274e2f.js";import{_ as R}from"./version.b5e467d5.js";import"./QResizeObserver.b8913258.js";import"./_commonjsHelpers.dfee5925.js";import"./dayjs.2c96dcd3.js";import"./localForage.3844ce44.js";import"./index.7dbe61ef.js";import"./api.c05f3e59.js";import"./QList.e037d225.js";import"./QMenu.de16f5ac.js";import"./position-engine.ed057110.js";import"./selection.15ff2c8a.js";import"./ClosePopup.c02c7902.js";const V={key:0,class:"q-mr-sm q-ml-sm",src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo-white.png",alt:"BrandSafway Logo",height:"25"},W={key:0},D={key:1},M={class:"q-gutter-sm row items-center no-wrap"},P={__name:"FullWithHeaderAlt",setup(j){const l=z(),{locale:u}=U(),w=K(),k=L(),{setBookmarksOnly:_}=k,{kioskAccount:o,getBookMarksOnly:d}=y(k),{onKiosk:r,toolbarTitle:S,startPageEnabled:m,homeButtonEnabled:B}=y(w),g=()=>{u.value!=="en-US"&&(u.value="en-US"),m.value&&r.value?l.replace({name:"start"}):l.replace({name:"login"})},Q=()=>{u.value!=="en-US"&&(u.value="en-US"),O.logoutKiosk(),m.value&&r.value&&o.value&&o.value[45]?l.replace({name:"start"}):m.value&&r.value&&o.value&&o.value[45]===!1&&d.value?(_(!1,!0),l.replace({name:"login"})):l.replace({name:"login"})};return(h,c)=>{const C=b("router-view"),q=b("v-idle");return a(),n(N,{view:"hHh lpR fFf"},{default:s(()=>[t(H,{elevated:""},{default:s(()=>[t(E,{style:{height:"62px"}},{default:s(()=>[h.$q.screen.gt.sm?(a(),f("img",V)):i("",!0),t(A,null,{default:s(()=>[h.$q.screen.lt.sm?(a(),f("span",W)):(a(),f("span",D,T(e(S)),1))]),_:1}),$("div",M,[e(o)&&e(o)[45]===!1&&!e(d)?(a(),n(p,{key:0,flat:"",dense:"",color:"white",onClick:c[0]||(c[0]=x=>e(_)(!0,!0))},{default:s(()=>[t(v,{right:"",size:"2.2em",name:"lock_open"})]),_:1})):i("",!0),e(o)&&e(o)[45]===!1&&e(d)?(a(),n(p,{key:1,flat:"",dense:"",color:"white",onClick:c[1]||(c[1]=x=>e(_)(!1,!0))},{default:s(()=>[t(v,{right:"",size:"2.2em",name:"lock"})]),_:1})):i("",!0),t(p,{flat:"",dense:"",color:"white",onClick:Q},{default:s(()=>[t(v,{right:"",size:"2.2em",name:"logout"})]),_:1})])]),_:1})]),_:1}),t(F,null,{default:s(()=>[t(C)]),_:1}),e(r)?(a(),n(q,{key:0,onIdle:g,duration:300,style:{display:"none"}})):i("",!0),e(r)&&e(m)&&e(B)?(a(),n(p,{key:1,icon:"o_home",onClick:g,class:"z-max home-button-alt",size:"xl",ripple:!0})):i("",!0),t(R)]),_:1})}}};var _e=I(P,[["__scopeId","data-v-771f87d2"]]);export{_e as default};
