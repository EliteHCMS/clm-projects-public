import{Q as ta}from"./QImg.39d088e2.js";import{_ as oa,c4 as ra,r as s,c as xe,w as he,aY as se,z as p,am as b,bh as o,A as Pe,d as t,an as y,C as N,c2 as f,aa as w,bE as sa,bD as na,cx as F,bX as X,E as ia,cy as ge,c6 as z,at as J,c3 as be,cz as ua}from"./index.f143ec23.js";import{Q as da}from"./QForm.b305693a.js";import{Q as ma}from"./QPage.dbb8c2e6.js";import{u as ca}from"./use-quasar.58a0a6a4.js";import{a as fa,c as O,d as va,b as pa,u as Q}from"./array.337b6c82.js";import{u as ha}from"./i18n.b03e020c.js";import{c as ga,K as ne,q as x}from"./quickbase.f7f31bf8.js";import{p as ba}from"./VueTelInput.0c4f27a3.js";import{_ as ya}from"./languageSelector.9f44297a.js";import{c as wa}from"./carousel.401f77fc.js";import{api as ye}from"./api.df21783a.js";import{dayjs as we}from"./dayjs.bcafcaf8.js";import"./_commonjsHelpers.dfee5925.js";import"./localForage.6a9e6b1f.js";import"./index.7dbe61ef.js";import"./QSelect.542b2ebc.js";import"./QChip.3a54d69e.js";import"./QMenu.a4bb863e.js";import"./position-engine.c88d530e.js";import"./selection.7562683d.js";import"./rtl.65b79c69.js";import"./use-panel.3dc9c77d.js";import"./touch.d8ab472d.js";import"./use-fullscreen.319f41c2.js";const Na={name:"Register",props:["phoneTemp","emailTemp"],components:{phoneNumberInput:ba,carousel:wa,languageSelector:ya},setup(r){const a=ca(),ie=ra(),{t:e}=ha(),{currentUserType:_}=ga(),A=s(!1),K=s(!1),ee=s(10),d=s(null),ue=s(!1),u=s("phoneNumber"),Ne=s("register"),H=s(!1),Ee=s(!1),de=s([]),me=s([]),L=s(!1),ae=s(!1),D=s(null),W=s(null),$=s(0),q=s(!1),n=s(null),P=s(!1),ce=s(!1),le=s(!1),qe=s(null),te=s(null),Ae=xe(()=>{const l=new RegExp("^[0-9]{"+ee.value+"}","g");return fa({firstName:O().required().label(`${e("firstName")}`),lastName:O().required().label(`${e("lastName")}`),email:O().email(`${e("validEmailIsRequired")}`).required().label(`${e("email")}`),phoneNumber:O().matches(l,{excludeEmptyString:!0,message:`${e("validPhoneIsRequired")}`}).required().label(`${e("phoneNumber")}`),password:O().required().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,{excludeEmptyString:!0,message:`${e("passwordRules")}`}).nullable(),passwordConfirmation:O().oneOf([va("password"),null],`${e("passwordMustMatch")}`)})}),Ie=xe(()=>fe.value===D.value);_==="Candidate"||ie.push("/");const{errors:_e,meta:Ce}=pa({validationSchema:Ae,initialValues:{firstName:"",lastName:"",phoneNumber:"",email:"",password:"",passwordConfirmation:""}}),{value:k,errorMessage:De,meta:ke}=Q("firstName"),{value:U,errorMessage:Ue,meta:Se}=Q("lastName"),{value:i,errorMessage:Ve,setErrors:j,meta:Te}=Q("phoneNumber"),{value:I,errorMessage:Re,setErrors:Me,meta:Oe}=Q("email"),{value:oe,errorMessage:Qe,meta:Le}=Q("password"),{value:$e,errorMessage:je,meta:Be}=Q("passwordConfirmation"),{value:fe,errorMessage:Fe,meta:Xe}=Q("codeConfirmation",O().matches(/^[0-9]{6}/g,{excludeEmptyString:!0,message:`${e("validPhoneIsRequired")}`}).required().oneOf([D.value],`${e("codeMustMatch")}`)),ze=s(!0);r.phoneTemp&&(i.value=r.phoneTemp),r.emailTemp&&(I.value=r.emailTemp);const Je=l=>{ee.value=l};he(i,l=>{de.value.includes(l)?(j(`${e("phoneNumberAlreadyInUse")}`),A.value=!1,a.notify({type:"negative",message:`${e("phoneNumberAlreadyInUse")}`,timeout:7e3,position:a.screen.lt.md?"top":"top-right"}),L.value=!1,H.value=!0):me.value.includes(l)&&(j(`${e("validPhoneIsRequired")}`),A.value=!1,a.notify({type:"negative",message:`${e("validPhoneIsRequired")}`,timeout:7e3,position:a.screen.lt.md?"top":"top-right"}))}),he($,l=>{l===0&&(D.value=null,W.value=null),L.value=!0}),he(fe,async l=>{le.value=!0,Number(l)===D.value?(ae.value=!0,le.value=!1,ce.value=!0,await la(),q.value?(await aa(),ce.value=!1):(await ve(),ce.value=!1)):le.value=!1});const Ke=l=>{d.value=l},He=async()=>{D.value=Math.floor(1e5+Math.random()*9e5),await ye.createMessageQueue({to:i.value,messagingServiceSid:"MGd0e31773980318b7cdc5d2043117e27c",message:`${e("yourBrandSafwayVerificationCodeIs")} ${D.value}`,extRef:null,massText:!1}),W.value=we().add(1,"minute"),We()},We=()=>{const l=setInterval(()=>{$.value=we(W.value).valueOf()-we().valueOf(),$.value<=0&&($.value=0,clearInterval(l))},1e3)},Ze=()=>{$.value=0,qe.value=!1,H.value=!1,D.value=null,W.value=null,L.value=!1},Ge=l=>{const h=Math.floor(l/6e4),m=(l%6e4/1e3).toFixed(0);return h+":"+(m<10?"0":"")+m},Ye=async l=>{const m=[{8:{value:`{'20'.CT.'${l[35]}'}AND{'22'.CT.'${l[37]}'}AND({'24'.CT.'${l[35]}'}AND{'24'.CT.'${l[37]}'})AND({'27'.EX.'${d.value?d.value.dialCode:"1"}${i.value}'}OR{'27'.EX.'${i.value}'})AND{'26'.EX.'${l[6]}'}AND{'509'.EX.'false'}`},7:{value:"Employees"},9:{value:12}}],{data:C}=await x.fetchFromHiringApp({fields:m});return C[0]?C[0][3]:null},ea=async l=>{const h=await x.isUserLoggedIn(),m=await Ye(l),C=new Date,M={3:{value:l[3]},26:{value:C}};if(m)M[80]={value:m};else return!1;try{h?await x.updateUserData({fields:M}):await x.upsertRecordsXML({to:"br4pxrbs6",fieldsToReturn:[76],data:[M],formatObject:76})}catch(Z){console.log(Z)}},re=async l=>{const h={password:oe.value,userType:_,phoneNumber:`+${d.value?d.value.dialCode:"1"}${i.value}`};try{if(await x.login(h))return await ea(l),ie.push({path:"/"})}catch(m){console.log(m)}},ve=async()=>{P.value=!0;const l=I.value.match(/^([^@]*)@/)[1],h=await ne.genSalt(10),m=ne.hashSync(oe.value,h),C=Math.floor(1e5+Math.random()*9e5),M=new Date;if(q.value=!1,n.value=await ye.twilioLookup({phoneNumber:i.value}),n.value&&(i.e164=n.value.phoneNumber,delete n.value.url,delete n.value.price,delete n.value.phoneNumber,delete n.value.addOns),n.value&&n.value.validPhoneNumber===!1)return j(`${e("validPhoneIsRequired")}`),me.value.push(i.value),A.value=!1,a.notify({type:"negative",message:`${e("validPhoneIsRequired")}`,timeout:7e3,position:a.screen.lt.md?"top":"top-right"}),null;te.value=Object.assign({phoneNumber:i.value},d.value,n.value||{});const Z=[{6:{value:I.value},7:{value:m},8:{value:`+${d.value?d.value.dialCode:"1"}${i.value}`},9:{value:JSON.stringify(te.value)},10:{value:"Active"},11:{value:7},21:{value:C},32:{value:"Candidate"},35:{value:k.value.trim()},37:{value:U.value.trim()},23:{value:0},24:{value:0},25:{value:M},26:{value:M},33:{value:l},50:{value:ae.value}}],S=[{6:{value:I.value},7:{value:m},8:{value:`+${d.value?d.value.dialCode:"1"}${i.value}`},9:{value:JSON.stringify(te.value)},10:{value:"Active"},11:{value:7},21:{value:C},32:{value:"Candidate"},35:{value:k.value.trim()},37:{value:U.value.trim()},24:{value:0},26:{value:M},50:{value:ae.value}}];try{const{data:V,metadata:T}=await x.upsertRecordsXML({to:"br4pxrbs6",fieldsToReturn:[76],data:Z,formatObject:76});if(T.lineErrors){const R=T.lineErrors[1];let B=!1,v=!1,c=!1,pe=!1;if(R.forEach(g=>{g.includes('is not unique for unique formula field with ID "27"')&&(v=!0),g.includes('The field named "uniqueEmail" with field id 27 requires a unique value.')&&(v=!0),g.includes('is not unique for unique formula field with ID "28"')&&(c=!0),g.includes('The field named "uniquePhoneNumber" with field id 28 requires a unique value.')&&(c=!0)}),v)try{v=!1,pe=!0;const{data:g,metadata:G}=await x.findAndUpdateUser({email:I.value,firstName:k.value,lastName:U.value,userType:_,fields:S});if(G.lineErrors)G.lineErrors[1].forEach(E=>{E.includes('is not unique for unique formula field with ID "27"')&&(q.value=!0,v=!0),E.includes('The field named "uniqueEmail" with field id 27 requires a unique value.')&&(q.value=!0,v=!0),E.includes('is not unique for unique formula field with ID "28"')&&(q.value=!0,c=!0),E.includes('The field named "uniquePhoneNumber" with field id 28 requires a unique value.')&&(q.value=!0,c=!0)});else if(g.length===0)v=!0,pe=!1;else{const Y=g[0][76];return P.value=!1,await re(Y)}}catch{v=!0}if(c&&!pe)try{c=!1;const{data:g,metadata:G}=await x.findAndUpdateUser({phoneNumber:`+${d.value?d.value.dialCode:"1"}${i.value}`,firstName:k.value,lastName:U.value,userType:_,fields:S});if(G.lineErrors)G.lineErrors[1].forEach(E=>{E.includes('is not unique for unique formula field with ID "27"')&&(q.value=!0,v=!0),E.includes('The field named "uniqueEmail" with field id 27 requires a unique value.')&&(q.value=!0,v=!0),E.includes('is not unique for unique formula field with ID "28"')&&(q.value=!0,c=!0),E.includes('The field named "uniquePhoneNumber" with field id 28 requires a unique value.')&&(q.value=!0,c=!0)});else if(g.length===0)c=!0;else{const Y=g[0][76];return P.value=!1,await re(Y)}}catch{c=!0}v&&(P.value=!1,Me(`${e("emailAlreadyInUse")}`),K.value=!1,a.notify({type:"negative",message:`${e("emailAlreadyInUse")}`,timeout:7e3,position:a.screen.lt.md?"top":"top-right"})),c&&(P.value=!1,B=!0,j(`${e("phoneNumberAlreadyInUse")}`),de.value.push(i.value),A.value=!1,a.notify({type:"negative",message:`${e("phoneNumberAlreadyInUse")}`,timeout:7e3,position:a.screen.lt.md?"top":"top-right"})),B&&R.length===1&&(P.value=!1,L.value=!1,H.value=!0)}else{const R=V[0][76];return P.value=!1,await re(R)}return V}catch(V){P.value=!1,console.log(V)}},aa=async()=>{const l=await ne.genSalt(10),h=ne.hashSync(oe.value,l),m=Math.floor(1e5+Math.random()*9e5),C=new Date;if(n.value||(n.value=await ye.twilioLookup({phoneNumber:i.value}),n.value&&(delete n.value.url,delete n.value.price,delete n.value.phoneNumber,delete n.value.addOns)),n.value&&(i.e164=n.value.phoneNumber),n.value&&n.value.validPhoneNumber===!1)return j(`${e("validPhoneIsRequired")}`),me.value.push(i.value),A.value=!1,a.notify({type:"negative",message:`${e("validPhoneIsRequired")}`,timeout:7e3,position:a.screen.lt.md?"top":"top-right"}),null;const M=Object.assign({phoneNumber:i.value},d.value,n.value||{}),Z=[{6:{value:I.value},7:{value:h},8:{value:`+${d.value?d.value.dialCode:"1"}${i.value}`},9:{value:JSON.stringify(M)},10:{value:"Active"},11:{value:7},21:{value:m},32:{value:"Candidate"},35:{value:k.value.trim()},37:{value:U.value.trim()},24:{value:0},26:{value:C},50:{value:ae.value}}];try{const{data:S,metadata:V}=await x.findAndUpdateUser({email:I.value,firstName:k.value,lastName:U.value,userType:_,fields:Z});if(V.lineErrors){const T=V.lineErrors[1];let R=!1,B=!1,v=!1;T.forEach(c=>{c.includes('is not unique for unique formula field with ID "27"')&&(B=!0),c.includes('The field named "uniqueEmail" with field id 27 requires a unique value.')&&(B=!0),c.includes('is not unique for unique formula field with ID "28"')&&(v=!0),c.includes('The field named "uniquePhoneNumber" with field id 28 requires a unique value.')&&(v=!0)}),B&&(Me(`${e("emailAlreadyInUse")}`),K.value=!1,a.notify({type:"negative",message:`${e("emailAlreadyInUse")}`,timeout:7e3,position:a.screen.lt.md?"top":"top-right"})),v&&(R=!0,j(`${e("phoneNumberAlreadyInUse")}`),de.value.push(i.value),A.value=!1,a.notify({type:"negative",message:`${e("phoneNumberAlreadyInUse")}`,timeout:7e3,position:a.screen.lt.md?"top":"top-right"})),R&&T.length===1&&(L.value=!1,H.value=!0)}else{const T=S[0][76];return await re(T)}return S}catch(S){console.log(S)}},la=async()=>{try{const l=new Date,h={phoneNumber:"N/A",name:"United States",iso2:"US",dialCode:"1",iso2sm:"us",callerName:null,countryCode:"US",nationalFormat:"N/A",carrier:null,validPhoneNumber:!1},m=[{8:{value:""},9:{value:JSON.stringify(h)},26:{value:l},50:{value:!1},111:{value:!0}}];return await x.findAndUpdateUser({phoneNumber:`+${d.value?d.value.dialCode:"1"}${i.value}`,userType:_,fields:m})}catch(l){console.log(l)}};return{firstName:k,lastName:U,email:I,phoneNumber:i,password:oe,passwordConfirmation:$e,isPwd:ze,codeConfirmation:fe,verifyExistingPhoneNumber:Ee,phoneNumberConfirmed:qe,verifyingCode:le,validPhone:A,validEmail:K,step:Ne,validPassword:ue,loginType:u,firstNameMeta:ke,lastNameMeta:Se,phoneNumberMeta:Te,emailMeta:Oe,passwordMeta:Le,passwordConfirmationMeta:Be,codeConfirmationMeta:Xe,creatingAccount:P,firstNameMessage:De,lastNameMessage:Ue,passwordMessage:Qe,phoneNumberMessage:Ve,emailMessage:Re,passwordConfirmationMessage:je,errors:_e,meta:Ce,codeConfirmationMessage:Fe,updatePhoneMaxLength:Je,createAccount:ve,updateCountry:Ke,phoneNumberPrompt:H,sendCode:He,codeExpiration:W,countDown:$,millisToMinutesAndSeconds:Ge,codePrompt:L,closePhoneNumberPrompt:Ze,codeRules:Ie,onSubmit:l=>{Ne.value==="register"&&Ce.valid?ve():l.preventDefault()},phoneDetails:te}}},qa={key:0,class:"col-md-7 col-lg-8 col-lx-8"},Ca={class:"col-xs-12 col-sm-12 col-md-5 col-lg-4 col-lx-4 row justify-center items-center"},Ma={class:"text-dark"},xa={class:"row q-col-gutter-xs"},Pa={class:"row q-col-gutter-xs"},Ea={class:"row q-col-gutter-xs"},Aa={class:"row q-col-gutter-xs"},Ia={class:"row justify-center"},_a={class:"text-h6"},Da={class:"text-h6"},ka={class:"q-gutter-lg"},Ua={class:"text-h6"};function Sa(r,a,ie,e,_,A){const K=se("carousel"),ee=se("phone-number-input"),d=se("router-link"),ue=se("languageSelector");return p(),b(ma,{class:"window-height window-width row"},{default:o(()=>[r.$q.screen.lt.md?y("",!0):(p(),Pe("div",qa,[t(K)])),N("div",Ca,[t(be,{class:"register-card",flat:""},{default:o(()=>[t(f,{style:{"padding-left":"30px","padding-right":"30px"}},{default:o(()=>[t(ta,{src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo.svg",fit:"scale-down",class:"register-logo full-width"})]),_:1}),t(f,{class:"text-center register-description"},{default:o(()=>[N("p",Ma,w(r.$t("register")),1)]),_:1}),t(f,null,{default:o(()=>[t(da,{class:"q-px-xs q-pt-xs",onSubmit:a[7]||(a[7]=sa(()=>{},["prevent"])),onKeyup:na(e.onSubmit,["enter"])},{default:o(()=>[N("div",xa,[t(F,{class:"col-xs-12 col-sm-6 q-pb-lg",clearable:"",outlined:"",modelValue:e.firstName,"onUpdate:modelValue":a[0]||(a[0]=u=>e.firstName=u),type:"text",autocomplete:"given-name",label:r.$t("firstName"),tabindex:"1",name:"firstName",error:!!(e.firstNameMessage&&e.firstNameMeta.validated),"error-message":e.firstNameMessage},{prepend:o(()=>[t(X,{name:"person"})]),_:1},8,["modelValue","label","error","error-message"]),t(F,{class:"col-xs-12 col-sm-6",clearable:"",outlined:"",modelValue:e.lastName,"onUpdate:modelValue":a[1]||(a[1]=u=>e.lastName=u),type:"text",autocomplete:"family-name",label:r.$t("lastName"),tabindex:"2",name:"lastName",error:!!(e.lastNameMessage&&e.lastNameMeta.validated),"error-message":e.lastNameMessage},{prepend:o(()=>[t(X,{name:"person_outline"})]),_:1},8,["modelValue","label","error","error-message"])]),N("div",Pa,[t(ee,{name:"phoneNumber",class:ia(["col-xs-12 col-sm-12",{"q-pb-lg":e.phoneNumberMessage&&e.phoneNumberMeta.validated}]),outlined:"",modelValue:e.phoneNumber,"onUpdate:modelValue":a[2]||(a[2]=u=>e.phoneNumber=u),label:r.$t("mobilePhoneNumber"),tabindex:"3",onMaxLengthChanged:e.updatePhoneMaxLength,error:!!(e.phoneNumberMessage&&e.phoneNumberMeta.validated),"error-message":e.phoneNumberMessage,onCountryChanged:e.updateCountry},null,8,["class","modelValue","label","onMaxLengthChanged","error","error-message","onCountryChanged"])]),N("div",Ea,[t(F,{class:"col-xs-12 col-sm-12 q-pb-lg",clearable:"",outlined:"",modelValue:e.email,"onUpdate:modelValue":a[3]||(a[3]=u=>e.email=u),type:"email",autocomplete:"email",label:r.$t("email"),tabindex:"4",name:"email",error:!!(e.emailMessage&&e.emailMeta.validated),"error-message":e.emailMessage},{prepend:o(()=>[t(X,{name:"email"})]),_:1},8,["modelValue","label","error","error-message"])]),N("div",Aa,[e.step==="register"?(p(),b(F,{key:0,class:"col-xs-12 col-sm-6 q-pb-md",outlined:"",modelValue:e.password,"onUpdate:modelValue":a[5]||(a[5]=u=>e.password=u),type:e.isPwd?"password":"text",autocomplete:"current-password",label:r.$t("password"),tabindex:"5",error:!!(e.passwordMessage&&e.passwordMeta.validated),"error-message":e.passwordMessage},{append:o(()=>[t(X,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[4]||(a[4]=u=>e.isPwd=!e.isPwd)},null,8,["name"])]),prepend:o(()=>[t(X,{name:"lock"})]),_:1},8,["modelValue","type","label","error","error-message"])):y("",!0),e.step==="register"?(p(),b(F,{key:1,class:"col-xs-12 col-sm-6 q-pb-md",outlined:"",modelValue:e.passwordConfirmation,"onUpdate:modelValue":a[6]||(a[6]=u=>e.passwordConfirmation=u),type:"password",autocomplete:"new-password",label:r.$t("confirmPassword"),tabindex:"6",error:!!(e.passwordConfirmationMessage&&e.passwordConfirmationMeta.validated),"error-message":e.passwordConfirmationMessage},{prepend:o(()=>[t(X,{name:"lock"})]),_:1},8,["modelValue","label","error","error-message"])):y("",!0)])]),_:1},8,["onKeyup"])]),_:1}),t(ge,{class:"q-px-lg"},{default:o(()=>[e.step==="register"?(p(),b(z,{key:0,onClick:e.createAccount,loading:e.creatingAccount,size:"lg",color:"primary",class:"full-width text-white",label:r.$t("createAccount"),tabindex:e.meta.valid?"7":"-1",disable:!e.meta.valid},null,8,["onClick","loading","label","tabindex","disable"])):y("",!0)]),_:1}),t(f,{class:"text-center q-pa-sm"},{default:o(()=>[t(d,{to:"/login",class:"text-grey-6",tabindex:e.meta.valid?"8":"7"},{default:o(()=>[J(w(r.$t("alreadyHaveAnAccount")),1)]),_:1},8,["tabindex"])]),_:1}),t(f,{class:"q-pl-lg q-pa-sm"},{default:o(()=>[N("div",Ia,[t(ue,{dense:"",borderless:""})])]),_:1})]),_:1}),t(ua,{modelValue:e.phoneNumberPrompt,"onUpdate:modelValue":a[11]||(a[11]=u=>e.phoneNumberPrompt=u),persistent:""},{default:o(()=>[e.codePrompt?e.codePrompt?(p(),b(be,{key:1,style:{"min-width":"350px"}},{default:o(()=>[t(f,null,{default:o(()=>[N("div",Ua,w(r.$t("mobilePhoneVerification")),1)]),_:1}),t(f,{class:"q-pt-none"},{default:o(()=>[J(w(r.$t("textMessageWithCodeSent")),1)]),_:1}),t(f,{class:"q-py-none q-p"},{default:o(()=>[t(F,{class:"col-xs-12 col-sm-6 q-pb-md",clearable:"",outlined:"",modelValue:e.codeConfirmation,"onUpdate:modelValue":a[9]||(a[9]=u=>e.codeConfirmation=u),loading:e.verifyingCode,type:"text",autocomplete:"one-time-code",inputmode:"numeric",pattern:"[0-9]*",label:r.$t("code"),tabindex:"1",maxlength:"6",minlength:"6",name:"codeConfirmation",error:!!e.codeRules,"error-message":"Code does not match!"},{append:o(()=>[J(w(e.millisToMinutesAndSeconds(e.countDown))+"\xA0 ",1)]),_:1},8,["modelValue","loading","label","error"])]),_:1}),t(f,{class:"q-py-none row justify-center"},{default:o(()=>[e.countDown===0?(p(),Pe("a",{key:0,onClick:a[10]||(a[10]=(...u)=>e.sendCode&&e.sendCode(...u)),class:"text-grey-6",href:"javascript:void(0);"},w(r.$t("resendCode")),1)):y("",!0)]),_:1}),t(ge,{align:"right",class:"text-primary"},{default:o(()=>[t(z,{flat:"",label:r.$t("cancel"),onClick:e.closePhoneNumberPrompt},null,8,["label","onClick"])]),_:1})]),_:1})):y("",!0):(p(),b(be,{key:0,style:{"min-width":"350px"}},{default:o(()=>[e.phoneNumberConfirmed?y("",!0):(p(),b(f,{key:0},{default:o(()=>[N("div",_a,w(r.$t("thisPhoneNumberAlreadyInUse")),1)]),_:1})),e.phoneNumberConfirmed?(p(),b(f,{key:1},{default:o(()=>[N("div",Da,w(r.$t("mobilePhoneVerification")),1)]),_:1})):y("",!0),e.phoneNumberConfirmed?y("",!0):(p(),b(f,{key:2,class:"q-pt-none"},{default:o(()=>[J(w(r.$t("confirmPhoneNumberBelow"))+" "+w(r.$t("verificationWillBeRequired")),1)]),_:1})),t(f,{class:"q-pt-none"},{default:o(()=>[J(w(e.phoneDetails.nationalFormat),1)]),_:1}),e.phoneNumberConfirmed?y("",!0):(p(),b(f,{key:3,class:"q-pt-none"},{default:o(()=>[N("div",ka,[t(z,{color:"primary",label:r.$t("yes"),onClick:a[8]||(a[8]=u=>e.phoneNumberConfirmed=!0)},null,8,["label"]),t(z,{color:"primary",label:r.$t("no"),onClick:e.closePhoneNumberPrompt},null,8,["label","onClick"])])]),_:1})),e.phoneNumberConfirmed?(p(),b(f,{key:4,class:"q-pt-none"},{default:o(()=>[J(w(r.$t("phoneNumberNeedsToBeVerified")),1)]),_:1})):y("",!0),e.phoneNumberConfirmed?(p(),b(f,{key:5,class:"q-pt-none"},{default:o(()=>[t(z,{color:"primary",label:r.$t("sendCode"),onClick:e.sendCode},null,8,["label","onClick"])]),_:1})):y("",!0),t(ge,{align:"right",class:"text-primary"},{default:o(()=>[t(z,{flat:"",label:r.$t("cancel"),onClick:e.closePhoneNumberPrompt},null,8,["label","onClick"])]),_:1})]),_:1}))]),_:1},8,["modelValue"])])]),_:1})}var nl=oa(Na,[["render",Sa],["__scopeId","data-v-2c5592fd"]]);export{nl as default};
