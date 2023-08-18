import{Q as ta}from"./QImg.de1d9040.js";import{_ as oa,bT as ra,r as s,c as xe,w as he,b5 as se,A as p,aq as b,br as o,B as Pe,d as t,ar as y,D as w,cS as ge,cT as f,ac as N,bO as sa,bN as na,cU as F,bQ as X,G as ia,cV as be,bW as z,ax as J,cy as ua}from"./index.dd77155d.js";import{Q as da}from"./QForm.2c5aed2b.js";import{Q as ma}from"./QPage.11d82b17.js";import{u as ca}from"./use-quasar.6320e378.js";import{a as fa,u as O}from"./vee-validate.esm.6dfeee42.js";import{u as va}from"./i18n.660e2ed7.js";import{b as pa,i as ne,q as x}from"./app.05652b82.js";import{p as ha}from"./VueTelInput.b268e222.js";import{_ as ga}from"./languageSelector.fc371134.js";import{a as ba,c as Q,d as ya}from"./array.59f93f43.js";import{c as Na}from"./carousel.961c0ca7.js";import{api as ye}from"./api.9cc8c4bd.js";import{dayjs as Ne}from"./dayjs.6e814a2c.js";import"./_commonjsHelpers.a26ce4be.js";import"./localForage.a5ce8de1.js";import"./index.04bc0a32.js";import"./QSelect.e46c7380.js";import"./QChip.8eec8f03.js";import"./QMenu.237258b2.js";import"./position-engine.f42cc476.js";import"./selection.1b0fcc11.js";import"./rtl.b51694b1.js";import"./use-panel.c87e1d23.js";import"./touch.70a9dd44.js";import"./use-fullscreen.d86e788f.js";const wa={name:"Register",props:["phoneTemp","emailTemp"],components:{phoneNumberInput:ha,carousel:Na,languageSelector:ga},setup(r){const a=ca(),ie=ra(),{t:e}=va(),{currentUserType:_}=pa(),A=s(!1),H=s(!1),ee=s(10),d=s(null),ue=s(!1),u=s("phoneNumber"),we=s("register"),K=s(!1),Ee=s(!1),de=s([]),me=s([]),L=s(!1),ae=s(!1),D=s(null),W=s(null),j=s(0),q=s(!1),i=s(null),P=s(!1),ce=s(!1),le=s(!1),qe=s(null),te=s(null),Ae=xe(()=>{const l=new RegExp("^[0-9]{"+ee.value+"}","g");return ba({firstName:Q().required().label(`${e("firstName")}`),lastName:Q().required().label(`${e("lastName")}`),email:Q().email(`${e("validEmailIsRequired")}`).required().label(`${e("email")}`),phoneNumber:Q().matches(l,{excludeEmptyString:!0,message:`${e("validPhoneIsRequired")}`}).required().label(`${e("phoneNumber")}`),password:Q().required().matches(/^(?=.*\d)(?=.*[A-Za-z])(?=.*[a-zA-Z]).{8,}$/,{excludeEmptyString:!0,message:`${e("passwordRules")}`}).nullable(),passwordConfirmation:Q().oneOf([ya("password"),null],`${e("passwordMustMatch")}`)})}),Ie=xe(()=>fe.value===D.value);_==="Candidate"||ie.push("/");const{errors:_e,meta:Ce}=fa({validationSchema:Ae,initialValues:{firstName:"",lastName:"",phoneNumber:"",email:"",password:"",passwordConfirmation:""}}),{value:U,errorMessage:De,meta:Ue}=O("firstName"),{value:k,errorMessage:ke,meta:Se}=O("lastName"),{value:n,errorMessage:Ve,setErrors:B,meta:Te}=O("phoneNumber"),{value:I,errorMessage:Re,setErrors:Me,meta:Oe}=O("email"),{value:oe,errorMessage:Qe,meta:Le}=O("password"),{value:je,errorMessage:Be,meta:$e}=O("passwordConfirmation"),{value:fe,errorMessage:Fe,meta:Xe}=O("codeConfirmation",Q().matches(/^[0-9]{6}/g,{excludeEmptyString:!0,message:`${e("validPhoneIsRequired")}`}).required().oneOf([D.value],`${e("codeMustMatch")}`)),ze=s(!0);r.phoneTemp&&(n.value=r.phoneTemp),r.emailTemp&&(I.value=r.emailTemp);const Je=l=>{ee.value=l};he(n,l=>{de.value.includes(l)?(B(`${e("phoneNumberAlreadyInUse")}`),A.value=!1,a.notify({type:"negative",message:`${e("phoneNumberAlreadyInUse")}`,timeout:7e3,position:a.screen.lt.md?"top":"top-right"}),L.value=!1,K.value=!0):me.value.includes(l)&&(B(`${e("validPhoneIsRequired")}`),A.value=!1,a.notify({type:"negative",message:`${e("validPhoneIsRequired")}`,timeout:7e3,position:a.screen.lt.md?"top":"top-right"}))}),he(j,l=>{l===0&&(D.value=null,W.value=null),L.value=!0}),he(fe,async l=>{le.value=!0,Number(l)===D.value?(ae.value=!0,le.value=!1,ce.value=!0,await la(),q.value?(await aa(),ce.value=!1):(await ve(),ce.value=!1)):le.value=!1});const He=l=>{d.value=l},Ke=async()=>{D.value=Math.floor(1e5+Math.random()*9e5),await ye.createMessage({contact:n.value,to:n.value,message:`${e("yourBrandSafwayVerificationCodeIs")} ${D.value}`,messagingServiceSid:"MGd0e31773980318b7cdc5d2043117e27c",send:!0,readBy:[],status:"pending"}),W.value=Ne().add(1,"minute"),We()},We=()=>{const l=setInterval(()=>{j.value=Ne(W.value).valueOf()-Ne().valueOf(),j.value<=0&&(j.value=0,clearInterval(l))},1e3)},Ge=()=>{j.value=0,qe.value=!1,K.value=!1,D.value=null,W.value=null,L.value=!1},Ze=l=>{const h=Math.floor(l/6e4),m=(l%6e4/1e3).toFixed(0);return h+":"+(m<10?"0":"")+m},Ye=async l=>{const m=[{8:{value:`{'20'.CT.'${l[35]}'}AND{'22'.CT.'${l[37]}'}AND({'24'.CT.'${l[35]}'}AND{'24'.CT.'${l[37]}'})AND({'27'.EX.'${d.value?d.value.dialCode:"1"}${n.value}'}OR{'27'.EX.'${n.value}'})AND{'26'.EX.'${l[6]}'}AND{'509'.EX.'false'}`},7:{value:"Employees"},9:{value:12}}],{data:C}=await x.fetchFromHiringApp({fields:m});return C[0]?C[0][3]:null},ea=async l=>{const h=await x.isUserLoggedIn(),m=await Ye(l),C=new Date,M={3:{value:l[3]},26:{value:C}};if(m)M[80]={value:m};else return!1;try{h?await x.updateUserData({fields:M}):await x.upsertRecordsXML({to:"br4pxrbs6",fieldsToReturn:[76],data:[M],formatObject:76})}catch(G){console.log(G)}},re=async l=>{const h={password:oe.value,userType:_,phoneNumber:`+${d.value?d.value.dialCode:"1"}${n.value}`};try{if(await x.login(h))return await ea(l),ie.push({path:"/"})}catch(m){console.log(m)}},ve=async()=>{P.value=!0;const l=I.value.match(/^([^@]*)@/)[1],h=await ne.genSalt(10),m=ne.hashSync(oe.value,h),C=Math.floor(1e5+Math.random()*9e5),M=new Date;if(q.value=!1,i.value=await ye.twilioLookup({phoneNumber:n.value}),i.value&&(n.e164=i.value.phoneNumber,delete i.value.url,delete i.value.price,delete i.value.phoneNumber,delete i.value.addOns),i.value&&i.value.validPhoneNumber===!1)return B(`${e("validPhoneIsRequired")}`),me.value.push(n.value),A.value=!1,a.notify({type:"negative",message:`${e("validPhoneIsRequired")}`,timeout:7e3,position:a.screen.lt.md?"top":"top-right"}),null;te.value=Object.assign({phoneNumber:n.value},d.value,i.value||{});const G=[{6:{value:I.value},7:{value:m},8:{value:`+${d.value?d.value.dialCode:"1"}${n.value}`},9:{value:JSON.stringify(te.value)},10:{value:"Active"},11:{value:7},21:{value:C},32:{value:"Candidate"},35:{value:U.value.trim()},37:{value:k.value.trim()},23:{value:0},24:{value:0},25:{value:M},26:{value:M},33:{value:l},50:{value:ae.value}}],S=[{6:{value:I.value},7:{value:m},8:{value:`+${d.value?d.value.dialCode:"1"}${n.value}`},9:{value:JSON.stringify(te.value)},10:{value:"Active"},11:{value:7},21:{value:C},32:{value:"Candidate"},35:{value:U.value.trim()},37:{value:k.value.trim()},24:{value:0},26:{value:M},50:{value:ae.value}}];try{const{data:V,metadata:T}=await x.upsertRecordsXML({to:"br4pxrbs6",fieldsToReturn:[76],data:G,formatObject:76});if(T.lineErrors){const R=T.lineErrors[1];let $=!1,v=!1,c=!1,pe=!1;if(R.forEach(g=>{g.includes('is not unique for unique formula field with ID "27"')&&(v=!0),g.includes('The field named "uniqueEmail" with field id 27 requires a unique value.')&&(v=!0),g.includes('is not unique for unique formula field with ID "28"')&&(c=!0),g.includes('The field named "uniquePhoneNumber" with field id 28 requires a unique value.')&&(c=!0)}),v)try{v=!1,pe=!0;const{data:g,metadata:Z}=await x.findAndUpdateUser({email:I.value,firstName:U.value,lastName:k.value,userType:_,fields:S});if(Z.lineErrors)Z.lineErrors[1].forEach(E=>{E.includes('is not unique for unique formula field with ID "27"')&&(q.value=!0,v=!0),E.includes('The field named "uniqueEmail" with field id 27 requires a unique value.')&&(q.value=!0,v=!0),E.includes('is not unique for unique formula field with ID "28"')&&(q.value=!0,c=!0),E.includes('The field named "uniquePhoneNumber" with field id 28 requires a unique value.')&&(q.value=!0,c=!0)});else if(g.length===0)v=!0,pe=!1;else{const Y=g[0][76];return P.value=!1,await re(Y)}}catch{v=!0}if(c&&!pe)try{c=!1;const{data:g,metadata:Z}=await x.findAndUpdateUser({phoneNumber:`+${d.value?d.value.dialCode:"1"}${n.value}`,firstName:U.value,lastName:k.value,userType:_,fields:S});if(Z.lineErrors)Z.lineErrors[1].forEach(E=>{E.includes('is not unique for unique formula field with ID "27"')&&(q.value=!0,v=!0),E.includes('The field named "uniqueEmail" with field id 27 requires a unique value.')&&(q.value=!0,v=!0),E.includes('is not unique for unique formula field with ID "28"')&&(q.value=!0,c=!0),E.includes('The field named "uniquePhoneNumber" with field id 28 requires a unique value.')&&(q.value=!0,c=!0)});else if(g.length===0)c=!0;else{const Y=g[0][76];return P.value=!1,await re(Y)}}catch{c=!0}v&&(P.value=!1,Me(`${e("emailAlreadyInUse")}`),H.value=!1,a.notify({type:"negative",message:`${e("emailAlreadyInUse")}`,timeout:7e3,position:a.screen.lt.md?"top":"top-right"})),c&&(P.value=!1,$=!0,B(`${e("phoneNumberAlreadyInUse")}`),de.value.push(n.value),A.value=!1,a.notify({type:"negative",message:`${e("phoneNumberAlreadyInUse")}`,timeout:7e3,position:a.screen.lt.md?"top":"top-right"})),$&&R.length===1&&(P.value=!1,L.value=!1,K.value=!0)}else{const R=V[0][76];return P.value=!1,await re(R)}return V}catch(V){P.value=!1,console.log(V)}},aa=async()=>{const l=await ne.genSalt(10),h=ne.hashSync(oe.value,l),m=Math.floor(1e5+Math.random()*9e5),C=new Date;if(i.value||(i.value=await ye.twilioLookup({phoneNumber:n.value}),i.value&&(delete i.value.url,delete i.value.price,delete i.value.phoneNumber,delete i.value.addOns)),i.value&&(n.e164=i.value.phoneNumber),i.value&&i.value.validPhoneNumber===!1)return B(`${e("validPhoneIsRequired")}`),me.value.push(n.value),A.value=!1,a.notify({type:"negative",message:`${e("validPhoneIsRequired")}`,timeout:7e3,position:a.screen.lt.md?"top":"top-right"}),null;const M=Object.assign({phoneNumber:n.value},d.value,i.value||{}),G=[{6:{value:I.value},7:{value:h},8:{value:`+${d.value?d.value.dialCode:"1"}${n.value}`},9:{value:JSON.stringify(M)},10:{value:"Active"},11:{value:7},21:{value:m},32:{value:"Candidate"},35:{value:U.value.trim()},37:{value:k.value.trim()},24:{value:0},26:{value:C},50:{value:ae.value}}];try{const{data:S,metadata:V}=await x.findAndUpdateUser({email:I.value,firstName:U.value,lastName:k.value,userType:_,fields:G});if(V.lineErrors){const T=V.lineErrors[1];let R=!1,$=!1,v=!1;T.forEach(c=>{c.includes('is not unique for unique formula field with ID "27"')&&($=!0),c.includes('The field named "uniqueEmail" with field id 27 requires a unique value.')&&($=!0),c.includes('is not unique for unique formula field with ID "28"')&&(v=!0),c.includes('The field named "uniquePhoneNumber" with field id 28 requires a unique value.')&&(v=!0)}),$&&(Me(`${e("emailAlreadyInUse")}`),H.value=!1,a.notify({type:"negative",message:`${e("emailAlreadyInUse")}`,timeout:7e3,position:a.screen.lt.md?"top":"top-right"})),v&&(R=!0,B(`${e("phoneNumberAlreadyInUse")}`),de.value.push(n.value),A.value=!1,a.notify({type:"negative",message:`${e("phoneNumberAlreadyInUse")}`,timeout:7e3,position:a.screen.lt.md?"top":"top-right"})),R&&T.length===1&&(L.value=!1,K.value=!0)}else{const T=S[0][76];return await re(T)}return S}catch(S){console.log(S)}},la=async()=>{try{const l=new Date,h={phoneNumber:"N/A",name:"United States",iso2:"US",dialCode:"1",iso2sm:"us",callerName:null,countryCode:"US",nationalFormat:"N/A",carrier:null,validPhoneNumber:!1},m=[{8:{value:""},9:{value:JSON.stringify(h)},26:{value:l},50:{value:!1},111:{value:!0}}];return await x.findAndUpdateUser({phoneNumber:`+${d.value?d.value.dialCode:"1"}${n.value}`,userType:_,fields:m})}catch(l){console.log(l)}};return{firstName:U,lastName:k,email:I,phoneNumber:n,password:oe,passwordConfirmation:je,isPwd:ze,codeConfirmation:fe,verifyExistingPhoneNumber:Ee,phoneNumberConfirmed:qe,verifyingCode:le,validPhone:A,validEmail:H,step:we,validPassword:ue,loginType:u,firstNameMeta:Ue,lastNameMeta:Se,phoneNumberMeta:Te,emailMeta:Oe,passwordMeta:Le,passwordConfirmationMeta:$e,codeConfirmationMeta:Xe,creatingAccount:P,firstNameMessage:De,lastNameMessage:ke,passwordMessage:Qe,phoneNumberMessage:Ve,emailMessage:Re,passwordConfirmationMessage:Be,errors:_e,meta:Ce,codeConfirmationMessage:Fe,updatePhoneMaxLength:Je,createAccount:ve,updateCountry:He,phoneNumberPrompt:K,sendCode:Ke,codeExpiration:W,countDown:j,millisToMinutesAndSeconds:Ze,codePrompt:L,closePhoneNumberPrompt:Ge,codeRules:Ie,onSubmit:l=>{we.value==="register"&&Ce.valid?ve():l.preventDefault()},phoneDetails:te}}},qa={key:0,class:"col-md-7 col-lg-8 col-lx-8"},Ca={class:"col-xs-12 col-sm-12 col-md-5 col-lg-4 col-lx-4 row justify-center items-center"},Ma={class:"text-dark"},xa={class:"row q-col-gutter-xs"},Pa={class:"row q-col-gutter-xs"},Ea={class:"row q-col-gutter-xs"},Aa={class:"row q-col-gutter-xs"},Ia={class:"row justify-center"},_a={class:"text-h6"},Da={class:"text-h6"},Ua={class:"q-gutter-lg"},ka={class:"text-h6"};function Sa(r,a,ie,e,_,A){const H=se("carousel"),ee=se("phone-number-input"),d=se("router-link"),ue=se("languageSelector");return p(),b(ma,{class:"window-height window-width row"},{default:o(()=>[r.$q.screen.lt.md?y("",!0):(p(),Pe("div",qa,[t(H)])),w("div",Ca,[t(ge,{class:"register-card",flat:""},{default:o(()=>[t(f,{style:{"padding-left":"30px","padding-right":"30px"}},{default:o(()=>[t(ta,{src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo.svg",fit:"scale-down",class:"register-logo full-width"})]),_:1}),t(f,{class:"text-center register-description"},{default:o(()=>[w("p",Ma,N(r.$t("register")),1)]),_:1}),t(f,null,{default:o(()=>[t(da,{class:"q-px-xs q-pt-xs",onSubmit:a[7]||(a[7]=sa(()=>{},["prevent"])),onKeyup:na(e.onSubmit,["enter"])},{default:o(()=>[w("div",xa,[t(F,{class:"col-xs-12 col-sm-6 q-pb-lg",clearable:"",outlined:"",modelValue:e.firstName,"onUpdate:modelValue":a[0]||(a[0]=u=>e.firstName=u),type:"text",autocomplete:"given-name",label:r.$t("firstName"),tabindex:"1",name:"firstName",error:!!(e.firstNameMessage&&e.firstNameMeta.validated),"error-message":e.firstNameMessage},{prepend:o(()=>[t(X,{name:"person"})]),_:1},8,["modelValue","label","error","error-message"]),t(F,{class:"col-xs-12 col-sm-6",clearable:"",outlined:"",modelValue:e.lastName,"onUpdate:modelValue":a[1]||(a[1]=u=>e.lastName=u),type:"text",autocomplete:"family-name",label:r.$t("lastName"),tabindex:"2",name:"lastName",error:!!(e.lastNameMessage&&e.lastNameMeta.validated),"error-message":e.lastNameMessage},{prepend:o(()=>[t(X,{name:"person_outline"})]),_:1},8,["modelValue","label","error","error-message"])]),w("div",Pa,[t(ee,{name:"phoneNumber",class:ia(["col-xs-12 col-sm-12",{"q-pb-lg":e.phoneNumberMessage&&e.phoneNumberMeta.validated}]),outlined:"",modelValue:e.phoneNumber,"onUpdate:modelValue":a[2]||(a[2]=u=>e.phoneNumber=u),label:r.$t("mobilePhoneNumber"),tabindex:"3",onMaxLengthChanged:e.updatePhoneMaxLength,error:!!(e.phoneNumberMessage&&e.phoneNumberMeta.validated),"error-message":e.phoneNumberMessage,onCountryChanged:e.updateCountry},null,8,["class","modelValue","label","onMaxLengthChanged","error","error-message","onCountryChanged"])]),w("div",Ea,[t(F,{class:"col-xs-12 col-sm-12 q-pb-lg",clearable:"",outlined:"",modelValue:e.email,"onUpdate:modelValue":a[3]||(a[3]=u=>e.email=u),type:"email",autocomplete:"email",label:r.$t("email"),tabindex:"4",name:"email",error:!!(e.emailMessage&&e.emailMeta.validated),"error-message":e.emailMessage},{prepend:o(()=>[t(X,{name:"email"})]),_:1},8,["modelValue","label","error","error-message"])]),w("div",Aa,[e.step==="register"?(p(),b(F,{key:0,class:"col-xs-12 col-sm-6 q-pb-md",outlined:"",modelValue:e.password,"onUpdate:modelValue":a[5]||(a[5]=u=>e.password=u),type:e.isPwd?"password":"text",autocomplete:"current-password",label:r.$t("password"),tabindex:"5",error:!!(e.passwordMessage&&e.passwordMeta.validated),"error-message":e.passwordMessage},{append:o(()=>[t(X,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[4]||(a[4]=u=>e.isPwd=!e.isPwd)},null,8,["name"])]),prepend:o(()=>[t(X,{name:"lock"})]),_:1},8,["modelValue","type","label","error","error-message"])):y("",!0),e.step==="register"?(p(),b(F,{key:1,class:"col-xs-12 col-sm-6 q-pb-md",outlined:"",modelValue:e.passwordConfirmation,"onUpdate:modelValue":a[6]||(a[6]=u=>e.passwordConfirmation=u),type:"password",autocomplete:"new-password",label:r.$t("confirmPassword"),tabindex:"6",error:!!(e.passwordConfirmationMessage&&e.passwordConfirmationMeta.validated),"error-message":e.passwordConfirmationMessage},{prepend:o(()=>[t(X,{name:"lock"})]),_:1},8,["modelValue","label","error","error-message"])):y("",!0)])]),_:1},8,["onKeyup"])]),_:1}),t(be,{class:"q-px-lg"},{default:o(()=>[e.step==="register"?(p(),b(z,{key:0,onClick:e.createAccount,loading:e.creatingAccount,size:"lg",color:"primary",class:"full-width text-white",label:r.$t("createAccount"),tabindex:e.meta.valid?"7":"-1",disable:!e.meta.valid},null,8,["onClick","loading","label","tabindex","disable"])):y("",!0)]),_:1}),t(f,{class:"text-center q-pa-sm"},{default:o(()=>[t(d,{to:"/login",class:"text-grey-6",tabindex:e.meta.valid?"8":"7"},{default:o(()=>[J(N(r.$t("alreadyHaveAnAccount")),1)]),_:1},8,["tabindex"])]),_:1}),t(f,{class:"q-pl-lg q-pa-sm"},{default:o(()=>[w("div",Ia,[t(ue,{dense:"",borderless:""})])]),_:1})]),_:1}),t(ua,{modelValue:e.phoneNumberPrompt,"onUpdate:modelValue":a[11]||(a[11]=u=>e.phoneNumberPrompt=u),persistent:""},{default:o(()=>[e.codePrompt?e.codePrompt?(p(),b(ge,{key:1,style:{"min-width":"350px"}},{default:o(()=>[t(f,null,{default:o(()=>[w("div",ka,N(r.$t("mobilePhoneVerification")),1)]),_:1}),t(f,{class:"q-pt-none"},{default:o(()=>[J(N(r.$t("textMessageWithCodeSent")),1)]),_:1}),t(f,{class:"q-py-none q-p"},{default:o(()=>[t(F,{class:"col-xs-12 col-sm-6 q-pb-md",clearable:"",outlined:"",modelValue:e.codeConfirmation,"onUpdate:modelValue":a[9]||(a[9]=u=>e.codeConfirmation=u),loading:e.verifyingCode,type:"text",autocomplete:"one-time-code",inputmode:"numeric",pattern:"[0-9]*",label:r.$t("code"),tabindex:"1",maxlength:"6",minlength:"6",name:"codeConfirmation",error:!!e.codeRules,"error-message":"Code does not match!"},{append:o(()=>[J(N(e.millisToMinutesAndSeconds(e.countDown))+"\xA0 ",1)]),_:1},8,["modelValue","loading","label","error"])]),_:1}),t(f,{class:"q-py-none row justify-center"},{default:o(()=>[e.countDown===0?(p(),Pe("a",{key:0,onClick:a[10]||(a[10]=(...u)=>e.sendCode&&e.sendCode(...u)),class:"text-grey-6",href:"javascript:void(0);"},N(r.$t("resendCode")),1)):y("",!0)]),_:1}),t(be,{align:"right",class:"text-primary"},{default:o(()=>[t(z,{flat:"",label:r.$t("cancel"),onClick:e.closePhoneNumberPrompt},null,8,["label","onClick"])]),_:1})]),_:1})):y("",!0):(p(),b(ge,{key:0,style:{"min-width":"350px"}},{default:o(()=>[e.phoneNumberConfirmed?y("",!0):(p(),b(f,{key:0},{default:o(()=>[w("div",_a,N(r.$t("thisPhoneNumberAlreadyInUse")),1)]),_:1})),e.phoneNumberConfirmed?(p(),b(f,{key:1},{default:o(()=>[w("div",Da,N(r.$t("mobilePhoneVerification")),1)]),_:1})):y("",!0),e.phoneNumberConfirmed?y("",!0):(p(),b(f,{key:2,class:"q-pt-none"},{default:o(()=>[J(N(r.$t("confirmPhoneNumberBelow"))+" "+N(r.$t("verificationWillBeRequired")),1)]),_:1})),t(f,{class:"q-pt-none"},{default:o(()=>[J(N(e.phoneDetails.nationalFormat),1)]),_:1}),e.phoneNumberConfirmed?y("",!0):(p(),b(f,{key:3,class:"q-pt-none"},{default:o(()=>[w("div",Ua,[t(z,{color:"primary",label:r.$t("yes"),onClick:a[8]||(a[8]=u=>e.phoneNumberConfirmed=!0)},null,8,["label"]),t(z,{color:"primary",label:r.$t("no"),onClick:e.closePhoneNumberPrompt},null,8,["label","onClick"])])]),_:1})),e.phoneNumberConfirmed?(p(),b(f,{key:4,class:"q-pt-none"},{default:o(()=>[J(N(r.$t("phoneNumberNeedsToBeVerified")),1)]),_:1})):y("",!0),e.phoneNumberConfirmed?(p(),b(f,{key:5,class:"q-pt-none"},{default:o(()=>[t(z,{color:"primary",label:r.$t("sendCode"),onClick:e.sendCode},null,8,["label","onClick"])]),_:1})):y("",!0),t(be,{align:"right",class:"text-primary"},{default:o(()=>[t(z,{flat:"",label:r.$t("cancel"),onClick:e.closePhoneNumberPrompt},null,8,["label","onClick"])]),_:1})]),_:1}))]),_:1},8,["modelValue"])])]),_:1})}var il=oa(wa,[["render",Sa],["__scopeId","data-v-50f03b08"]]);export{il as default};
