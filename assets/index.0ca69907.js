import{l as A,bV as ee,c as N,_ as R,B as a,as as $,bt as i,E as t,bQ as te,C as u,F as Y,b6 as D,cV as se,H as _,d as l,cW as Q,ae as r,at as c,az as V,bS as w,dn as j,cX as W,bY as M,bU as me,bX as ae,r as Z,w as ne,b7 as H,cm as fe}from"./index.8838c464.js";import{Q as ve}from"./QPage.49220ad5.js";import{Q as le,a as ye}from"./QStep.0cb59555.js";import{k as K,m as x,f as be,g as he,e as $e}from"./app.42c36b1f.js";import{Q as oe}from"./QStepperNavigation.6017b384.js";import{a as pe,u as I}from"./vee-validate.esm.ac2c348d.js";import{a as J,e as ge,c as F,b as _e,f as ke}from"./array.59f93f43.js";import{Q as X}from"./QTooltip.72214d5e.js";import"./use-panel.9c83e7d4.js";import"./touch.3df10340.js";import"./selection.26380b58.js";import"./QSlideTransition.1f3f1635.js";import"./_commonjsHelpers.a26ce4be.js";import"./dayjs.106d80ab.js";import"./localForage.ca6e9d39.js";import"./index.04bc0a32.js";import"./i18n.c69e89dd.js";import"./position-engine.cba8bd09.js";const qe=A({props:{title:String,step:Number,name:Number},setup(){const e=K(),o=ee(),{disabilityForm:f}=x(),{hiringCenter:h}=be(),y=[f.pages[0]],k=N(()=>{const m=y.find(n=>n[40]==="Yes");return m===void 0?!1:(m.columns={lg:{1:m[57].filter(n=>n[11]==="1"),2:m[57].filter(n=>n[11]==="2"),3:m[57].filter(n=>n[11]==="3"),4:m[57].filter(n=>n[11]==="4")},sm:{1:m[57]}},m.columns)}),s=N(()=>{const m=y.find(n=>n[41]==="Yes");return m===void 0?!1:(m[58].forEach(n=>{n.value=n[3],n.label=n[6]}),m[58])}),d=J({selection:ge().required().nullable(),nameEntry:F().required("Enter your name."),day:_e().required("Enter the date for today.")}),{meta:b,errors:g,handleSubmit:U}=pe({validationSchema:d,initialValues:{selection:null,nameEntry:"",day:he.formatDate(new Date,"YYYY-MM-DD")}}),{value:E}=I("selection"),{value:O}=I("nameEntry"),{value:T}=I("day"),z=U(async m=>{const n={15:{value:m.selection},7:{value:m.nameEntry},8:{value:m.day},6:{value:new Date},10:{value:f.rid},17:{value:h[3]},19:{value:e.profile[19].value?e.profile[19].value:""}},p={next:7,values:n,type:"disability"};await e.updateVoluntaryForm(p),e.submitDisabilityToQB()});function B(){const m={next:7};e.updateProfile(m)}function L(){const m={next:3};o.push({name:"apply"}),e.updateProfile(m)}return{save:B,back:L,disabilityForm:f,pages:y,disabilitiesList:k,selection:E,disabilityOptions:s,nameEntry:O,day:T,formMeta:b,formErrors:g,submitUpdate:z}}}),Ee={class:"row justify-center"},Se={class:"col-12 col-lg-10"},Ve={class:"row justify-center"},we={class:"col-12"},Qe={class:"col-12 col-md-4 text-right"},Ue=t("hr",null,null,-1),Ce={key:0,class:"q-py-md"},Ie={key:0,class:"q-mb-md"},Fe={key:1},Ne=t("hr",null,null,-1),Ye={key:1,class:"q-py-md"},De={key:0,class:"q-mb-md"},Me={key:1},Oe={key:2},Te={key:0,class:"row"},ze={class:"col-2"},Be={class:"col-2"},Le={class:"col-3"},Pe={class:"col-5"},je={key:1,class:"row"},Ae={class:"col-12"},Re=t("hr",null,null,-1),Ge={key:2},Ze={key:0,class:"q-pl-md error-message text-body2"},He={class:"row justify-center q-my-xl"},Xe={class:"col-12 col-md-4 q-px-md"};function We(e,o,f,h,y,k){return a(),$(le,{step:e.step,name:e.name,title:e.title},{default:i(()=>[t("div",Ee,[t("div",Se,[t("form",{onSubmit:o[3]||(o[3]=te((...s)=>e.submitUpdate&&e.submitUpdate(...s),["prevent"]))},[t("div",null,[t("div",Ve,[t("div",we,[(a(!0),u(Y,null,D(e.pages,s=>(a(),$(se,{key:s[3],class:_(["q-mb-sm",e.$q.screen.gt.md?"q-pa-xl":""])},{default:i(()=>[l(Q,null,{default:i(()=>[t("div",{class:_(["text-dark text-center",e.$q.screen.lt.lg?"text-h6":"text-h5"])},r(e.disabilityForm.title),3),t("div",{class:_(["row justify-end",e.$q.screen.lt.lg?"q-mt-md":""])},[t("div",Qe,[t("div",{class:_(["text-dark",e.$q.screen.lt.lg?"text-body2":"text-body1"])},"Form "+r(e.disabilityForm.formId),3),t("div",{class:_(["text-dark",e.$q.screen.lt.lg?"text-body2":"text-body1"])},"OMB Control Number "+r(e.disabilityForm.controlNumber),3),t("div",{class:_(["text-dark",e.$q.screen.lt.lg?"text-body2":"text-body1"])},"Expires "+r(e.disabilityForm.expiration),3)])],2),Ue,s[14]!==""?(a(),u("div",Ce,[t("div",{class:_(["text-dark",e.$q.screen.lt.lg?"text-body1":"text-h6"])},r(s[14]),3),t("div",{class:_(["text-dark q-pa-md",e.$q.screen.lt.lg?"text-body2":"text-body1"])},[s[15]!==""?(a(),u("div",Ie,r(s[15]),1)):c("",!0),s[38]!==""?(a(),u("div",Fe,r(s[38]),1)):c("",!0)],2),Ne])):c("",!0),s[16]!==""?(a(),u("div",Ye,[t("div",{class:_(["text-dark",e.$q.screen.lt.lg?"text-body1":"text-h6"])},r(s[16]),3),t("div",{class:_(["text-dark q-pa-md",e.$q.screen.lt.lg?"text-body2":"text-body1"])},[s[17]!==""?(a(),u("div",De,r(s[17]),1)):c("",!0),s[39]!==""?(a(),u("div",Me,r(s[39]),1)):c("",!0),s[40]==="Yes"?(a(),u("div",Oe,[e.$q.screen.gt.md?(a(),u("div",Te,[t("div",ze,[t("ul",null,[(a(!0),u(Y,null,D(e.disabilitiesList.lg[1],d=>(a(),u("li",{key:d[3]},r(d[6]),1))),128))])]),t("div",Be,[t("ul",null,[(a(!0),u(Y,null,D(e.disabilitiesList.lg[2],d=>(a(),u("li",{key:d[3]},r(d[6]),1))),128))])]),t("div",Le,[t("ul",null,[(a(!0),u(Y,null,D(e.disabilitiesList.lg[3],d=>(a(),u("li",{key:d[3]},r(d[6]),1))),128))])]),t("div",Pe,[t("ul",null,[(a(!0),u(Y,null,D(e.disabilitiesList.lg[4],d=>(a(),u("li",{key:d[3]},r(d[6]),1))),128))])])])):c("",!0),e.$q.screen.lt.md?(a(),u("div",je,[t("div",Ae,[t("ul",null,[(a(!0),u(Y,null,D(e.disabilitiesList.sm[1],d=>(a(),u("li",{key:d[3]},r(d[6]),1))),128))])])])):c("",!0)])):c("",!0)],2),Re])):c("",!0),s[41]==="Yes"?(a(),u("div",Ge,[t("div",{class:_(["text-dark q-pa-md",e.$q.screen.lt.lg?"text-body2":"text-body1"])},[V(r(s[44])+" ",1),e.formErrors.selection?(a(),$(w,{key:0,size:"md",class:"q-ml-sm",name:"error",color:"red"})):c("",!0)],2),l(j,{options:e.disabilityOptions,type:"radio",modelValue:e.selection,"onUpdate:modelValue":o[0]||(o[0]=d=>e.selection=d),class:_(e.formErrors.selection?"error-message":"")},null,8,["options","modelValue","class"]),e.formErrors.selection?(a(),u("div",Ze,r(e.formErrors.selection)+" - "+r(e.selection),1)):c("",!0),t("div",He,[t("div",{class:_(["col-12 col-md-4 q-px-md",e.$q.screen.lt.md?"q-mb-lg":""])},[l(W,{dense:e.$q.screen.lt.md,modelValue:e.nameEntry,"onUpdate:modelValue":o[1]||(o[1]=d=>e.nameEntry=d),label:"Your Name",hint:"Your Name",error:!!e.formErrors.nameEntry,"bottom-slots":""},null,8,["dense","modelValue","error"])],2),t("div",Xe,[l(W,{type:"date",dense:e.$q.screen.lt.md,modelValue:e.day,"onUpdate:modelValue":o[2]||(o[2]=d=>e.day=d),hint:"Today's Date",error:!!e.formErrors.day,"bottom-slots":""},{error:i(()=>[V(r(e.formErrors.day),1)]),_:1},8,["dense","modelValue","error"])])])])):c("",!0)]),_:2},1024)]),_:2},1032,["class"]))),128))])])]),l(oe,{class:"text-right"},{default:i(()=>[l(M,{onClick:e.back,color:"secondary",label:e.$t("back"),class:"q-mr-sm"},null,8,["onClick","label"]),l(M,{type:"submit",color:"info",label:e.$t("continue")},null,8,["label"])]),_:1})],32)])])]),_:1},8,["step","name","title"])}var ie=R(qe,[["render",We]]);const Je=A({props:{title:String,step:Number,name:Number},setup(){const{updateVoluntaryForm:e,submitAffirmativeToQB:o,updateProfile:f}=K(),{voluntaryFormOptions:h}=x(),y=N(()=>h.affirmative.filter(n=>n[10]==="Gender")),k=N(()=>h.affirmative.filter(n=>n[10]==="Ethnicity")),s=N(()=>h.affirmative.filter(n=>n[10]==="Race")),d=J({gender:F().required("Make a Selection").nullable(),ethnicity:F().required("Make a Selection").nullable(),race:F().required("Make a Selection").nullable(),initials:F().required({message:"Initials are required."}).matches(/^[a-zA-Z]+$/g,{excludeEmptyString:!0,message:"Initials cannot contain numbers or special characters."}).min(2,{message:"Initials must be two or three letters."}).max(3,{message:"Initials must be two or three letters."})}),{meta:b,errors:g,handleSubmit:U}=pe({validationSchema:d}),{value:E}=I("gender"),{value:O}=I("ethnicity"),{value:T}=I("race"),{value:z}=I("initials"),B=U(async n=>{const p=y.value.find(q=>q.value===n.gender),C=k.value.find(q=>q.value===n.ethnicity),S=s.value.find(q=>q.value===n.race),P={16:{value:n.gender,label:p.label},20:{value:n.ethnicity,label:C.label},22:{value:n.race,label:S.label},24:{value:new Date},34:{value:n.initials}};await e({next:8,values:P,type:"affirmative"}),o()});function L(){f({next:8})}function m(){f({next:6})}return{save:L,back:m,submitUpdate:B,formMeta:b,formErrors:g,genderOptions:y,gender:E,ethnicityOptions:k,ethnicity:O,raceOptions:s,race:T,initials:z}}}),Ke={class:"row justify-center"},xe={class:"col-12 col-lg-10"},et={class:"row justify-center"},tt={class:"col-12"},st={class:"text-h6 text-primary"},at=t("hr",null,null,-1),lt={class:"text-body2 text-dark q-mb-sm"},ot={class:"text-body2 text-dark q-mb-sm"},rt=t("div",{class:"text-h6 text-dark"},"Affirmative Action Related Data",-1),nt=t("div",{class:"text-subtitle2 text-italic"},"Please check appropriate boxes.",-1),it={class:"row"},dt={class:"col-12 col-lg-5 q-pr-sm"},ut={class:"text-body1 text-primary"},ct={class:"q-py-sm"},mt={key:0,class:"q-pl-md error-message text-body2"},pt={class:"col-12 col-lg-4 q-pr-sm"},ft={class:"text-body1 text-primary"},vt={class:"q-py-sm"},yt={key:0,class:"q-pl-md error-message text-body2"},bt={class:"col-12 col-lg-3 q-pr-sm"},ht={class:"text-body1 text-primary"},$t={class:"q-py-sm"},gt={key:0,class:"q-pl-md error-message text-body2"},_t={class:"row"},kt={class:"col-6 col-md-3 col-lg-2"};function qt(e,o,f,h,y,k){return a(),$(le,{step:e.step,name:e.name,title:e.title},{default:i(()=>[t("div",Ke,[t("div",xe,[t("form",{onSubmit:o[4]||(o[4]=te((...s)=>e.submitUpdate&&e.submitUpdate(...s),["prevent"]))},[t("div",null,[t("div",et,[t("div",tt,[l(se,null,{default:i(()=>[l(Q,null,{default:i(()=>[t("div",st,r(e.$t("affirmativeTitle")),1),at,t("div",lt,r(e.$t("affirmativeStatement1")),1),t("div",ot,r(e.$t("affirmativeStatement2")),1)]),_:1}),l(me),l(Q,{class:"q-pb-none"},{default:i(()=>[rt,nt]),_:1}),l(Q,null,{default:i(()=>[t("div",it,[t("div",dt,[t("div",ut,[V(" Race "),e.formErrors.race?(a(),$(w,{key:0,size:"md",class:"q-ml-sm",name:"error",color:"red"})):c("",!0)]),t("div",ct,[l(j,{options:e.raceOptions,type:"radio",modelValue:e.race,"onUpdate:modelValue":o[0]||(o[0]=s=>e.race=s)},{label:i(s=>[t("span",null,r(s.label),1),s[8]!==""?(a(),$(w,{key:0,class:"q-ml-sm",name:"info",color:"accent"},{default:i(()=>[l(X,{self:"center right",anchor:"center right",class:"bg-primary text-caption"},{default:i(()=>[V(r(s[8]),1)]),_:2},1024)]),_:2},1024)):c("",!0)]),_:1},8,["options","modelValue"]),e.formErrors.race?(a(),u("div",mt,r(e.formErrors.race),1)):c("",!0)])]),t("div",pt,[t("div",ft,[V(" Ethnicity "),e.formErrors.ethnicity?(a(),$(w,{key:0,size:"md",class:"q-ml-sm",name:"error",color:"red"})):c("",!0)]),t("div",vt,[l(j,{options:e.ethnicityOptions,type:"radio",modelValue:e.ethnicity,"onUpdate:modelValue":o[1]||(o[1]=s=>e.ethnicity=s)},{label:i(s=>[t("span",null,r(s.label),1),s[8]!==""?(a(),$(w,{key:0,class:"q-ml-sm",name:"info",color:"accent"},{default:i(()=>[l(X,{self:"center right",anchor:"center right",class:"bg-primary text-caption"},{default:i(()=>[V(r(s[8]),1)]),_:2},1024)]),_:2},1024)):c("",!0)]),_:1},8,["options","modelValue"]),e.formErrors.ethnicity?(a(),u("div",yt,r(e.formErrors.ethnicity),1)):c("",!0)])]),t("div",bt,[t("div",ht,[V(" Gender "),e.formErrors.gender?(a(),$(w,{key:0,size:"md",class:"q-ml-sm",name:"error",color:"red"})):c("",!0)]),t("div",$t,[l(j,{options:e.genderOptions,type:"radio",modelValue:e.gender,"onUpdate:modelValue":o[2]||(o[2]=s=>e.gender=s)},{label:i(s=>[t("span",null,r(s.label),1),s[8]!==""?(a(),$(w,{key:0,class:"q-ml-sm",name:"info",color:"accent"},{default:i(()=>[l(X,{self:"center right",anchor:"center right",class:"bg-primary text-caption"},{default:i(()=>[V(r(s[8]),1)]),_:2},1024)]),_:2},1024)):c("",!0)]),_:1},8,["options","modelValue"]),e.formErrors.gender?(a(),u("div",gt,r(e.formErrors.gender),1)):c("",!0)])])])]),_:1}),l(Q,null,{default:i(()=>[t("div",_t,[t("div",kt,[l(W,{maxlength:"3",dense:e.$q.screen.lt.md,modelValue:e.initials,"onUpdate:modelValue":o[3]||(o[3]=s=>e.initials=s),label:"Your Initials",hint:"Your Initials",error:!!e.formErrors.initials,"bottom-slots":""},null,8,["dense","modelValue","error"])])])]),_:1})]),_:1})])])]),l(oe,{class:"text-right"},{default:i(()=>[l(M,{onClick:e.back,color:"secondary",label:e.$t("back"),class:"q-mr-sm"},null,8,["onClick","label"]),l(M,{type:"submit",color:"info",label:e.$t("continue")},null,8,["label"])]),_:1})],32)])])]),_:1},8,["step","name","title"])}var de=R(Je,[["render",qt]]);const Et=A({props:{title:String,step:Number,name:Number},setup(){const{updateEmployeeData:e}=$e(),o=ee(),f=K(),{updateVetsForm:h,submitVeteransToQB:y,updateProfile:k}=f,{proceedToTest:s}=ae(f),{voluntaryFormOptions:d}=x(),b=Z([]),g=Z(null),U=Z(""),E=Z(null),O=F().required({message:"Initials are required."}).matches(/^[a-zA-Z]+$/g,{excludeEmptyString:!0,message:"Initials cannot contain numbers or special characters."}).min(2,{message:"Initials must be two or three letters."}).max(3,{message:"Initials must be two or three letters."}),T=J({initials:F().required({message:"Initials are required."}).matches(/^[a-zA-Z]+$/g,{excludeEmptyString:!0,message:"Initials cannot contain numbers or special characters."}).min(2,{message:"Initials must be two or three letters."}).max(3,{message:"Initials must be two or three letters."}),veteran:ke().of(J()).min(1,{message:"You must select at least one."})}).required(),z=N(()=>g.value?g.value:null),B=N(()=>E.value?E.value:null);async function L(){const p=[],C=d.veterans[0][9],S=d.veterans[0][10];b.value.forEach(q=>{const v={6:{value:C,label:S},8:{value:q.value,label:q.label}};p.push(v)});const P={8:{value:C,label:S},17:{value:new Date},16:{value:U.value.toUpperCase()}},G={next:0,values:P,selections:p};b.value.length===0&&(g.value="Make a Selection");try{await T.validate({initials:U.value,veteran:b.value}),E.value=null,g.value=null,await h(G),await y(),s.value?(e({fields:{122:{value:8}}}),o.replace({name:"assessment"})):o.replace({name:"thanks"})}catch({name:q,path:v,errors:re,inner:Zt}){v==="veteran"?g.value=re[0].message:v==="initials"&&(E.value=re[0].message)}}function m(){k({next:8})}function n(){k({next:7})}return ne(b,(p,C)=>{console.log(p);const S=p.find(v=>v.value===6),P=C.find(v=>v.value===6),G=C.find(v=>v.value===7),q=p.find(v=>v.value===7);p.length===0?g.value="Make a Selection":g.value=null,P!==void 0&&p.length>1?b.value=p.filter(v=>v.value!==6):S!==void 0&&p.length>1?b.value=[S]:G!==void 0&&p.length>1?b.value=p.filter(v=>v.value!==7):q!==void 0&&p.length>1&&(b.value=[q])}),ne(U,async(p,C)=>{try{await O.validate(p),E.value=null}catch({errors:S}){S[0]instanceof Object?E.value=S[0].message:E.value=S[0]}}),{save:m,back:n,submitUpdate:L,voluntaryFormOptions:d,veteran:b,vetError:z,initials:U,initialsError:B}}}),St={class:"row justify-center"},Vt={class:"col-12"},wt={class:"text-h6 text-primary"},Qt=t("hr",null,null,-1),Ut={class:"text-body2 text-dark q-mb-sm"},Ct={class:"text-body2 text-dark q-mb-sm"},It=t("div",{class:"text-h6 text-dark"},"Multiple Categories May be Selected if Veteran Falls into Multiple Categories.",-1),Ft=t("div",{class:"text-subtitle2 text-italic"},"Please check the appropriate boxes.",-1),Nt={class:"row"},Yt={class:"col-12 col-lg-8"},Dt={class:"text-body1 text-primary"},Mt={class:"q-py-sm"},Ot={key:0,class:"q-pl-md error-message text-body2"},Tt={class:"row"},zt={class:"col-6 col-md-3 col-lg-2"};function Bt(e,o,f,h,y,k){return a(),$(le,{step:e.step,name:e.name,title:e.title},{default:i(()=>[t("form",{onSubmit:o[2]||(o[2]=te((...s)=>e.submitUpdate&&e.submitUpdate(...s),["prevent"]))},[t("div",null,[t("div",St,[t("div",Vt,[l(se,null,{default:i(()=>[l(Q,null,{default:i(()=>[t("div",wt,r(e.$t("veteranTitle")),1),Qt,t("div",Ut,r(e.$t("veteranStatement1")),1),t("div",Ct,r(e.$t("veteranStatement2")),1)]),_:1}),l(me),l(Q,{class:"q-pb-none"},{default:i(()=>[It,Ft]),_:1}),l(Q,null,{default:i(()=>[t("div",Nt,[t("div",Yt,[t("div",Dt,[V(" Please check the box if you are: "),e.vetError?(a(),$(w,{key:0,size:"md",class:"q-ml-sm",name:"error",color:"red"})):c("",!0)]),t("div",Mt,[l(j,{options:e.voluntaryFormOptions.veterans,type:"checkbox",modelValue:e.veteran,"onUpdate:modelValue":o[0]||(o[0]=s=>e.veteran=s)},{label:i(s=>[t("span",null,r(s.label),1),s[7]!==""?(a(),$(w,{key:0,class:"q-ml-sm",name:"info",color:"accent"},{default:i(()=>[l(X,{self:"center right",anchor:"center right",class:"bg-primary text-caption"},{default:i(()=>[V(r(s[7]),1)]),_:2},1024)]),_:2},1024)):c("",!0)]),_:1},8,["options","modelValue"]),e.vetError?(a(),u("div",Ot,r(e.vetError),1)):c("",!0)])])])]),_:1}),l(Q,null,{default:i(()=>[t("div",Tt,[t("div",zt,[l(W,{maxlength:"3",dense:e.$q.screen.lt.md,modelValue:e.initials,"onUpdate:modelValue":o[1]||(o[1]=s=>e.initials=s),label:"Your Initials",hint:"Your Initials",error:!!e.initialsError,"bottom-slots":""},{error:i(()=>[V(r(e.initialsError),1)]),_:1},8,["dense","modelValue","error"])])])]),_:1})]),_:1})])])]),l(oe,{class:"text-right"},{default:i(()=>[l(M,{onClick:e.back,color:"secondary",label:e.$t("back"),class:"q-mr-sm"},null,8,["onClick","label"]),l(M,{type:"submit",color:"info",label:e.$t("continue")},null,8,["label"])]),_:1})],32)]),_:1},8,["step","name","title"])}var ue=R(Et,[["render",Bt]]);const Lt=A({components:{disability:ie,affirmative:de,veteran:ue},setup(){const{step:e}=ae(K());return{step:e,disability:ie,affirmative:de,veteran:ue}}});function Pt(e,o,f,h,y,k){const s=H("disability"),d=H("affirmative"),b=H("veteran");return a(),u("div",null,[l(ye,{modelValue:e.step,"onUpdate:modelValue":o[0]||(o[0]=g=>e.step=g),animated:"","done-color":"info","active-color":"dark","inactive-color":"secondary"},{default:i(()=>[l(s,{title:"",name:6,done:e.step>6},null,8,["done"]),l(d,{title:"",name:7,done:e.step>7},null,8,["done"]),l(b,{title:"",name:8,done:e.step>8},null,8,["done"])]),_:1},8,["modelValue"])])}var ce=R(Lt,[["render",Pt]]);const jt=A({components:{stepper:ce},setup(){const e=x(),{disabilityForm:o}=e,{voluntaryLoadingState:f}=ae(e),h=ee();function y(){o||h.replace({name:"apply"})}return y(),{stepper:ce,voluntaryLoadingState:f}}}),At={key:0,class:"absolute-center"},Rt={key:1};function Gt(e,o,f,h,y,k){const s=H("stepper");return a(),$(ve,{style:{"max-width":"100vw","max-height":"100vh"}},{default:i(()=>[e.voluntaryLoadingState?(a(),u("div",At,[l(fe,{color:"primary",size:"5em"})])):c("",!0),e.voluntaryLoadingState?c("",!0):(a(),u("div",Rt,[l(s)]))]),_:1})}var ms=R(jt,[["render",Gt]]);export{ms as default};
