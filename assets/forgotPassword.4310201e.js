var te=Object.defineProperty,se=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var H=(n,r,o)=>r in n?te(n,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[r]=o,S=(n,r)=>{for(var o in r||(r={}))re.call(r,o)&&H(n,o,r[o]);if(K)for(var o of K(r))oe.call(r,o)&&H(n,o,r[o]);return n},O=(n,r)=>se(n,le(r));import{Q as ne}from"./QImg.2dd2eb8d.js";import{_ as ue,bL as ie,r as h,c as R,w as C,aZ as me,A as d,an as V,bi as l,a7 as s,B as x,d as a,ao as p,D as Q,cw as _,ab as b,bF as de,bE as pe,cx as B,b as M,bI as U,as as ce,bO as W,E as ve,cy as fe,au as j,cz as ge}from"./index.df995f5f.js";import{Q as be}from"./QForm.bd2f8d44.js";import{Q as ye}from"./QPage.4a1eacda.js";import{u as he}from"./use-quasar.e1d67d94.js";import{c as I,u as P}from"./array.c3373e59.js";import{u as xe}from"./i18n.bd13b955.js";import{b as _e,q as Ne}from"./quickbase.95274e2f.js";import{p as we}from"./VueTelInput.8ff25b09.js";import{_ as $e}from"./languageSelector.fd2847de.js";import{c as ke}from"./carousel.9098f78b.js";import"./_commonjsHelpers.dfee5925.js";import"./dayjs.2c96dcd3.js";import"./localForage.3844ce44.js";import"./index.7dbe61ef.js";import"./api.c05f3e59.js";import"./QItemLabel.937e07e9.js";import"./QSelect.08716fd1.js";import"./QChip.20ea4134.js";import"./QMenu.de16f5ac.js";import"./position-engine.ed057110.js";import"./selection.15ff2c8a.js";import"./rtl.cf9bbe47.js";import"./use-panel.c6f94346.js";import"./touch.60582172.js";import"./use-fullscreen.ea1c9687.js";const qe={key:0,class:"col-md-7 col-lg-8 col-lx-8"},Ce={class:"col-xs-12 col-sm-12 col-md-5 col-lg-4 col-lx-4 row justify-center items-center"},Ve={key:0,class:"text-dark"},Qe={key:1,class:"text-dark"},Me={key:0,class:"row q-col-gutter-xs"},Ie={class:"text-grey-6",tabindex:"4"},Pe={class:"text-grey-6",tabindex:"5"},Ee={class:"row justify-center"},Se={__name:"forgotPassword",setup(n){const r=he(),o=ie(),{t:N}=xe(),{currentUserType:A}=_e(),c=h(!1),v=h(!1),L=h(10),u=h("username"),i=h("phoneNumber"),y=h(null),Z=R(()=>c.value||i.value==="phoneNumber"?I().email(`${N("validEmailIsRequired")}`).nullable():I().email(`${N("validEmailIsRequired")}`).required()),G=R(()=>{if(v.value||i.value==="email")return I().nullable();{const e=new RegExp("^[0-9]{"+L.value+"}","g");return I().matches(e,{excludeEmptyString:!0,message:`${N("validPhoneIsRequired")}`}).required()}}),{value:w,errorMessage:T,meta:J}=P("firstName"),{value:$,errorMessage:D,meta:X}=P("lastName"),{errorMessage:E,value:f}=P("email",Z),{errorMessage:k,value:g}=P("phone",G);A==="QuickBase User"&&o.push("/"),C(E,e=>{e||f.value===""?v.value=!1:v.value=!0}),C(f,e=>{(!e||e==="")&&(v.value=!1)}),C(k,e=>{e||g.value===""?c.value=!1:c.value=!0}),C(g,e=>{(!e||e==="")&&(c.value=!1)});const Y=e=>{y.value=e},ee=e=>{L.value=e},F=R(()=>!(c.value||v.value)),z=async()=>{const e={userType:A,firstName:w.value,lastName:$.value,email:v.value?f.value:null,phoneNumber:c.value?`+${y.value?y.value.dialCode:"1"}${g.value}`:null},{data:t}=await Ne.resetPassword(e);if(t.length===0)r.notify({position:"top-right",type:"negative",message:`${N("noUserFoundWithInformation")}`});else{const q=t[0][76];o.push({name:"code-confirmation",query:O(S(S({},y.value&&c.value&&{p:`${y.value?y.value.dialCode:"1"}${g.value}`}),v.value&&{e:`${f.value}`}),{rid:q[3],ac:!0,send:!0})})}},ae=e=>{u.value==="username"&&!F.value?z():e.preventDefault()};return(e,t)=>{const q=me("router-link");return d(),V(ye,{class:"window-height window-width row"},{default:l(()=>[s(r).screen.lt.md?p("",!0):(d(),x("div",qe,[a(ke)])),Q("div",Ce,[a(ge,{class:"auth-card",flat:""},{default:l(()=>[a(_,{style:{"padding-left":"30px","padding-right":"30px"}},{default:l(()=>[a(ne,{src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo.svg",fit:"scale-down",class:"auth-logo full-width"})]),_:1}),a(_,{class:"text-center auth-description"},{default:l(()=>[i.value==="email"&&u.value==="username"?(d(),x("p",Ve,b(e.$t("enterEmailSendCode")),1)):p("",!0),i.value==="phoneNumber"&&u.value==="username"?(d(),x("p",Qe,b(e.$t("enterPhoneSendCode")),1)):p("",!0)]),_:1}),a(_,null,{default:l(()=>[a(be,{class:"q-px-sm q-pt-sm",onSubmit:t[7]||(t[7]=de(()=>{},["prevent"])),onKeyup:pe(ae,["enter"])},{default:l(()=>[u.value==="username"?(d(),x("div",Me,[a(B,{class:"col-xs-12 col-sm-6 q-pb-lg",clearable:"",outlined:"",modelValue:s(w),"onUpdate:modelValue":t[0]||(t[0]=m=>M(w)?w.value=m:null),type:"text",autocomplete:"given-name",label:e.$t("firstName"),tabindex:"1",name:"firstName",error:!!(s(T)&&s(J).validated),"error-message":s(T)},{prepend:l(()=>[a(U,{name:"person"})]),_:1},8,["modelValue","label","error","error-message"]),a(B,{class:"col-xs-12 col-sm-6",clearable:"",outlined:"",modelValue:s($),"onUpdate:modelValue":t[1]||(t[1]=m=>M($)?$.value=m:null),type:"text",autocomplete:"family-name",label:e.$t("lastName"),tabindex:"2",name:"lastName",error:!!(s(D)&&s(X).validated),"error-message":s(D)},{prepend:l(()=>[a(U,{name:"person_outline"})]),_:1},8,["modelValue","label","error","error-message"])])):p("",!0),i.value==="email"&&u.value==="username"?(d(),V(B,{key:1,style:{"padding-bottom":"0px"},clearable:"",outlined:"",modelValue:s(f),"onUpdate:modelValue":t[3]||(t[3]=m=>M(f)?f.value=m:null),type:"email",label:e.$t("email"),tabindex:"3",error:!!s(E),"error-message":s(E),readonly:u.value!=="username"},ce({prepend:l(()=>[a(U,{name:"email"})]),_:2},[u.value!=="username"?{name:"append",fn:l(()=>[a(W,{round:"",dense:"",flat:"",icon:"edit",onClick:t[2]||(t[2]=m=>{u.value="username"})})]),key:"0"}:void 0]),1032,["modelValue","label","error","error-message","readonly"])):p("",!0),i.value==="phoneNumber"&&u.value==="username"?(d(),V(we,{key:2,outlined:"",modelValue:s(g),"onUpdate:modelValue":t[4]||(t[4]=m=>M(g)?g.value=m:null),label:e.$t("phoneNumber"),tabindex:"3",onMaxLengthChanged:ee,style:ve(s(k)?"padding-bottom: 20px;":"padding-bottom: 0px;"),error:!!s(k),"error-message":s(k),onCountryChanged:Y},null,8,["modelValue","label","style","error","error-message"])):p("",!0),a(_,{class:"text-right q-pa-none"},{default:l(()=>[i.value==="email"?(d(),x("a",{key:0,onClick:t[5]||(t[5]=m=>i.value="phoneNumber"),class:"text-grey-6",href:"javascript:void(0);",tabindex:"4"},b(e.$t("usePhoneNumber")),1)):p("",!0),i.value==="phoneNumber"?(d(),x("a",{key:1,onClick:t[6]||(t[6]=m=>i.value="email"),class:"text-grey-6",href:"javascript:void(0);",tabindex:"4"},b(e.$t("useEmail")),1)):p("",!0)]),_:1})]),_:1},8,["onKeyup"])]),_:1}),a(fe,{class:"q-px-lg"},{default:l(()=>[u.value==="username"?(d(),V(W,{key:0,unelevated:"",size:"lg",color:"primary",class:"full-width text-white",label:e.$t("resetPassword"),tabindex:"3",disabled:s(F),onClick:z},null,8,["label","disabled"])):p("",!0)]),_:1}),a(_,{class:"text-center q-pa-sm"},{default:l(()=>[Q("p",Ie,[a(q,{to:"/login",class:"text-grey-6"},{default:l(()=>[j(b(e.$t("returnToLogin")),1)]),_:1})]),Q("p",Pe,[j(b(e.$t("needAnAccountQuestion"))+" ",1),a(q,{to:"/register",class:"text-grey-6"},{default:l(()=>[j(b(e.$t("register")),1)]),_:1})])]),_:1}),a(_,{class:"q-pl-lg q-pa-sm"},{default:l(()=>[Q("div",Ee,[a($e,{dense:"",borderless:""})])]),_:1})]),_:1})])]),_:1})}}};var ua=ue(Se,[["__scopeId","data-v-a4a59948"]]);export{ua as default};
