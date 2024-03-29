import{l as re,bX as R,c as _,_ as ne,B as d,as as V,bt as n,C as U,E as o,bQ as ge,d as l,G as Qe,ae as a,bY as C,at as m,r as N,w as Ne,cX as F,bU as ae,bS as Fe,b7 as pe,cV as be,cW as le,H as E,az as se,F as Ie,b6 as Oe,bV as Me,cm as De}from"./index.8838c464.js";import{Q as Ye}from"./QPage.49220ad5.js";import{Q as Ve,a as je}from"./QStep.0cb59555.js";import{b as Be,k as $e,f as He,m as Ce,e as we,h as ke,d as Te,g as Le}from"./app.42c36b1f.js";import{a as J}from"./QSelect.78b00ca7.js";import{Q as qe}from"./QStepperNavigation.6017b384.js";import{u as Se}from"./i18n.c69e89dd.js";import{a as Ee,u as h}from"./vee-validate.esm.ac2c348d.js";import{a as D,c as q}from"./array.59f93f43.js";import{s as Je}from"./states.03e3d448.js";import{u as Pe}from"./use-quasar.ed4be5d9.js";import{Q as We}from"./QForm.fc17450c.js";import{Q as Ue}from"./QTooltip.72214d5e.js";import"./use-panel.9c83e7d4.js";import"./touch.3df10340.js";import"./selection.26380b58.js";import"./QSlideTransition.1f3f1635.js";import"./_commonjsHelpers.a26ce4be.js";import"./dayjs.106d80ab.js";import"./localForage.ca6e9d39.js";import"./index.04bc0a32.js";import"./QChip.5ba75959.js";import"./QMenu.b8edc490.js";import"./position-engine.cba8bd09.js";import"./rtl.b51694b1.js";const Xe=re({props:{title:String,step:Number,name:Number},setup(){const{checkedIn:e,onKiosk:s}=R(Be()),g=$e(),{hiringCenterAvailable:c}=R(He()),{updateProfile:k}=g,{profile:p}=R(g),t=Ce(),{evergreenJobOptions:f}=R(t),{t:r}=Se(),z=_(()=>e.value?D({selection:D().required(`${r("pleaseSelectAJob")}`).nullable()}):!1),{meta:H,errors:W,handleSubmit:X,isSubmitting:Z}=Ee({validationSchema:z,initialValues:{selection:p.value[19].value?{value:p.value[19].value,label:p.value[19].label}:null}}),{value:T}=h("selection"),M=X(w=>{const x={19:{value:w.selection.value,label:w.selection.label},40:{value:w.selection[13],label:w.selection[12]}};k({next:1,values:x})});return{checkedIn:e,onKiosk:s,selection:T,formMeta:H,formErrors:W,isSubmitting:Z,submitUpdate:M,evergreenJobOptions:f,hiringCenterAvailable:c}}}),Ze={key:0},Ge={class:"text-caption"};function Ke(e,s,g,c,k,p){return d(),V(Ve,{name:e.name,title:e.title,done:e.step>0},{default:n(()=>[e.checkedIn||e.onKiosk||!e.onKiosk&&e.hiringCenterAvailable?(d(),U("div",Ze,[o("form",{onSubmit:s[1]||(s[1]=ge((...t)=>e.submitUpdate&&e.submitUpdate(...t),["prevent"]))},[l(J,{autofocus:"",label:e.$t("selectAJob"),modelValue:e.selection,"onUpdate:modelValue":s[0]||(s[0]=t=>e.selection=t),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",options:e.evergreenJobOptions,style:Qe(e.$q.screen.gt.md?"width: 50%":"width: 100%"),error:!!e.formErrors.selection,"bottom-slots":"",dense:""},{error:n(()=>[o("div",Ge,a(e.formErrors.selection),1)]),_:1},8,["label","modelValue","options","style","error"]),l(qe,{class:"text-right"},{default:n(()=>[l(C,{type:"submit",color:"info",label:e.$t("continue")},null,8,["label"])]),_:1})],32)])):m("",!0)]),_:1},8,["name","title","done"])}var _e=ne(Xe,[["render",Ke]]);const xe=["Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador","Northwest Territories","Nova Scotia","Nunavut","Ontario","Prince Edward Island","Quebec","Saskatchewan","Yukon Territory"],et=re({props:{title:String,step:Number,name:Number},components:{},setup(){const{employee:e}=R(we()),s=[{label:"Call",value:1},{label:"Text",value:2},{label:"Email",value:3},{label:"Call, Text, or Email",value:4},{label:"Do Not Contact Me",value:5}],g=[{label:"United States",value:"United States"},{label:"Canada",value:"Canada"}],c=N(!1),k=N(!1),p=N(null),t=N([]),f=N(""),r=N(null),z=$e(),{onJobBoard:H}=R(z),W=D({first:q().required("First name is required!").matches(/^[aA-zZ\s]+$/,{excludeEmptyString:!0,message:"Only letters are allowed for this field!"}),middle:q().matches(/^[aA-zZ\s]+$/,{excludeEmptyString:!0,message:"Only letters are allowed for this field!"}).nullable().notRequired(),last:q().required("Last name is required!").matches(/^[aA-zZ\s]+$/,{excludeEmptyString:!0,message:"Only letters are allowed for this field!"}),suffix:q().nullable().notRequired(),street1:q().required(),street2:q().nullable().notRequired(),city:q().required(),state:q().required(),postal:q().required(),addressCountry:D().required("Country is required!").typeError("Country is a required field"),contact:D().nullable().notRequired()}),{meta:X,errors:Z,handleSubmit:T,isSubmitting:M}=Ee({validationSchema:W,initialValues:{first:e.value[20]?e.value[20]:"",middle:e.value[21]?e.value[21]:"",last:e.value[22]?e.value[22]:"",suffix:e.value[23]?e.value[23]:"",contact:e.value[57]?{value:e.value[57],label:e.value[58]}:null,street1:e.value[41]?e.value[41]:"",street2:e.value[42]?e.value[42]:"",city:e.value[43]?e.value[43]:"",state:e.value[44]?e.value[44]:"",postal:e.value[45]?e.value[45]:"",addressCountry:e.value[46]?{value:e.value[46],label:e.value[46]}:null}}),{value:w,meta:x}=h("first"),{value:G,meta:ie}=h("middle"),{value:ee,meta:de}=h("last"),{value:O}=h("suffix"),{value:ue}=h("contact"),{value:P}=h("street1"),{value:I}=h("street2"),{value:A}=h("city"),{value:u}=h("state"),{value:y}=h("postal"),{value:v}=h("addressCountry"),K=_(()=>{const i=`${w.value} ${ee.value} ${O.value}`;return ke.formatName(i)}),te=_(()=>`${P.value}${I.value===""?"":` ${I.value}`}, ${A.value}, ${u.value}, ${y.value}, ${v.value.value}`);function L(){const i={next:2};z.updateProfile(i)}function fe(){c.value=!0}const oe=T(async i=>{const j={23:i.first,24:i.middle,25:i.last,26:i.suffix,27:e.value[27],28:e.value[26],46:i.contact,32:i.street1,33:i.street2,34:i.city,35:i.state,36:i.postal,37:i.addressCountry.value},B={next:2,values:j};c.value=!1;const ce=await z.updateProfile(B);console.log(ce)});function he(){const i={next:0};z.updateProfile(i)}const Y=i=>{p.value=i};Ne(f,i=>{i&&i!==""&&i.length>3?ye(i):t.value=[]});const ye=async i=>{await fetch(`https://a.tiles.mapbox.com/geocoding/v5/mapbox.places/${i}.json?access_token=pk.eyJ1IjoicXVpY2tiYXNlb3BzIiwiYSI6ImNqNnpueGpzaDAzMmEyeG15bjQ4NXBldWYifQ.WyIwRcqCXdj-zo62Ro_UnQ`,{credentials:"omit",headers:{Accept:"*/*","Accept-Language":"en-US,en;q=0.5","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"cross-site"},referrer:"https://elitehcms.quickbase.com/",method:"GET",mode:"cors"}).then(j=>j.json()).then(j=>{t.value=j.features})};return{submitUpdate:oe,isSubmitting:M,save:L,back:he,updateCountry:Y,first:w,middle:G,last:ee,suffix:O,contact:ue,street1:P,street2:I,city:A,state:u,postal:y,addressCountry:v,hasPersonalInfo:k,showEdit:c,firstMeta:x,middleMeta:ie,lastMeta:de,formMeta:X,formErrors:Z,options:s,countries:g,fullName:K,fullAddress:te,employee:e,showEditFunction:fe,onJobBoard:H,states:Je,provinces:xe,fetchPlaces:ye,addressOptions:t,addressSearch:f,filterFn:(i,j,B)=>{j(()=>{f.value=i.toLowerCase()},ce=>{i!==""&&ce.options.length>0&&(ce.setOptionIndex(-1),ce.moveOptionSelection(1,!0))})},setAddress:i=>{if(i){P.value=`${i.address} ${i.text}`,I.value="",A.value=i.context.find(B=>B.id.startsWith("place.")).text,y.value=i.context.find(B=>B.id.startsWith("postcode.")).text,u.value=i.context.find(B=>B.id.startsWith("region.")).text;const j=i.context.find(B=>B.id.startsWith("country.")).text;v.value={label:j,value:j},f.value=null,r.value.focus()}},streetRef:r}}}),tt={class:"row justify-between"},ot={class:"col-12 col-md-5"},lt={class:"text-caption"},st={class:"text-caption"},at={class:"text-caption"},rt={class:"text-caption"},nt={class:"text-caption"},it={class:"col-12 col-md-6"},dt={class:"row"},ut={class:"text-caption"},ct={class:"text-caption"};function mt(e,s,g,c,k,p){return d(),U("form",{onSubmit:s[13]||(s[13]=ge((...t)=>e.submitUpdate&&e.submitUpdate(...t),["prevent"]))},[o("div",tt,[o("div",ot,[l(F,{dense:"",modelValue:e.first,"onUpdate:modelValue":s[0]||(s[0]=t=>e.first=t),label:`${e.$t("firstName")} *`,error:!!e.formErrors.first,"bottom-slots":""},{error:n(()=>[o("div",lt,a(e.formErrors.first),1)]),_:1},8,["modelValue","label","error"]),l(F,{dense:"",modelValue:e.middle,"onUpdate:modelValue":s[1]||(s[1]=t=>e.middle=t),label:e.$t("middleName"),error:!!e.formErrors.middle,"bottom-slots":""},{error:n(()=>[o("div",st,a(e.formErrors.middle),1)]),_:1},8,["modelValue","label","error"]),l(F,{dense:"",modelValue:e.last,"onUpdate:modelValue":s[2]||(s[2]=t=>e.last=t),label:`${e.$t("lastName")} *`,error:!!e.formErrors.last,"bottom-slots":""},{error:n(()=>[o("div",at,a(e.formErrors.last),1)]),_:1},8,["modelValue","label","error"]),l(F,{dense:"",modelValue:e.suffix,"onUpdate:modelValue":s[3]||(s[3]=t=>e.suffix=t),label:e.$t("suffix"),error:!!e.formErrors.suffix,"bottom-slots":""},{error:n(()=>[o("div",rt,a(e.formErrors.suffix),1)]),_:1},8,["modelValue","label","error"]),l(J,{dense:"",modelValue:e.contact,"onUpdate:modelValue":s[4]||(s[4]=t=>e.contact=t),label:e.$t("preferredContactMethod"),options:e.options,error:!!e.formErrors.contact,"bottom-slots":""},{error:n(()=>[o("div",nt,a(e.formErrors.contact),1)]),_:1},8,["modelValue","label","options","error"])]),e.$q.screen.gt.sm?(d(),V(ae,{key:0,vertical:""})):m("",!0),o("div",it,[l(J,{dense:"",modelValue:e.addressSearch,"onUpdate:modelValue":[s[5]||(s[5]=t=>e.addressSearch=t),e.setAddress],"use-input":"","hide-selected":"","fill-input":"","input-debounce":"300",label:`${e.$t("searchAddress")}`,options:e.addressOptions,onFilter:e.filterFn,"option-label":"place_name","option-value":"id","bottom-slots":"","hide-dropdown-icon":""},{append:n(()=>[l(Fe,{name:"search"})]),_:1},8,["modelValue","label","options","onFilter","onUpdate:modelValue"]),l(F,{ref:"streetRef",dense:"",modelValue:e.street1,"onUpdate:modelValue":s[6]||(s[6]=t=>e.street1=t),label:`${e.$t("streetAddress1")} *`,error:!!e.formErrors.street1,"bottom-slots":""},null,8,["modelValue","label","error"]),l(F,{dense:"",modelValue:e.street2,"onUpdate:modelValue":s[7]||(s[7]=t=>e.street2=t),label:e.$t("streetAddress2"),error:!!e.formErrors.street2,"bottom-slots":""},null,8,["modelValue","label","error"]),l(F,{dense:"",modelValue:e.city,"onUpdate:modelValue":s[8]||(s[8]=t=>e.city=t),label:`${e.$t("city")} *`,error:!!e.formErrors.city,"bottom-slots":""},null,8,["modelValue","label","error"]),o("div",dt,[l(J,{class:"col-12 col-md-8",dense:"",modelValue:e.state,"onUpdate:modelValue":s[9]||(s[9]=t=>e.state=t),label:`${e.$t("stateRegion")} *`,options:e.addressCountry?e.addressCountry.value==="United States"?e.states:e.provinces:e.states,error:!!e.formErrors.state,"bottom-slots":""},{error:n(()=>[o("div",ut,a(e.formErrors.state),1)]),_:1},8,["modelValue","label","options","error"]),l(F,{class:"col-12 col-md-4",dense:"",modelValue:e.postal,"onUpdate:modelValue":s[10]||(s[10]=t=>e.postal=t),label:`${e.$t("zipCode")} *`,error:!!e.formErrors.postal,"bottom-slots":""},null,8,["modelValue","label","error"])]),l(J,{dense:"",modelValue:e.addressCountry,"onUpdate:modelValue":s[11]||(s[11]=t=>e.addressCountry=t),label:`${e.$t("country")} *`,options:e.countries,error:!!e.formErrors.addressCountry,"bottom-slots":""},{error:n(()=>[o("div",ct,a(e.formErrors.addressCountry),1)]),_:1},8,["modelValue","label","options","error"])])]),l(qe,{class:"text-right"},{default:n(()=>[e.onJobBoard?m("",!0):(d(),V(C,{key:0,onClick:s[12]||(s[12]=t=>e.$emit("back")),color:"secondary",label:e.$t("back"),class:"q-mr-sm"},null,8,["label"])),l(C,{type:"submit",color:"info",label:e.$t("continue")},null,8,["label"])]),_:1})],32)}var pt=ne(et,[["render",mt]]);const ft=/^[0-9]{10}/g,vt=re({props:{title:String,step:Number,name:Number},components:{editPersonalInfo:pt},setup(){const{employee:e}=R(we()),s=[{label:"Call",value:0},{label:"Text",value:1},{label:"Email",value:2}],g=[{label:"United States",value:"United States"},{label:"Canada",value:"Canada"}],c=N(!0),k=N(!1),p=N(null),t=$e(),{onJobBoard:f,personalInfoNeeded:r}=R(t),z=D({first:q().required("First name is required!").matches(/^[aA-zZ\s]+$/,{excludeEmptyString:!0,message:"Only letters are allowed for this field!"}),middle:q().matches(/^[aA-zZ\s]+$/,{excludeEmptyString:!0,message:"Only letters are allowed for this field!"}).nullable().notRequired(),last:q().required("Last name is required!").matches(/^[aA-zZ\s]+$/,{excludeEmptyString:!0,message:"Only letters are allowed for this field!"}),suffix:q().nullable().notRequired(),email:q().required("Email is required!").email("You must provide a valid email!"),phone:q().matches(ft,{message:"Valid Phone Number Required!"}).required("Phone number is required!"),street1:q().required(),street2:q().nullable().notRequired(),city:q().required(),state:q().required(),postal:q().required(),addressCountry:D().required(),contact:D().nullable().notRequired()}),{meta:H,errors:W,handleSubmit:X,isSubmitting:Z}=Ee({validationSchema:z,initialValues:{first:e.value[20]?e.value[20]:"",middle:e.value[21]?e.value[21]:"",last:e.value[22]?e.value[22]:"",suffix:e.value[23]?e.value[23]:"",phone:e.value[27]?e.value[27]:"",email:e.value[26]?e.value[26]:"",contact:e.value[57]?{value:e.value[57],label:e.value[58]}:null,street1:e.value[41]?e.value[41]:"",street2:e.value[42]?e.value[42]:"",city:e.value[43]?e.value[43]:"",state:e.value[44]?e.value[44]:"",postal:e.value[45]?e.value[45]:"",addressCountry:e.value[46]?{value:e.value[46],label:e.value[46]}:null}}),{value:T,meta:M}=h("first"),{value:w,meta:x}=h("middle"),{value:G,meta:ie}=h("last"),{value:ee}=h("suffix"),{value:de}=h("email"),{value:O}=h("phone"),{value:ue}=h("contact"),{value:P}=h("street1"),{value:I}=h("street2"),{value:A}=h("city"),{value:u}=h("state"),{value:y}=h("postal"),{value:v}=h("addressCountry"),K=_(()=>{const b=`${T.value} ${G.value} ${ee.value}`;return ke.formatName(b)}),te=_(()=>`${P.value}${I.value===""?"":` ${I.value}`}, ${A.value}, ${u.value}, ${y.value}, ${v.value.value}`),L=_(()=>{let b="";return O.value.length===11?b=O.value.substring(1):b=O.value,ke.formatPhone(b)});async function fe(){const b={23:e.value[20],24:e.value[21],25:e.value[22],26:e.value[23],27:e.value[27],28:e.value[26],46:e.value[57],32:e.value[41],33:e.value[42],34:e.value[43],35:e.value[44],36:e.value[45],37:e.value[46]},ve={next:2,values:b};t.updateProfile(ve)}function oe(){c.value=!0}const he=X(b=>{const ve={23:b.first,24:b.middle,25:b.last,26:b.suffix,27:b.phone,28:b.email,46:b.contact,32:b.street1,33:b.street2,34:b.city,35:b.state,36:b.postal,37:b.addressCountry.name},i={next:2,values:ve};c.value=!1,t.updateProfile(i)});function Y(){c.value=!1;const b={next:0};t.updateProfile(b)}return{submitUpdate:he,isSubmitting:Z,save:fe,back:Y,updateCountry:b=>{p.value=b},first:T,middle:w,last:G,suffix:ee,email:de,phone:O,contact:ue,street1:P,street2:I,city:A,state:u,postal:y,addressCountry:v,hasPersonalInfo:k,showEdit:c,firstMeta:M,middleMeta:x,lastMeta:ie,formMeta:H,formErrors:W,options:s,countries:g,fullName:K,fullAddress:te,formatPhone:L,employee:e,showEditFunction:oe,onJobBoard:f,personalInfoNeeded:r}}}),bt={key:1},$t={class:"col-12 col-md-3 q-py-sm"},ht={class:"text-primary"},yt={class:"text-dark q-pl-sm"},gt={class:"col-12 col-md-6 q-py-sm"},qt={class:"text-primary"},kt={class:"text-dark q-pl-sm"},Vt={class:"col-12 col-md-3 q-py-sm"},Ct={class:"text-primary"},wt={class:"text-dark q-pl-sm"};function Et(e,s,g,c,k,p){const t=pe("edit-personal-info");return d(),V(Ve,{name:e.name,title:e.title,done:e.step>1},{default:n(()=>[e.showEdit||e.personalInfoNeeded?(d(),V(t,{key:0,onBack:e.back},null,8,["onBack"])):m("",!0),!e.showEdit&&!e.personalInfoNeeded?(d(),U("div",bt,[l(be,null,{default:n(()=>[l(le,null,{default:n(()=>[o("div",{class:E(["text-dark",e.$q.screen.gt.sm?"text-h6":"text-body2"])},[se(a(e.$q.screen.gt.sm?`${e.$t("personalInfo")}`:`${e.$t("personal")}`)+" ",1),l(C,{class:"q-ml-sm",round:"",size:e.$q.screen.gt.sm?"sm":"xs",color:"accent",icon:"edit",onClick:e.showEditFunction},null,8,["size","onClick"])],2),o("div",{class:E(["row q-mt-sm",e.$q.screen.gt.sm?"text-body1":"text-caption"])},[o("div",$t,[o("div",ht,a(e.$t("name")),1),o("div",yt,a(e.employee[24]),1)]),o("div",gt,[o("div",qt,a(e.$t("address")),1),o("div",kt,a(e.employee[40]),1)]),o("div",Vt,[o("div",Ct,a(e.$t("preferredContactMethod")),1),o("div",wt,a(e.employee[58]),1)])],2)]),_:1})]),_:1}),l(qe,{class:"text-right"},{default:n(()=>[e.onJobBoard?m("",!0):(d(),V(C,{key:0,onClick:e.back,color:"secondary",label:e.$t("back"),class:"q-mr-sm"},null,8,["onClick","label"])),l(C,{onClick:e.save,color:"info",label:e.$t("continue")},null,8,["onClick","label"])]),_:1})])):m("",!0)]),_:1},8,["name","title","done"])}var St=ne(vt,[["render",Et]]);const Ut=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,Nt=re({props:{title:String,step:Number,name:Number},setup(){const e=Pe(),s=$e(),g=Ce(),c=we(),{t:k}=Se(),{relationshipOptions:p}=R(g),{savedEmergencyContacts:t}=R(c),{removeContact:f,addContact:r,updateContact:z,employeeData:H}=c,W=N({name:"first",value:null}),X=N({name:"last",value:null}),Z=N({name:"phone",value:null}),T=N({name:"relationship",value:null}),M=N([]),w=_(()=>{const u=t.value.concat(M.value);return u.sort(function(y,v){return y.editing&&!v.editing?-1:!y.editing&&v.editing?1:0}),u}),x=_(()=>w.value.filter(y=>y.editing).length>0);function G(){const u={next:3};s.updateProfile(u)}function ie(){const u={next:1};s.updateProfile(u)}function ee(){const u={3:w.value.length+1,6:"",7:"",8:"",11:"",12:"",16:"",editing:!0,new:!0,contact:null};M.value.push(u),console.log(w.value)}function de(u){t.value[u].editing=!0}function O(u){const y=w.value[u];console.log(y),e.dialog({title:"Alert",message:`Are you sure you want to remove ${y[6]} ${y[7]}?`,cancel:!0,persistent:!0}).onOk(()=>{f(y[3])})}const ue=D({relationship:D().required("Relationship is required.").nullable(),phone:q().matches(Ut,{message:`${k("validPhoneIsRequired")}`}).length(10,{message:`${k("validPhoneIsRequired")}`}).required("Phone is required.").label(`${k("phoneNumber")}`),last:q().required().label(`${k("lastName")}`),first:q().required().label(`${k("firstName")}`)}).required();function P(u){const y=[W.value,X.value,Z.value,T.value];u?y.forEach(v=>{v.name===u.name?v.value=u.message:v.value=null}):y.forEach(v=>{v.value=null})}async function I(u,y){console.log(u);const v=w.value[y];try{await ue.validate({relationship:u.contact,phone:u[16],last:u[7],first:u[6]}),v[11]=u.contact.value,v[12]=u.contact.label,v.editing=!1,P(),v.new?(v.new=!1,r(v),M.value.forEach((K,te)=>{K[3]===v[3]&&M.value.splice(te,1)})):z(v)}catch({name:K,path:te,errors:L,inner:fe}){let oe="";L[0]instanceof Object?oe=L[0].message:oe=L[0],P({name:te,message:oe})}}function A(u){const y=w.value[u];console.log(y),y.new?M.value.forEach((v,K)=>{v[3]===y[3]&&M.value.splice(K,1)}):w.value[u].editing=!1}return{save:G,back:ie,savedEmergencyContacts:t,allContacts:w,editing:x,relationshipOptions:p,editItem:de,removeItem:O,saveItem:I,cancelEdit:A,addNewContactRow:ee,addContact:r,updateContact:z,firstError:W,lastError:X,phoneError:Z,relationshipError:T,helpers:ke,employeeData:H}}}),It={class:"col-12 col-md-4"},Ot={class:"text-primary"},Pt={class:"text-dark q-pl-sm"},At={class:"col-12 col-md-4"},Rt={class:"text-primary"},zt={class:"text-dark q-pl-sm"},Qt={key:0,class:"text-body2 text-dark"},Ft={class:"row q-py-sm"},Mt={class:"col-12 col-md-6 text-left"},Dt={key:0,class:"text-body2 text-primary text-italic q-pb-sm q-pl-md"},Yt=["id"],jt={class:"col-12 col-md-4"},Bt={class:"text-primary"},Ht={class:"text-dark q-pl-sm"},Tt={class:"text-primary"},Lt={class:"text-dark q-pl-sm"},Jt={class:"text-primary"},Wt={class:"text-dark q-pl-sm"},Xt={key:1,class:"items-center"},Zt=["onSubmit"],Gt={class:"row"},Kt={class:"col-12 col-md-3 q-pr-md"},_t={class:"col-12 col-md-3 q-pr-md"},xt={class:"col-12 col-md-3 q-pr-md"},eo={class:"col-12 col-md-3"},to={class:"row q-mt-md"},oo={class:"col text-right"};function lo(e,s,g,c,k,p){return d(),V(Ve,{name:e.name,title:e.title},{default:n(()=>[o("div",null,[l(be,{class:"q-px-xs"},{default:n(()=>[l(le,null,{default:n(()=>[o("div",{class:E(["text-dark",e.$q.screen.gt.sm?"text-h6":"text-body2"])},[se(a(e.$q.screen.gt.sm?`${e.$t("personalContactInfo")}`:`${e.$t("personal")}`)+" ",1),l(C,{class:"q-ml-sm",round:"",size:e.$q.screen.gt.sm?"sm":"xs",color:"accent",icon:"edit"},null,8,["size"])],2),o("div",{class:E(["row q-mt-sm",e.$q.screen.gt.sm?"text-body1":"text-caption"])},[o("div",It,[o("div",Ot,a(e.$t("phoneNumber")),1),o("div",Pt,a(e.employeeData[25]),1)]),o("div",At,[o("div",Rt,a(e.$t("email")),1),o("div",zt,a(e.employeeData[26]),1)])],2)]),_:1}),e.$q.screen.gt.sm?m("",!0):(d(),V(ae,{key:0})),e.editing?m("",!0):(d(),V(le,{key:1,class:E(e.$q.screen.lt.md?"q-px-xs":"")},{default:n(()=>[e.$q.screen.gt.sm?m("",!0):(d(),U("div",Qt,a(e.$t("emergencyContacts")),1)),o("div",Ft,[o("div",Mt,[l(C,{size:e.$q.screen.gt.sm?"md":"sm",color:"accent",label:(e.allContacts.length>0,e.$t("addEmergencyContact")),onClick:e.addNewContactRow,icon:"add"},null,8,["size","label","onClick"])])])]),_:1},8,["class"])),e.editing?(d(),V(ae,{key:2})):m("",!0),l(le,{class:E([e.editing?"q-pt-sm":"q-pt-none",e.$q.screen.gt.sm?"":"q-px-xs"])},{default:n(()=>[e.allContacts.length===0?(d(),U("div",Dt,a(e.$t("addEmergencyContactRequired")),1)):m("",!0),(d(!0),U(Ie,null,Oe(e.allContacts,(t,f)=>(d(),U("div",{id:t[3],key:t[3]},[l(be,{class:"q-pa-sm",flat:""},{default:n(()=>[t.editing?m("",!0):(d(),U("div",{key:0,class:E(["row items-center",e.$q.screen.gt.sm?"text-body2":"text-caption"])},[o("div",jt,[o("div",null,[o("div",Bt,a(e.$t("name")),1),o("div",Ht,a(e.helpers.formatName(t[6]))+" "+a(e.helpers.formatName(t[7])),1)])]),o("div",{class:E(e.$q.screen.gt.sm?"col-3":"col-12 q-pt-sm")},[o("div",null,[o("div",Tt,a(e.$t("phoneNumber")),1),o("div",Lt,a(e.helpers.formatPhone(t[8])),1)])],2),o("div",{class:E(e.$q.screen.gt.sm?"col-3":"col-12 q-pt-sm")},[o("div",null,[o("div",Jt,a(e.$t("relationship")),1),o("div",Wt,a(t[12]),1)])],2),o("div",{class:E(e.$q.screen.gt.sm?"col-2 text-right":"col-12 q-pt-md text-right")},[o("div",null,[l(C,{size:"sm",round:"",onClick:r=>e.editItem(f),color:"secondary",icon:"edit",class:"q-mr-sm"},null,8,["onClick"]),l(C,{size:"sm",round:"",onClick:r=>e.removeItem(f),color:"primary",icon:"delete"},null,8,["onClick"])])],2)],2)),t.editing?(d(),U("div",Xt,[o("form",{onSubmit:ge(r=>e.saveItem(t,f),["prevent"])},[o("div",Gt,[o("div",Kt,[l(F,{modelValue:t[6],"onUpdate:modelValue":r=>t[6]=r,dense:"",label:e.$t("firstName"),error:!!e.firstError.value,"bottom-slots":""},{error:n(()=>[se(a(e.firstError.value),1)]),_:2},1032,["modelValue","onUpdate:modelValue","label","error"])]),o("div",_t,[l(F,{modelValue:t[7],"onUpdate:modelValue":r=>t[7]=r,dense:"",label:e.$t("lastName"),error:!!e.lastError.value,"bottom-slots":""},{error:n(()=>[se(a(e.lastError.value),1)]),_:2},1032,["modelValue","onUpdate:modelValue","label","error"])]),o("div",xt,[l(F,{modelValue:t[16],"onUpdate:modelValue":r=>t[16]=r,dense:"",label:e.$t("phoneNumber"),error:!!e.phoneError.value,"bottom-slots":""},{error:n(()=>[se(a(e.phoneError.value),1)]),_:2},1032,["modelValue","onUpdate:modelValue","label","error"])]),o("div",eo,[l(J,{behavior:"menu",position:"top middle",modelValue:t.contact,"onUpdate:modelValue":r=>t.contact=r,dense:"",label:e.$t("relationship"),options:e.relationshipOptions,error:!!e.relationshipError.value,"bottom-slots":""},{error:n(()=>[se(a(e.relationshipError.value),1)]),_:2},1032,["modelValue","onUpdate:modelValue","label","options","error"])])]),o("div",to,[o("div",oo,[l(C,{onClick:r=>e.cancelEdit(f),color:"secondary",label:e.$t("cancel"),class:"q-mr-sm"},null,8,["onClick","label"]),l(C,{type:"submit",color:"info",label:e.$t("save")},null,8,["label"])])])],40,Zt)])):m("",!0)]),_:2},1024),f<e.allContacts.length-1?(d(),V(ae,{key:0})):m("",!0)],8,Yt))),128))]),_:1},8,["class"])]),_:1}),e.editing?m("",!0):(d(),V(qe,{key:0,class:"text-right"},{default:n(()=>[l(C,{onClick:e.back,color:"secondary",label:e.$t("back"),class:"q-mr-sm"},null,8,["onClick","label"]),l(C,{onClick:e.save,color:"info",label:e.$t("continue"),disabled:e.savedEmergencyContacts.length===0},null,8,["onClick","label","disabled"])]),_:1}))])]),_:1},8,["name","title"])}var so=ne(Nt,[["render",lo]]);const ao=re({props:{title:String,step:Number,name:Number},setup(){const{t:e}=Se(),s=Me(),g=N(3),c=N(!1),k=Pe(),p=$e(),t=Ce(),f=Te(),r=we(),{fetchVoluntaryForms:z}=t,{experienceOptions:H,companyOptions:W,craftOptions:X,employmentOptions:Z}=R(t),{hasAffirmative:T,hasVets:M,hasDisability:w,goToVoluntary:x}=R(f),{savedHistory:G}=R(r),{addHistory:ie,updateHistory:ee,removeHistory:de,employeeData:O,updateEmployeeData:ue}=r,P=N([]),{toggleLoader:I,profile:A}=p,{proceedToTest:u}=R(p),y=D({craft:D().required(`${e("selectACraft")}`).nullable(),experience:D().required(`${e("selectExperience")}`).nullable(),employment:D().required(`${e("selectEmploymentStatus")}`).nullable()}),{meta:v,errors:K,handleSubmit:te}=Ee({validationSchema:y,initialValues:{craft:A[40]?{value:A[40].value,label:A[40].label}:null,experience:O[53]?{value:O[53],label:O[54]}:null,employment:O[55]?{value:O[55],label:O[56]}:null}}),{value:L}=h("craft"),{value:fe}=h("experience"),{value:oe}=h("employment");Ne(A,()=>{A[40].value!==L.value.value&&(L.value={value:A[40].value,label:A[40].label})});const he=te(async $=>{const Q={40:{value:$.craft.value,label:$.craft.label},42:{value:$.experience.value,label:$.experience.label},44:{value:$.employment.value,label:$.employment.label},39:{value:new Date}};if(x.value){const S={next:w.value?6:T.value?7:M.value?8:0,values:Q,completed:!0};I(!0),await z(),await p.updateProfile(S);try{await p.submitProfileToQB(),I(!1),s.push({name:"voluntary"})}catch{const me={next:0,completed:!1};await p.updateProfile(me),console.log("error submitting profile"),I(!1),window.location.reload(!0)}}else{const S={next:0,values:Q,completed:!0};I(!0),await p.updateProfile(S);try{await p.submitProfileToQB(),u.value?(ue({fields:{122:{value:8}}}),s.replace({name:"assessment"})):(s.replace({name:"thanks"}),I(!1))}catch{const me={next:0,completed:!1};await p.updateProfile(me),console.log("error submitting profile"),I(!1),window.location.reload(!0)}}}),Y=_(()=>{const $=G.value.concat(P.value);return $.sort(function(Q,S){return Q.editing&&!S.editing?-1:!Q.editing&&S.editing?1:0}),$}),ye=_(()=>Y.value.filter(Q=>Q.editing).length>0);function b(){const $={3:Y.value.length+1,6:"",7:"",10:"",11:"",12:"",13:"",15:"",16:"",editing:!0,new:!0,company:null,craft:null};P.value.push($)}function ve(){const $={next:4};p.updateProfile($)}function i(){const $={next:2};p.updateProfile($)}function j($){G.value[$].editing=!0}function B($){const Q=Y.value[$];console.log(Q),k.dialog({title:`${e("alert")}`,message:`${e("areYouSureYouWantToRemove")}`,cancel:!0,persistent:!0}).onOk(()=>{de(Q[3])})}function ce($,Q){const S=Y.value[Q];S[6]=$.company.value,S[7]=$.company.label,S[15]=$.craft.value,S[16]=$.craft.label,S.editing=!1,S.new?(S.new=!1,P.value.forEach((me,ze)=>{me[3]===S[3]&&P.value.splice(ze,1)}),ie(S)):ee(S)}function Ae($){const Q=Y.value[$];Q.new?P.value.forEach((S,me)=>{S[3]===Q[3]&&P.value.splice(me,1)}):Y.value[$].editing=!1}function Re(){c.value?(g.value=3,c.value=!1):(c.value=!0,g.value=Y.value.length)}return{save:ve,back:i,allHistory:Y,addNewRow:b,editItem:j,removeItem:B,saveItem:ce,cancelEdit:Ae,editing:ye,date:Le,show:g,expanded:c,adjustRows:Re,formMeta:v,formErrors:K,submitUpdate:he,craft:L,experience:fe,employment:oe,experienceOptions:H,companyOptions:W,craftOptions:X,employmentOptions:Z}}}),ro={class:"text-body2 text-dark"},no={class:"row"},io={class:"col-12 col-md-4 q-px-xs"},uo={class:"text-caption"},co={class:"col-12 col-md-4 q-px-xs"},mo={class:"text-caption"},po={class:"col-12 col-md-4 q-px-xs"},fo={class:"text-caption"},vo={class:"text-body2 text-dark"},bo={class:"row q-py-sm"},$o={class:"col-12 col-md-6"},ho={key:0,class:"text-body2 text-primary text-italic q-pb-sm q-pl-md"},yo=["id"],go={class:"col-12 col-md-3"},qo={class:"text-primary"},ko={class:"text-dark q-pl-sm"},Vo={class:"text-primary"},Co={class:"text-dark q-pl-sm"},wo={class:"text-primary"},Eo={class:"text-dark q-pl-sm"},So={class:"text-primary"},Uo={class:"text-dark q-pl-sm"},No={class:"text-primary"},Io={class:"text-dark q-pl-sm"},Oo={key:1,class:"items-center"},Po={class:"row"},Ao={class:"col-12 col-md-2 q-pr-md"},Ro={class:"col-12 col-md-2 q-pr-md"},zo={class:"col-12 col-md-2 q-pr-md"},Qo={class:"col-12 col-md-2 q-pr-md"},Fo={class:"col-12 col-md-2 q-pr-md"},Mo={class:"col-12 col-md-2 q-pr-md"},Do={class:"row q-mt-md"},Yo={class:"col text-right"},jo={class:"row q-pt-md"},Bo={key:0,class:"col-12 text-right"};function Ho(e,s,g,c,k,p){return d(),V(Ve,{name:e.name,title:e.title,done:e.step>3},{default:n(()=>[o("div",null,[o("form",{onSubmit:s[3]||(s[3]=ge((...t)=>e.submitUpdate&&e.submitUpdate(...t),["prevent"]))},[l(be,{class:"q-px-xs"},{default:n(()=>[l(le,{class:"q-pb-none q-mb-sm"},{default:n(()=>[o("div",ro,a(e.$t("applyingFor"))+":",1),o("div",no,[o("div",io,[l(J,{behavior:"menu",position:"top middle",disable:!0,dense:"",modelValue:e.craft,"onUpdate:modelValue":s[0]||(s[0]=t=>e.craft=t),label:e.$t("primaryCraft"),options:e.craftOptions,error:!!e.formErrors.craft,"bottom-slots":""},{error:n(()=>[o("div",uo,a(e.formErrors.craft),1)]),_:1},8,["modelValue","label","options","error"])]),o("div",co,[l(J,{behavior:"menu",position:"top middle",dense:"",modelValue:e.experience,"onUpdate:modelValue":s[1]||(s[1]=t=>e.experience=t),label:e.$t("yearsOfExperience"),options:e.experienceOptions,error:!!e.formErrors.experience,"bottom-slots":""},{error:n(()=>[o("div",mo,a(e.formErrors.experience),1)]),_:1},8,["modelValue","label","options","error"])]),o("div",po,[l(J,{behavior:"menu",position:"top middle",dense:"",modelValue:e.employment,"onUpdate:modelValue":s[2]||(s[2]=t=>e.employment=t),label:e.$t("currentEmploymentStatus"),options:e.employmentOptions,error:!!e.formErrors.employment,"bottom-slots":""},{error:n(()=>[o("div",fo,a(e.formErrors.employment),1)]),_:1},8,["modelValue","label","options","error"])])])]),_:1}),l(ae),e.editing?m("",!0):(d(),V(le,{key:0,class:E(e.$q.screen.lt.md?"q-px-xs":"")},{default:n(()=>[o("div",vo,a(e.$t("workHistory"))+":",1),o("div",bo,[o("div",$o,[l(C,{size:e.$q.screen.gt.sm?"md":"sm",color:"accent",label:e.allHistory.length>0?`${e.$t("addMoreHistory")}`:`${e.$t("addEmploymentHistory")}`,onClick:e.addNewRow,icon:"add"},null,8,["size","label","onClick"])])])]),_:1},8,["class"])),e.editing?(d(),V(ae,{key:1})):m("",!0),l(le,{class:E([e.editing?"q-pt-sm":"q-pt-none",e.$q.screen.gt.sm?"":"q-px-xs"])},{default:n(()=>[e.allHistory.length===0?(d(),U("div",ho,a(e.$t("addYourEmploymentHistoryLater")),1)):m("",!0),(d(!0),U(Ie,null,Oe(e.allHistory,(t,f)=>(d(),U("div",{id:t[3],key:f},[e.expanded||f+1<=e.show?(d(),V(be,{key:0,class:"q-px-sm q-pt-xs q-pb-sm",flat:""},{default:n(()=>[t.editing?m("",!0):(d(),U("div",{key:0,class:E(["row items-center",e.$q.screen.gt.sm?"text-body2":"text-caption"])},[o("div",go,[o("div",null,[o("div",qo,a(e.$t("company")),1),o("div",ko,a(t[7]),1)])]),o("div",{class:E(e.$q.screen.gt.sm?"col-2":"hidden")},[o("div",null,[o("div",Vo,a(e.$t("location")),1),o("div",Co,a(t[10]!==""?t[10]:"N/A"),1)])],2),o("div",{class:E(e.$q.screen.gt.sm?"col-2":"col-12 q-pt-md")},[o("div",null,[o("div",wo,a(e.$t("jobTitle")),1),o("div",Eo,a(t[16])+" "+a(t[11]),1)])],2),o("div",{class:E(e.$q.screen.gt.sm?"col-2":"col-6 q-pt-md")},[o("div",null,[o("div",So,a(e.$t("startDate")),1),o("div",Uo,a(e.date.formatDate(t[12],"MM-DD-YYYY")),1)])],2),o("div",{class:E(e.$q.screen.gt.sm?"col-2":"col-6 q-pt-md")},[o("div",null,[o("div",No,a(e.$t("endDate")),1),o("div",Io,a(e.date.formatDate(t[13],"MM-DD-YYYY")),1)])],2),o("div",{class:E(e.$q.screen.gt.sm?"col-1 text-right":"col-12 q-pt-md text-right")},[o("div",null,[l(C,{size:"sm",round:"",onClick:r=>e.editItem(f),color:"secondary",icon:"edit",class:"q-mr-sm"},null,8,["onClick"]),l(C,{size:"sm",round:"",onClick:r=>e.removeItem(f),color:"primary",icon:"delete"},null,8,["onClick"])])],2)],2)),t.editing?(d(),U("div",Oo,[l(We,{onSubmit:ge(r=>e.saveItem(t,f),["prevent"])},{default:n(()=>[o("div",Po,[o("div",Ao,[l(J,{modelValue:t.company,"onUpdate:modelValue":r=>t.company=r,dense:"",label:e.$t("company"),options:e.companyOptions,rules:[r=>!!r||"Field is required"]},null,8,["modelValue","onUpdate:modelValue","label","options","rules"])]),o("div",Ro,[l(J,{modelValue:t.craft,"onUpdate:modelValue":r=>t.craft=r,dense:"",label:e.$t("craft"),options:e.craftOptions,rules:[r=>!!r||"Field is required"]},null,8,["modelValue","onUpdate:modelValue","label","options","rules"])]),o("div",zo,[l(F,{modelValue:t[11],"onUpdate:modelValue":r=>t[11]=r,dense:"",label:e.$t("jobTitle")},null,8,["modelValue","onUpdate:modelValue","label"])]),o("div",Qo,[l(F,{modelValue:t[10],"onUpdate:modelValue":r=>t[10]=r,dense:"",label:e.$t("location")},null,8,["modelValue","onUpdate:modelValue","label"])]),o("div",Fo,[l(F,{type:"date",modelValue:t[12],"onUpdate:modelValue":r=>t[12]=r,dense:"",filled:"",hint:e.$t("startDate"),rules:[r=>!!r||"Field is required"]},null,8,["modelValue","onUpdate:modelValue","hint","rules"])]),o("div",Mo,[l(F,{type:"date",modelValue:t[13],"onUpdate:modelValue":r=>t[13]=r,dense:"",filled:"",hint:e.$t("endDate"),rules:[r=>!!r||"Field is required"]},null,8,["modelValue","onUpdate:modelValue","hint","rules"])])]),o("div",Do,[o("div",Yo,[l(C,{onClick:r=>e.cancelEdit(f),color:"secondary",label:e.$t("cancel"),class:"q-mr-sm"},null,8,["onClick","label"]),l(C,{type:"submit",color:"info",label:e.$t("save")},null,8,["label"])])])]),_:2},1032,["onSubmit"])])):m("",!0)]),_:2},1024)):m("",!0),f<e.allHistory.length-1?(d(),V(ae,{key:1})):m("",!0)],8,yo))),128)),e.allHistory.length>e.show||e.expanded?(d(),V(ae,{key:1})):m("",!0),o("div",jo,[e.allHistory.length>e.show||e.expanded?(d(),U("div",Bo,[l(C,{round:"",color:"secondary",onClick:e.adjustRows,icon:e.expanded?"expand_less":"expand_more"},{default:n(()=>[e.expanded?(d(),V(Ue,{key:0,anchor:"top middle"},{default:n(()=>[se(a(e.$t("showLess")),1)]),_:1})):m("",!0),e.expanded?m("",!0):(d(),V(Ue,{key:1,anchor:"top middle"},{default:n(()=>[se(a(e.$t("showMore")),1)]),_:1}))]),_:1},8,["onClick","icon"])])):m("",!0)])]),_:1},8,["class"])]),_:1}),e.editing?m("",!0):(d(),V(qe,{key:0,class:"text-right"},{default:n(()=>[l(C,{onClick:e.back,color:"secondary",label:e.$t("back"),class:"q-mr-sm"},null,8,["onClick","label"]),l(C,{type:"submit",color:"info",label:e.$t("continue")},null,8,["label"])]),_:1}))],32)])]),_:1},8,["name","title","done"])}var To=ne(ao,[["render",Ho]]);const Lo=re({components:{selectJob:_e,personalInfo:St,emergencyContact:so,workHistory:To},setup(){const e=$e(),{resetProfile:s}=e,{step:g}=R(e);s();const c=N(null);return{step:g,jobSelection:c,jobOptions:[{label:"Default Job",value:0}]}}});function Jo(e,s,g,c,k,p){const t=pe("select-job"),f=pe("personal-info"),r=pe("emergency-contact"),z=pe("work-history");return d(),U("div",null,[l(je,{modelValue:e.step,"onUpdate:modelValue":s[0]||(s[0]=H=>e.step=H),vertical:"",animated:"","done-color":"info","active-color":"dark","inactive-color":"secondary",class:E(e.$q.screen.lt.md?"q-px-none q-mx-none":"")},{default:n(()=>[l(t,{title:e.$t("selectAJob"),step:e.step,name:0,done:e.step>0},null,8,["title","step","done"]),l(f,{title:e.$t("personalInformation"),step:e.step,name:1,done:e.step>1},null,8,["title","step","done"]),l(r,{title:e.$t("contactInformation"),step:e.step,name:2,done:e.step>2},null,8,["title","step","done"]),l(z,{title:e.$t("employmentInformation"),step:e.step,name:3,done:e.step>3},null,8,["title","step","done"])]),_:1},8,["modelValue","class"])])}var Wo=ne(Lo,[["render",Jo]]);const Xo=re({components:{profileStepper:Wo},setup(){}});function Zo(e,s,g,c,k,p){const t=pe("profile-stepper");return d(),U("div",null,[l(t)])}var Go=ne(Xo,[["render",Zo]]);const Ko=re({components:{Profile:Go},setup(){const e=N(0),s=Ce(),{fetchFormOptions:g}=s,{formOptionsLoadingState:c}=R(s);return g(),{step:e,formOptionsLoadingState:c}}}),_o={key:0,class:"absolute-center"},xo={key:1,class:"row"},el={class:"col-12 q-pt-sm"},tl={class:"q-pl-sm"},ol={class:"text-h6 text-dark"},ll={class:"text-body1 text-secondary text-italic"};function sl(e,s,g,c,k,p){const t=pe("profile");return d(),V(Ye,{style:{"max-width":"100vw"}},{default:n(()=>[e.formOptionsLoadingState?(d(),U("div",_o,[l(De,{color:"primary",size:"5em"})])):m("",!0),e.formOptionsLoadingState?m("",!0):(d(),U("div",xo,[o("div",el,[l(be,{flat:""},{default:n(()=>[l(le,{class:E(e.$q.screen.lt.md?"q-px-xs":"")},{default:n(()=>[o("div",tl,[o("div",ol,a(e.$t("completeApplication")),1),o("div",ll,a(e.$t("pleaseCompleteYourApplication")),1)])]),_:1},8,["class"]),l(le,null,{default:n(()=>[l(t)]),_:1})]),_:1})])]))]),_:1})}var Il=ne(Ko,[["render",sl]]);export{Il as default};
