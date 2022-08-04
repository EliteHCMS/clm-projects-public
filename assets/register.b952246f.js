import{Q as Fe}from"./QImg.2a9eae01.js";import{_ as He,c4 as Ke,r as n,c as me,w as Z,aY as $,z as v,am as x,bh as l,A as ue,d as a,an as _,C as p,c2 as d,aa as f,bE as We,bD as Ze,cx as P,bX as I,E as Ge,cy as G,c6 as A,at as E,c3 as J,bj as Y,cz as Je}from"./index.b5f0fe3c.js";import{Q as Ye}from"./QForm.8ace65d7.js";import{Q as ea}from"./QPage.2aeb9df0.js";import{C as ee}from"./ClosePopup.9d35c2f1.js";import{u as aa}from"./use-quasar.0c044b38.js";import{a as oa,c as w,d as ta,b as la,u as N}from"./array.0b03d609.js";import{u as sa}from"./i18n.d12f430e.js";import{c as ra,g as ce,q as C}from"./quickbase.8650d165.js";import{p as na}from"./VueTelInput.5a56b09f.js";import{_ as ia}from"./languageSelector.ebefc43a.js";import{c as da}from"./carousel.e9bdacb5.js";import{api as pe}from"./api.7db09cb0.js";import{dayjs as ae}from"./dayjs.62e4342b.js";import"./_commonjsHelpers.dfee5925.js";import"./localForage.6d9c618d.js";import"./index.7dbe61ef.js";import"./QSelect.659fc465.js";import"./QChip.1f1c4c1f.js";import"./QMenu.51c983fc.js";import"./position-engine.7869b9b0.js";import"./selection.9755dcd0.js";import"./rtl.65b79c69.js";import"./use-panel.df81e386.js";import"./touch.d8ab472d.js";import"./use-fullscreen.c6e73b37.js";const ma={name:"Register",props:["phoneTemp","emailTemp"],components:{phoneNumberInput:na,carousel:da,languageSelector:ia},setup(s){const o=aa(),O=Ke(),{t:e}=sa(),{currentUserType:S}=ra(),h=n(!1),V=n(!1),R=n(10),m=n(null),X=n(!1),r=n("phoneNumber"),oe=n("register"),T=n(!1),fe=n(!1),z=n([]),te=n([]),B=n(!1),le=n(!1),b=n(null),k=n(null),M=n(0),ge=me(()=>{const t=new RegExp("^[0-9]{"+R.value+"}","g");return oa({firstName:w().required().label(`${e("firstName")}`),lastName:w().required().label(`${e("lastName")}`),email:w().email(`${e("validEmailIsRequired")}`).required().label(`${e("email")}`),phoneNumber:w().matches(t,{excludeEmptyString:!0,message:`${e("validPhoneIsRequired")}`}).required().label(`${e("phoneNumber")}`),password:w().required().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,{excludeEmptyString:!0,message:`${e("passwordRules")}`}).nullable(),passwordConfirmation:w().oneOf([ta("password"),null],`${e("passwordMustMatch")}`)})}),ve=me(()=>H.value===b.value);S==="Candidate"||O.push("/");const{errors:he,meta:se}=la({validationSchema:ge,initialValues:{firstName:"",lastName:"",phoneNumber:"",email:"",password:"",passwordConfirmation:""}}),{value:re,errorMessage:be,meta:ye}=N("firstName"),{value:ne,errorMessage:we,meta:Ne}=N("lastName"),{value:i,errorMessage:Ce,setErrors:D,meta:Me}=N("phoneNumber"),{value:U,errorMessage:qe,setErrors:ie,meta:xe}=N("email"),{value:F,errorMessage:_e,meta:Pe}=N("password"),{value:Ie,errorMessage:Ae,meta:Ve}=N("passwordConfirmation"),{value:H,errorMessage:ke,meta:De}=N("codeConfirmation",w().matches(/^[0-9]{6}/g,{excludeEmptyString:!0,message:`${e("validPhoneIsRequired")}`}).required().oneOf([b.value],`${e("codeMustMatch")}`)),Ee=n(!0);s.phoneTemp&&(i.value=s.phoneTemp),s.emailTemp&&(U.value=s.emailTemp);const Se=t=>{R.value=t};Z(i,t=>{z.value.includes(t)?(D(`${e("phoneNumberAlreadyInUse")}`),h.value=!1,o.notify({type:"negative",message:`${e("phoneNumberAlreadyInUse")}`,timeout:7e3,position:o.screen.lt.md?"top":"top-right"}),T.value=!0):te.value.includes(t)&&(D(`${e("validPhoneIsRequired")}`),h.value=!1,o.notify({type:"negative",message:`${e("validPhoneIsRequired")}`,timeout:7e3,position:o.screen.lt.md?"top":"top-right"}))}),Z(M,t=>{t===0&&(b.value=null,k.value=null),B.value=!0}),Z(H,async t=>{Number(t)===b.value&&(le.value=!0,await Xe(),await K())});const Re=t=>{m.value=t},Te=async()=>{b.value=Math.floor(1e5+Math.random()*9e5),await pe.createMessageQueue({to:i.value,messagingServiceSid:"MGd0e31773980318b7cdc5d2043117e27c",message:`${e("yourBrandSafwayVerificationCodeIs")} ${b.value}`,extRef:null,massText:!1}),k.value=ae().add(1,"minute"),Ue()},Ue=()=>{const t=setInterval(()=>{M.value=ae(k.value).valueOf()-ae().valueOf(),M.value<=0&&(M.value=0,clearInterval(t))},1e3)},Qe=()=>{T.value=!1,B.value=!1,b.value=null,k.value=null,M.value=0},Le=t=>{const g=Math.floor(t/6e4),u=(t%6e4/1e3).toFixed(0);return g+":"+(u<10?"0":"")+u},je=async t=>{const u=[{8:{value:`{'20'.CT.'${t[35]}'}AND{'22'.CT.'${t[37]}'}AND({'24'.CT.'${t[35]}'}AND{'24'.CT.'${t[37]}'})AND({'27'.EX.'${m.value?m.value.dialCode:"1"}${i.value}'}OR{'27'.EX.'${i.value}'})AND{'26'.EX.'${t[6]}'}AND{'509'.EX.'false'}`},7:{value:"Employees"},9:{value:12}}],{data:q}=await C.fetchFromHiringApp({fields:u});return q[0]?q[0][3]:null},$e=async t=>{const g=await C.isUserLoggedIn(),u=await je(t),q=new Date,y={3:{value:t[3]},26:{value:q}};if(u)y[80]={value:u};else return!1;try{g?await C.updateUserData({fields:y}):await C.upsertRecordsXML({to:"br4pxrbs6",fieldsToReturn:[76],data:[y],formatObject:76})}catch(c){console.log(c)}},Oe=async t=>{const g={password:F.value,userType:S,phoneNumber:`+${m.value?m.value.dialCode:"1"}${i.value}`};try{if(await C.login(g))return await $e(t),O.push({path:"/"})}catch(u){console.log(u)}},K=async()=>{const t=U.value.match(/^([^@]*)@/)[1],g=await ce.genSalt(10),u=ce.hashSync(F.value,g),q=Math.floor(1e5+Math.random()*9e5),y=new Date,c=await pe.twilioLookup({phoneNumber:i.value});if(c&&(i.e164=c.phoneNumber,delete c.url,delete c.price,delete c.phoneNumber,delete c.addOns),c&&c.validPhoneNumber===!1)return D(`${e("validPhoneIsRequired")}`),te.value.push(i.value),h.value=!1,o.notify({type:"negative",message:`${e("validPhoneIsRequired")}`,timeout:7e3,position:o.screen.lt.md?"top":"top-right"}),null;const ze=Object.assign({phoneNumber:i.value},m.value,c||{}),Be=[{6:{value:U.value},7:{value:u},8:{value:`+${m.value?m.value.dialCode:"1"}${i.value}`},9:{value:JSON.stringify(ze)},10:{value:"Active"},11:{value:7},21:{value:q},32:{value:"Candidate"},35:{value:re.value.trim()},37:{value:ne.value.trim()},23:{value:0},24:{value:0},25:{value:y},26:{value:y},33:{value:t},50:{value:le.value}}];try{const{data:Q,metadata:de}=await C.upsertRecordsXML({to:"br4pxrbs6",fieldsToReturn:[76],data:Be,formatObject:76});if(de.lineErrors){const L=de.lineErrors[1];let W=!1;L.forEach(j=>{j.includes('is not unique for unique formula field with ID "27"')&&(ie(`${e("emailAlreadyInUse")}`),V.value=!1,o.notify({type:"negative",message:`${e("emailAlreadyInUse")}`,timeout:7e3,position:o.screen.lt.md?"top":"top-right"})),j.includes('The field named "uniqueEmail" with field id 27 requires a unique value.')&&(ie(`${e("emailAlreadyInUse")}`),V.value=!1,o.notify({type:"negative",message:`${e("emailAlreadyInUse")}`,timeout:7e3,position:o.screen.lt.md?"top":"top-right"})),j.includes('is not unique for unique formula field with ID "28"')&&(W=!0,D(`${e("phoneNumberAlreadyInUse")}`),z.value.push(i.value),h.value=!1,o.notify({type:"negative",message:`${e("phoneNumberAlreadyInUse")}`,timeout:7e3,position:o.screen.lt.md?"top":"top-right"})),j.includes('The field named "uniquePhoneNumber" with field id 28 requires a unique value.')&&(W=!0,D(`${e("phoneNumberAlreadyInUse")}`),z.value.push(i.value),h.value=!1,o.notify({type:"negative",message:`${e("phoneNumberAlreadyInUse")}`,timeout:7e3,position:o.screen.lt.md?"top":"top-right"}))}),W&&L.length===1&&(T.value=!0)}else{const L=Q[0][76];return await Oe(L)}return Q}catch(Q){console.log(Q)}},Xe=async()=>{try{return await C.deActivateAccount({phoneNumber:`+${m.value?m.value.dialCode:"1"}${i.value}`,userType:S})}catch(t){console.log(t)}};return{firstName:re,lastName:ne,email:U,phoneNumber:i,password:F,passwordConfirmation:Ie,isPwd:Ee,codeConfirmation:H,verifyExistingPhoneNumber:fe,validPhone:h,validEmail:V,step:oe,validPassword:X,loginType:r,firstNameMeta:ye,lastNameMeta:Ne,phoneNumberMeta:Me,emailMeta:xe,passwordMeta:Pe,passwordConfirmationMeta:Ve,codeConfirmationMeta:De,firstNameMessage:be,lastNameMessage:we,passwordMessage:_e,phoneNumberMessage:Ce,emailMessage:qe,passwordConfirmationMessage:Ae,errors:he,meta:se,codeConfirmationMessage:ke,updatePhoneMaxLength:Se,createAccount:K,updateCountry:Re,phoneNumberPrompt:T,sendCode:Te,codeExpiration:k,countDown:M,millisToMinutesAndSeconds:Le,codePrompt:B,closePhoneNumberPrompt:Qe,codeRules:ve,onSubmit:t=>{oe.value==="register"&&se.valid?K():t.preventDefault()}}}},ua={key:0,class:"col-md-7 col-lg-8 col-lx-8"},ca={class:"col-xs-12 col-sm-12 col-md-5 col-lg-4 col-lx-4 row justify-center items-center"},pa={class:"text-dark"},fa={class:"row q-col-gutter-xs"},ga={class:"row q-col-gutter-xs"},va={class:"row q-col-gutter-xs"},ha={class:"row q-col-gutter-xs"},ba={class:"row justify-center"},ya={class:"text-h6"},wa={class:"text-h6"};function Na(s,o,O,e,S,h){const V=$("carousel"),R=$("phone-number-input"),m=$("router-link"),X=$("languageSelector");return v(),x(ea,{class:"window-height window-width row"},{default:l(()=>[s.$q.screen.lt.md?_("",!0):(v(),ue("div",ua,[a(V)])),p("div",ca,[a(J,{class:"register-card",flat:""},{default:l(()=>[a(d,{style:{"padding-left":"30px","padding-right":"30px"}},{default:l(()=>[a(Fe,{src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo.svg",fit:"scale-down",class:"register-logo full-width"})]),_:1}),a(d,{class:"text-center register-description"},{default:l(()=>[p("p",pa,f(s.$t("register")),1)]),_:1}),a(d,null,{default:l(()=>[a(Ye,{class:"q-px-xs q-pt-xs",onSubmit:o[7]||(o[7]=We(()=>{},["prevent"])),onKeyup:Ze(e.onSubmit,["enter"])},{default:l(()=>[p("div",fa,[a(P,{class:"col-xs-12 col-sm-6 q-pb-lg",clearable:"",outlined:"",modelValue:e.firstName,"onUpdate:modelValue":o[0]||(o[0]=r=>e.firstName=r),type:"text",autocomplete:"given-name",label:s.$t("firstName"),tabindex:"1",name:"firstName",error:!!(e.firstNameMessage&&e.firstNameMeta.validated),"error-message":e.firstNameMessage},{prepend:l(()=>[a(I,{name:"person"})]),_:1},8,["modelValue","label","error","error-message"]),a(P,{class:"col-xs-12 col-sm-6",clearable:"",outlined:"",modelValue:e.lastName,"onUpdate:modelValue":o[1]||(o[1]=r=>e.lastName=r),type:"text",autocomplete:"family-name",label:s.$t("lastName"),tabindex:"2",name:"lastName",error:!!(e.lastNameMessage&&e.lastNameMeta.validated),"error-message":e.lastNameMessage},{prepend:l(()=>[a(I,{name:"person_outline"})]),_:1},8,["modelValue","label","error","error-message"])]),p("div",ga,[a(R,{name:"phoneNumber",class:Ge(["col-xs-12 col-sm-12",{"q-pb-lg":e.phoneNumberMessage&&e.phoneNumberMeta.validated}]),outlined:"",modelValue:e.phoneNumber,"onUpdate:modelValue":o[2]||(o[2]=r=>e.phoneNumber=r),label:s.$t("phoneNumber"),tabindex:"3",onMaxLengthChanged:e.updatePhoneMaxLength,error:!!(e.phoneNumberMessage&&e.phoneNumberMeta.validated),"error-message":e.phoneNumberMessage,onCountryChanged:e.updateCountry},null,8,["class","modelValue","label","onMaxLengthChanged","error","error-message","onCountryChanged"])]),p("div",va,[a(P,{class:"col-xs-12 col-sm-12 q-pb-lg",clearable:"",outlined:"",modelValue:e.email,"onUpdate:modelValue":o[3]||(o[3]=r=>e.email=r),type:"email",autocomplete:"email",label:s.$t("email"),tabindex:"4",name:"email",error:!!(e.emailMessage&&e.emailMeta.validated),"error-message":e.emailMessage},{prepend:l(()=>[a(I,{name:"email"})]),_:1},8,["modelValue","label","error","error-message"])]),p("div",ha,[e.step==="register"?(v(),x(P,{key:0,class:"col-xs-12 col-sm-6 q-pb-md",outlined:"",modelValue:e.password,"onUpdate:modelValue":o[5]||(o[5]=r=>e.password=r),type:e.isPwd?"password":"text",autocomplete:"current-password",label:s.$t("password"),tabindex:"5",error:!!(e.passwordMessage&&e.passwordMeta.validated),"error-message":e.passwordMessage},{append:l(()=>[a(I,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:o[4]||(o[4]=r=>e.isPwd=!e.isPwd)},null,8,["name"])]),prepend:l(()=>[a(I,{name:"lock"})]),_:1},8,["modelValue","type","label","error","error-message"])):_("",!0),e.step==="register"?(v(),x(P,{key:1,class:"col-xs-12 col-sm-6 q-pb-md",outlined:"",modelValue:e.passwordConfirmation,"onUpdate:modelValue":o[6]||(o[6]=r=>e.passwordConfirmation=r),type:"password",autocomplete:"new-password",label:s.$t("confirmPassword"),tabindex:"6",error:!!(e.passwordConfirmationMessage&&e.passwordConfirmationMeta.validated),"error-message":e.passwordConfirmationMessage},{prepend:l(()=>[a(I,{name:"lock"})]),_:1},8,["modelValue","label","error","error-message"])):_("",!0)])]),_:1},8,["onKeyup"])]),_:1}),a(G,{class:"q-px-lg"},{default:l(()=>[e.step==="register"?(v(),x(A,{key:0,onClick:e.createAccount,unelevated:"",size:"lg",color:"primary",class:"full-width text-white",label:s.$t("createAccount"),tabindex:e.meta.valid?"7":"-1",disable:!e.meta.valid},null,8,["onClick","label","tabindex","disable"])):_("",!0)]),_:1}),a(d,{class:"text-center q-pa-sm"},{default:l(()=>[a(m,{to:"/login",class:"text-grey-6",tabindex:e.meta.valid?"8":"7"},{default:l(()=>[E(f(s.$t("alreadyHaveAnAccount")),1)]),_:1},8,["tabindex"])]),_:1}),a(d,{class:"q-pl-lg q-pa-sm"},{default:l(()=>[p("div",ba,[a(X,{dense:"",borderless:""})])]),_:1})]),_:1}),a(Je,{modelValue:e.phoneNumberPrompt,"onUpdate:modelValue":o[10]||(o[10]=r=>e.phoneNumberPrompt=r),persistent:""},{default:l(()=>[e.codePrompt?e.codePrompt?(v(),x(J,{key:1,style:{"min-width":"350px"}},{default:l(()=>[a(d,null,{default:l(()=>[p("div",wa,f(s.$t("mobilePhoneVerification")),1)]),_:1}),a(d,{class:"q-pt-none"},{default:l(()=>[E(f(s.$t("textMessageWithCodeSent")),1)]),_:1}),a(d,{class:"q-py-none q-p"},{default:l(()=>[a(P,{class:"col-xs-12 col-sm-6 q-pb-md",clearable:"",outlined:"",modelValue:e.codeConfirmation,"onUpdate:modelValue":o[8]||(o[8]=r=>e.codeConfirmation=r),type:"text",autocomplete:"one-time-code",inputmode:"numeric",pattern:"[0-9]*",label:s.$t("code"),tabindex:"1",maxlength:"6",minlength:"6",name:"codeConfirmation",error:!!e.codeRules,"error-message":"Code does not match!"},{append:l(()=>[E(f(e.millisToMinutesAndSeconds(e.countDown))+"\xA0 ",1)]),_:1},8,["modelValue","label","error"])]),_:1}),a(d,{class:"q-py-none row justify-center"},{default:l(()=>[e.countDown===0?(v(),ue("a",{key:0,onClick:o[9]||(o[9]=(...r)=>e.sendCode&&e.sendCode(...r)),class:"text-grey-6",href:"javascript:void(0);"},f(s.$t("resendCode")),1)):_("",!0)]),_:1}),a(G,{align:"right",class:"text-primary"},{default:l(()=>[Y(a(A,{flat:"",label:s.$t("cancel"),onClick:e.closePhoneNumberPrompt},null,8,["label","onClick"]),[[ee]])]),_:1})]),_:1})):_("",!0):(v(),x(J,{key:0,style:{"min-width":"350px"}},{default:l(()=>[a(d,null,{default:l(()=>[p("div",ya,f(s.$t("thisPhoneNumberAlreadyInUse")),1)]),_:1}),a(d,{class:"q-pt-none"},{default:l(()=>[E(f(s.$t("signInWithExistingAccount")),1)]),_:1}),a(d,{class:"q-pt-none"},{default:l(()=>[a(A,{to:"/login",color:"primary",label:s.$t("signIn")},null,8,["label"])]),_:1}),a(d,{class:"q-pt-none"},{default:l(()=>[E(f(s.$t("verifyPhoneNumberFirst")),1)]),_:1}),a(d,{class:"q-pt-none"},{default:l(()=>[a(A,{color:"primary",label:s.$t("sendCode"),onClick:e.sendCode},null,8,["label","onClick"])]),_:1}),a(G,{align:"right",class:"text-primary"},{default:l(()=>[Y(a(A,{flat:"",label:s.$t("cancel"),onClick:e.closePhoneNumberPrompt},null,8,["label","onClick"]),[[ee]]),Y(a(A,{flat:"",label:s.$t("ok"),onClick:e.closePhoneNumberPrompt},null,8,["label","onClick"]),[[ee]])]),_:1})]),_:1}))]),_:1},8,["modelValue"])])]),_:1})}var Wa=He(ma,[["render",Na],["__scopeId","data-v-14147154"]]);export{Wa as default};
