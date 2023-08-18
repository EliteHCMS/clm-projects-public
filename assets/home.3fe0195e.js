import{u as x,b as L,h as z,d as A,e as ue,f as ee,c as ie,g as fe}from"./app.05652b82.js";import{bX as le,c1 as he,c4 as ye,c as $,h as S,bY as W,g as ge,bV as F,A as a,B as p,D as t,G as l,ac as i,a8 as C,d as s,br as o,ar as m,l as T,_ as I,cT as k,bS as q,aq as y,ax as f,cS as b,d3 as ke,d4 as $e,bT as ce,r as O,bW as P,bQ as Y,cV as G,E as ve,bt as X,cy as be,b5 as _,F as j,b4 as V,bO as qe,bR as oe,bP as E,dc as ne}from"./index.dd77155d.js";import{Q as de}from"./QPage.11d82b17.js";import{u as K}from"./use-quasar.6320e378.js";import{Q as Z}from"./QTooltip.f6619c32.js";import{C as _e}from"./ClosePopup.0af03f27.js";import{u as me}from"./i18n.660e2ed7.js";import{a as De,Q}from"./QSelect.e46c7380.js";import{Q as we}from"./QForm.2c5aed2b.js";import{a as Ce,c as Se}from"./array.59f93f43.js";import{a as Ae,u as Te}from"./vee-validate.esm.6dfeee42.js";import{Q as re}from"./QList.bd0eedab.js";import{dayjs as U}from"./dayjs.6e814a2c.js";import{u as Ie}from"./dataStore.a79dbc7d.js";import{E as Pe}from"./roster.e11c91e7.js";import"./_commonjsHelpers.a26ce4be.js";import"./localForage.a5ce8de1.js";import"./api.9cc8c4bd.js";import"./index.04bc0a32.js";import"./position-engine.f42cc476.js";import"./selection.1b0fcc11.js";import"./QChip.8eec8f03.js";import"./QMenu.237258b2.js";import"./rtl.b51694b1.js";import"./useQuerySaver.d29ff9ee.js";import"./dataStore.333d40dc.js";import"./rosterTable.d0180dbc.js";import"./QTable.cd770be3.js";import"./QMarkupTable.888535da.js";import"./use-fullscreen.d86e788f.js";import"./QTr.78f4fcf5.js";import"./QTd.86bfdff9.js";import"./QInnerLoading.62e7ebf6.js";import"./export-file.dc78ba05.js";import"./index.54cf4b35.js";import"./arrivalDate.45dd2e45.js";import"./projectSelector.68d2f057.js";var je=le({name:"QBanner",props:{...he,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:n}){const{proxy:{$q:r}}=ge(),c=ye(e,r),h=$(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(c.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),g=$(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const u=[S("div",{class:"q-banner__avatar col-auto row items-center self-start"},W(n.avatar)),S("div",{class:"q-banner__content col text-body2"},W(n.default))],d=W(n.action);return d!==void 0&&u.push(S("div",{class:g.value},d)),S("div",{class:h.value+(e.inlineActions===!1&&d!==void 0?" q-banner--top-padding":""),role:"alert"},u)}}});const Ne={class:"row items-center"},Be={key:0},Qe={key:1},Ye={__name:"checkInBanner",setup(e){const{userData:n}=x(),{checkedIn:r,checkInData:c}=F(L());return(h,g)=>(a(),p("div",{class:l(h.$q.screen.gt.sm?"q-px-md q-pb-lg":"q-px-sm q-py-md")},[t("div",Ne,[t("div",{class:l(h.$q.screen.gt.sm?"col-8":"col-12 order-last text-center")},[t("div",{class:l(["text-primary",h.$q.screen.gt.sm?"text-h4":"text-h6 q-mt-sm"])},i(h.$t("welcome"))+", "+i(C(z).formatName(C(n)[35]))+"! ",3)],2),C(r)?(a(),p("div",{key:0,class:l(h.$q.screen.gt.sm?"col-4":"col-12 order-first")},[s(je,{dense:h.$q.screen.lt.md,rounded:"",class:"text-white bg-info text-center"},{default:o(()=>[h.$q.screen.gt.sm?(a(),p("span",Be,i(h.$t("currentlyCheckedIntoHiringCenter").replace("{office}",C(c)[22])),1)):m("",!0),h.$q.screen.lt.md?(a(),p("span",Qe,i(h.$t("checkIntoHiringCenter").replace("{office}",C(c)[22])),1)):m("",!0)]),_:1},8,["dense"])],2)):m("",!0)])],2))}},Ve=T({components:{},setup(){const{employeeData:e,offerData:n}=A(),r=$(()=>e[79]===4||e[79]===5?"In Process":e[79]===6?"Deployed":"");return{employeeData:e,helpers:z,offerData:n,status:r}}}),Le={class:"text-body2"},ze={class:"text-dark q-pb-sm"},Ee={class:"text-primary q-ml-md"},Fe={class:"text-dark q-pb-sm"},He={class:"text-primary q-ml-md"},Re={class:"text-dark q-pb-sm"},Me={class:"text-primary q-ml-md"},Je={class:"text-dark q-pb-sm"},Ue={class:"text-primary q-ml-md"},Oe={class:"text-caption"},Ke={class:"text-dark q-pb-sm"},We={class:"text-primary q-ml-md"},Ge={class:"text-dark q-pb-sm"},Xe={class:"text-primary q-ml-md"},Ze={class:"text-dark q-pb-sm"},xe={class:"text-primary q-ml-md"},et={class:"text-dark q-pb-sm"},tt={class:"text-primary q-ml-md"};function st(e,n,r,c,h,g){return a(),p("div",null,[s(b,null,{default:o(()=>[s(k,null,{default:o(()=>[t("div",{class:l(["text-dark",e.$q.screen.gt.md?"text-h6":"text-body1"])},"Current Job Details",2)]),_:1}),s(q),e.$q.screen.gt.md?(a(),y(k,{key:0},{default:o(()=>[t("div",Le,[t("div",ze,[f("Status:"),t("span",Ee,i(e.status),1)]),t("div",Fe,[f("Project:"),t("span",He,i(e.offerData[56]),1)]),t("div",Re,[f("Job:"),t("span",Me,i(e.offerData[57]),1)]),t("div",Je,[f("Hire Date:"),t("span",Ue,i(e.employeeData[397]!==""?e.employeeData[397]:"N/A"),1)])])]),_:1})):m("",!0),e.$q.screen.gt.md?m("",!0):(a(),y(k,{key:1},{default:o(()=>[t("div",Oe,[t("div",Ke,[f("Status:"),t("span",We,i(e.status),1)]),t("div",Ge,[f("Job Site:"),t("span",Xe,i(e.offerData[160]),1)]),t("div",Ze,[f("Job:"),t("span",xe,i(e.offerData[57]),1)]),t("div",et,[f("Hire Date:"),t("span",tt,i(e.employeeData[397]!==""?e.employeeData[397]:"N/A"),1)])])]),_:1}))]),_:1})])}var at=I(Ve,[["render",st]]);const ot=[S("circle",{cx:"50",cy:"50",r:"48",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor"}),S("line",{"stroke-linecap":"round","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor",x1:"50",y1:"50",x2:"85",y2:"50.5"},[S("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"2s",repeatCount:"indefinite"})]),S("line",{"stroke-linecap":"round","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor",x1:"50",y1:"50",x2:"49.5",y2:"74"},[S("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"15s",repeatCount:"indefinite"})])];var nt=le({name:"QSpinnerClock",props:ke,setup(e){const{cSize:n,classes:r}=$e(e);return()=>S("svg",{class:r.value,width:n.value,height:n.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},ot)}});const rt=T({props:{item:Object},setup(e){const n=K(),r=ce(),c=L(),h=ue(),{openWindow:g}=c,{checkedIn:u,onKiosk:d}=F(c),{hiringCenterAvailable:v}=F(h),{employeeData:D,acceptDeployment:N,offerData:H,processingData:R}=A(),B=O(!1);function te(M){M==="deployment"&&(B.value=!0)}async function se(M){if(M==="deployment")try{await N(e.item.idForAcceptance),B.value=!1,n.notify({type:"positive",message:"Acceptance submitted!",position:"top-right"})}catch(pe){console.log(pe),n.notify({type:"negative",message:"Something went wrong",position:"top-right"})}}function ae(){r.replace({name:"assessment"})}function w(){u.value||d.value||!d.value&&v.value?r.replace({name:"apply"}):r.replace({name:"jobs"})}return{tasks:[],showDescription:O(!1),openLink(){g(e.item.to,{url:e.item.url,name:e.item.to})},employeeData:D,openAgreement:te,showDeployAgreement:B,submitAcceptance:se,offerData:H,processingData:R,startTest:ae,startApply:w}}}),it={class:"row items-center"},lt={class:"col-11"},ct={class:"col-1"},dt=t("span",{class:"text-primary"},"Username: ",-1),mt=t("span",{class:"text-primary"},"Password: ",-1),pt=t("div",{class:"text-h6"},"Terms of Job",-1),ut={class:"text-dark q-pb-sm"},ft={class:"q-ml-sm text-primary"},ht={class:"text-dark q-pb-sm"},yt={class:"q-ml-sm text-primary"},gt={class:"text-dark q-pb-sm"},kt={class:"q-ml-sm text-primary"},$t={class:"text-dark q-pb-sm"},vt={class:"q-ml-sm text-primary"},bt={key:0,class:"text-dark q-pb-sm"},qt={class:"q-ml-sm text-primary"},_t={class:"text-dark q-pb-sm"},Dt={class:"q-ml-sm text-primary"},wt={class:"text-dark q-pb-sm"},Ct={class:"q-ml-sm text-primary"},St=t("span",null,"You must arrive fit for duty, clean shaven, with short finger nails and appropriately dressed. ",-1),At=t("span",null,"All tools must be in safe working order and not modified. ",-1),Tt=t("span",null,"In addition, you must have approved steel-toed shoes and FRC (Nomex), if required by the facility. ",-1),It=[St,At,Tt],Pt=t("span",null,"If you cannot show up for work as scheduled for any reason, you must call the site contact prior to your scheduled start date and time. Their number will be provided once you have accepted these terms. ",-1),jt=t("span",null,"If the site contact does not answer, you must leave a voicemail or send a text message, and contact the hiring center. ",-1),Nt=t("span",null,"Failure to do so may result in your offer being rescinded.",-1),Bt=[Pt,jt,Nt];function Qt(e,n,r,c,h,g){return a(),p("div",null,[e.item.hide?m("",!0):(a(),y(b,{key:0,class:"q-mb-sm"},{default:o(()=>[s(k,{class:l(["q-py-sm",e.$q.screen.gt.md?"q-px-md":"q-px-sm",e.item.lock?"bg-info":e.item.complete?"bg-positive":e.item.alert?"bg-negative":"bg-accent"])},{default:o(()=>[t("div",it,[t("div",lt,[t("div",{class:l(["text-white",e.$q.screen.gt.sm?"text-body2":"text-caption"])},[!e.item.visible&&!e.item.complete?(a(),y(P,{key:0,onClick:n[0]||(n[0]=u=>e.showDescription=!e.showDescription),round:"",flat:"",icon:e.showDescription?"keyboard_arrow_up":"keyboard_arrow_down",size:e.$q.screen.gt.md?"sm":(e.$q.screen.gt.sm,"xs"),color:"white"},null,8,["icon","size"])):m("",!0),f(" "+i(e.item.lock?"Task Locked":e.item.task)+" ",1),e.item.hasLink&&!e.item.complete?(a(),y(P,{key:1,round:"",flat:"",size:e.$q.screen.gt.md?"sm":(e.$q.screen.gt.sm,"xs"),color:"white",onClick:e.openLink,label:e.item.to,"icon-right":"open_in_new"},{default:o(()=>[e.item.to&&e.item.to!==""?(a(),y(Z,{key:0},{default:o(()=>[f("Open "+i(e.item.to),1)]),_:1})):m("",!0)]),_:1},8,["size","onClick","label"])):m("",!0)],2)]),t("div",ct,[!e.item.complete&&!e.item.alert&&!e.item.lock?(a(),y(nt,{key:0,size:e.$q.screen.gt.md||e.$q.screen.gt.sm?"md":"sm",color:"white"},null,8,["size"])):m("",!0),e.item.complete?(a(),y(Y,{key:1,name:"check_circle",size:e.$q.screen.gt.md?"2rem":e.$q.screen.gt.sm?"1.75rem":"1.5rem",color:"white"},null,8,["size"])):m("",!0),e.item.alert?(a(),y(Y,{key:2,name:"error_outline",size:e.$q.screen.gt.md?"2rem":e.$q.screen.gt.sm?"1.75rem":"1.5rem",color:"white"},null,8,["size"])):m("",!0),e.item.lock?(a(),y(Y,{key:3,name:"lock",size:e.$q.screen.gt.md?"2rem":e.$q.screen.gt.sm?"1.75rem":"1.5rem",color:"white"},null,8,["size"])):m("",!0)])])]),_:1},8,["class"]),!e.item.lock&&(e.showDescription||e.item.visible)?(a(),y(k,{key:0},{default:o(()=>[t("div",{class:l([e.item.alert?"text-negative":"text-dark",e.$q.screen.gt.sm?"text-body2":"text-caption"])},i(e.item.description),3),e.item.needsAcceptance?(a(),y(P,{key:0,class:"q-px-none",flat:"",style:{"text-decoration":"underline"},color:"primary",label:"Review Information",onClick:n[1]||(n[1]=u=>e.openAgreement(e.item.acceptanceType))})):m("",!0),e.item.saba?(a(),p("div",{key:1,class:l(["q-pt-sm",e.item.alert?"text-negative":"text-dark",e.$q.screen.gt.sm?"text-body2":"text-caption"])},[f(" Use the following information to log in to complete your training: "),t("div",{class:l(["text-dark q-mt-sm",e.$q.screen.gt.sm?"text-body2":"text-caption"])},[dt,f(" "+i(e.employeeData[378]),1)],2),t("div",{class:l(["text-dark",e.$q.screen.gt.sm?"text-body2":"text-caption"])},[mt,f(" welcome ")],2)],2)):m("",!0)]),_:1})):m("",!0),(e.item.test||e.item.apply)&&e.item.hasStartButton?(a(),y(q,{key:1})):m("",!0),(e.item.test||e.item.apply)&&e.item.hasStartButton?(a(),y(G,{key:2,align:"right"},{default:o(()=>[e.item.test?(a(),y(P,{key:0,label:e.$t("startTest"),color:"primary",onClick:e.startTest},null,8,["label","onClick"])):m("",!0),e.item.apply?(a(),y(P,{key:1,label:e.$t("applyNow"),color:"primary",onClick:e.startApply},null,8,["label","onClick"])):m("",!0)]),_:1})):m("",!0)]),_:1})),s(be,{modelValue:e.showDeployAgreement,"onUpdate:modelValue":n[3]||(n[3]=u=>e.showDeployAgreement=u),persistent:"","full-width":e.$q.screen.lt.md,"full-height":e.$q.screen.lt.md},{default:o(()=>[s(b,{class:l(["scroll",e.$q.screen.gt.sm?"":"full-width"]),style:ve(e.$q.screen.gt.sm?"min-width: 800px;":"")},{default:o(()=>[s(k,null,{default:o(()=>[pt]),_:1}),s(q),s(k,null,{default:o(()=>[t("div",{class:l(e.$q.screen.gt.md?"text-body2":"text-caption")},[t("div",ut,[f("Start Date/Time:"),t("span",ft,i(e.processingData[33])+" @ "+i(e.processingData[39]),1)]),t("div",ht,[f("Project:"),t("span",yt,i(e.offerData[91]),1)]),t("div",gt,[f("Job:"),t("span",kt,i(e.offerData[57]),1)]),t("div",$t,[f("Pay Rate:"),t("span",vt,"$ "+i(e.offerData[22])+"/hr",1)]),e.processingData[34]?(a(),p("div",bt,[f("Per-diem:"),t("span",qt,"$ "+i(e.offerData[35]),1)])):m("",!0),t("div",_t,[f("Location:"),t("span",Dt,i(e.processingData[188]===""?e.processingData[190]:e.processingData[188]),1)]),t("div",wt,[f("Site Contact:"),t("span",Ct,i(e.processingData[186]===""?"Hiring Center":e.processingData[186]),1)])],2)]),_:1}),s(k,{class:"q-pt-none"},{default:o(()=>[t("div",{class:l(["text-dark",e.$q.screen.gt.sm?"text-body2":"text-caption"])},It,2),t("div",{class:l(["text-dark q-mt-md",e.$q.screen.gt.sm?"text-body2":"text-caption"])},Bt,2)]),_:1}),s(q),s(G,{align:"right"},{default:o(()=>[X(s(P,{flat:"",label:e.$t("decline"),color:"dark"},null,8,["label"]),[[_e]]),s(P,{flat:"",label:e.$t("accept"),color:"primary",onClick:n[2]||(n[2]=u=>e.submitAcceptance(e.item.acceptanceType))},null,8,["label"])]),_:1})]),_:1},8,["class","style"])]),_:1},8,["modelValue","full-width","full-height"])])}var J=I(rt,[["render",Qt]]);const Yt=T({components:{task:J},setup(){const e=K(),{employeeData:n,processingData:r,offerData:c}=A(),h=$(()=>n[79]===4||n[79]===5?"In Process":n[79]===6?"Deployed":""),g=$(()=>[{task:"Complete Hire Packet",complete:r[249],description:"Complete your hiring paperwork. You can get your paperwork from a hiring center employee.",hide:!r[258],hasLink:!1},{task:e.screen.gt.sm?"Complete I9, Employment Eligibility Verification":"Complete I9",complete:r[250],description:"Complete your I9 form. Click the link above to complete.",hasLink:!0,url:r.tracker,to:"i9 Complete",hide:!r[257]},{task:e.screen.gt.sm?"Complete New Employee Safety Orientation":"Complete Safety Orientation",complete:r[251],description:"Complete your BrandSafway New Employee Safety Orientation. Click the link above to open the BrandSafway Learning Network.",hasLink:!0,url:"https://beis-newhire.sabacloud.com/Saba/Web_wdk/NA3P1PRD0029/index/prelogin.rdf",to:"BSLN",hide:!r[256],saba:!0,visible:!r[251]}]),u=$(()=>g.value.filter(d=>!d.complete));return{employeeData:n,helpers:z,processingData:r,offerData:c,status:h,tasks:g,incomplete:u}}}),Vt={key:0},Lt={key:0,class:"text-body2 text-italic q-ml-sm text-accent"},zt={key:1,class:"text-body2 text-italic q-ml-sm text-positive"};function Et(e,n,r,c,h,g){const u=_("task");return e.processingData?(a(),p("div",Vt,[s(b,null,{default:o(()=>[s(k,null,{default:o(()=>[t("div",{class:l(["text-dark",e.$q.screen.gt.md?"text-h6":"text-body1"])},[f(" Assigned Tasks "),e.incomplete.length>0?(a(),p("span",Lt,"("+i(e.incomplete.length)+" tasks remaining)",1)):(a(),p("span",zt,"(All tasks completed!)"))],2)]),_:1}),s(q),s(k,{class:"q-pa-sm"},{default:o(()=>[(a(!0),p(j,null,V(e.tasks,d=>(a(),y(u,{key:d,item:d},null,8,["item"]))),128))]),_:1})]),_:1})])):m("",!0)}var Ft=I(Yt,[["render",Et]]);const Ht=T({components:{task:J},setup(){const e=K(),{employeeData:n,processingData:r,offerData:c}=A(),h=$(()=>[{task:"Complete Hire Packet",complete:r[210],description:"Complete your hiring paperwork. You can get your paperwork from a hiring center employee.",hide:!r[209]},{task:e.screen.gt.sm?"Complete I9, Employment Eligibility Verification":"Complete I9",complete:r[208],description:"Complete your I9 form. Click the link above to complete.",hasLink:!0,url:r.tracker,to:"i9 Complete",hide:!r[207]},{task:e.screen.gt.sm?"Complete New Employee Safety Orientation":"Complete Safety Orientation",complete:r[205],description:"Complete your BrandSafway New Employee Safety Orientation. Click the link above to open the BrandSafway Learning Network.",hasLink:!0,url:"https://beis-newhire.sabacloud.com/Saba/Web_wdk/NA3P1PRD0029/index/prelogin.rdf",to:"BSLN",hide:!r[206],saba:!0,visible:!r[205]},{task:"Complete Safety Council Training",complete:r[33]==="Complete",description:"Complete the trainings required for your Project. A hiring center employee will schedule these classes for you."},{task:"Complete Drug Screens",complete:r[34]==="Complete",description:"Complete the drug screens required for your Project. A hiring center employee will order these for you."},{task:"Complete Fit Tests",complete:r[35]==="Complete",description:"Complete the fit tests required for your Project. A hiring center employee will order these for you."},{task:"Complete Medical Screens",complete:r[36]==="Complete",description:"Complete the medical screens required for your Project. A hiring center employee will order these for you."}]),g=$(()=>h.value.filter(u=>!u.complete&&(u.hide===void 0||!u.hide&&!u.complete)));return{employeeData:n,helpers:z,processingData:r,offerData:c,date:ee,tasks:h,incomplete:g}}}),Rt={key:0},Mt={key:0,class:"text-body2 text-italic q-ml-sm text-accent"},Jt={key:1,class:"text-body2 text-italic q-ml-sm text-positive"};function Ut(e,n,r,c,h,g){const u=_("task");return e.processingData?(a(),p("div",Rt,[s(b,null,{default:o(()=>[s(k,null,{default:o(()=>[t("div",{class:l(["text-dark",e.$q.screen.gt.md?"text-h6":"text-body1"])},[f(" Assigned Tasks "),e.incomplete.length>0?(a(),p("span",Mt,"("+i(e.incomplete.length)+" tasks remaining)",1)):(a(),p("span",Jt,"(All tasks completed!)"))],2)]),_:1}),s(q),s(k,{class:"q-pa-sm"},{default:o(()=>[(a(!0),p(j,null,V(e.tasks,d=>(a(),y(u,{key:d,item:d},null,8,["item"]))),128))]),_:1})]),_:1})])):m("",!0)}var Ot=I(Ht,[["render",Ut]]);const Kt=T({components:{task:J},setup(){const e=A(),{employeeData:n,offerData:r}=e,{processingData:c}=F(e),h=$(()=>[{task:"Review and Accept Terms",complete:c.value.accepted,description:"Click the link below to review and accept the Terms for your new Job.",visible:!c.value.accepted,alert:c.value[192]?c.value[192]:!1,needsAcceptance:!0,acceptanceType:"deployment",idForAcceptance:c.value[3]},{task:`Start Work on ${c.value[33]}`,complete:!1,description:c.value[192]?`You were scheduled to arrive on site on ${c.value[33]} at ${c.value[39]}. If you have not arrived, please call your site contact to reschedule your start date.`:`Congratulations! You are ready to begin your new job assignment. You are scheduled to arrive on site on ${c.value[33]} at ${c.value[39]}. Review the job and arrival details for more info.`,visible:!0,alert:c.value[192]?c.value[192]:!1,lock:!c.value.accepted}]),g=$(()=>h.value.filter(u=>!u.complete));return{employeeData:n,helpers:z,processingData:c,offerData:r,date:ee,tasks:h,incomplete:g}}}),Wt={key:0},Gt={class:"row justify-between q-mt-md"},Xt={class:"text-dark q-pb-sm"},Zt={class:"text-dark q-pb-sm"},xt={class:"text-dark q-pb-sm"},es={class:"text-dark q-pb-sm"},ts={class:"text-dark q-pb-sm"},ss=["href"],as={class:"text-dark q-pb-sm"},os={class:"text-dark q-pb-sm"},ns=["href"],rs={class:"text-dark q-pb-sm"},is=["href"],ls=t("span",null,"You must arrive fit for duty, clean shaven, with short finger nails and appropriately dressed. ",-1),cs=t("span",null,"All tools must be in safe working order and not modified. ",-1),ds=t("span",null,"In addition, you must have approved steel-toed shoes and FRC (Nomex), if required by the facility.",-1),ms=[ls,cs,ds],ps=t("span",null,"If you cannot show up for work as scheduled for any reason, you must call the site contact prior to your scheduled start date and time. ",-1),us=t("span",null,"If the site contact does not answer, you must leave a voicemail or send a text message, and contact the hiring center. ",-1),fs=t("span",null,"Failure to do so may result in your offer being rescinded.",-1),hs=[ps,us,fs],ys={key:1,class:"text-body2 text-italic q-ml-sm text-positive"};function gs(e,n,r,c,h,g){const u=_("task");return e.processingData?(a(),p("div",Wt,[t("div",{class:l(["text-positive q-pl-sm",e.$q.screen.gt.sm?"text-h5":"text-body1"])},"You are ready to start your new Job!",2),t("div",Gt,[e.processingData.accepted?(a(),p("div",{key:0,class:l(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pr-sm":"q-pb-sm"])},[s(b,null,{default:o(()=>[s(k,{class:l(e.processingData[192]?"bg-negative text-white":"text-dark")},{default:o(()=>[t("div",{class:l(e.$q.screen.gt.md?"text-h6":"text-body1")},[e.processingData[192]?(a(),y(Y,{key:0,name:"error_outline",size:e.$q.screen.gt.md?"2rem":e.$q.screen.gt.sm?"1.75rem":"1.5rem",color:"white"},null,8,["size"])):m("",!0),f(" Job and Arrival Details "),e.processingData[192]?(a(),p("span",{key:1,class:l(["text-italic q-ml-sm text-white",e.$q.screen.gt.sm?"text-body2":"text-caption"])},"(Missed arrival date!)",2)):m("",!0)],2),t("div",{class:l(["text-secondary text-italic",e.$q.screen.gt.sm?"text-body2":"text-caption"])},"Terms Accepted: "+i(e.processingData[198].$d!==void 0?e.date.formatDate(e.processingData[198].$d,"MM-DD-YYYY"):e.processingData[198].date),3)]),_:1},8,["class"]),s(q),s(k,null,{default:o(()=>[t("div",{class:l(e.$q.screen.gt.md?"text-body2":"text-caption")},[t("div",Xt,[f("Start Date/Time:"),t("span",{class:l(["q-ml-sm",e.processingData[192]?"":"text-primary"])},i(e.processingData[33])+" @ "+i(e.processingData[39]),3)]),t("div",Zt,[f("Project:"),t("span",{class:l(["q-ml-sm",e.processingData[192]?"":"text-primary"])},i(e.offerData[91]),3)]),t("div",xt,[f("Job:"),t("span",{class:l(["q-ml-sm",e.processingData[192]?"":"text-primary"])},i(e.offerData[57]),3)]),t("div",es,[f("Location:"),t("span",{class:l(["q-ml-sm",e.processingData[192]?"":"text-primary"])},i(e.processingData[188]===""?e.processingData[190]:e.processingData[188]),3)]),t("div",ts,[f("Address: "),t("a",{style:{"text-decoration":"underline"},href:`https://maps.google.com/?q=${e.processingData[189]===""?e.processingData[191]:e.processingData[189]}`,target:"_blank",class:l(["q-ml-sm",e.processingData[192]?"":"text-primary"])},i(e.processingData[189]===""?e.processingData[191]:e.processingData[189]),11,ss)]),t("div",as,[f("Site Contact:"),t("span",{class:l(["q-ml-sm",e.processingData[192]?"":"text-primary"])},i(e.processingData[186]===""?"Hiring Center":e.processingData[186]),3)]),t("div",os,[f("Contact Number: "),e.$q.screen.lt.md?(a(),p("a",{key:0,style:{"text-decoration":"underline"},href:`tel:${e.processingData[187]===""?e.offerData[280]:e.processingData[187]}`,class:l(["q-ml-sm",e.processingData[192]?"":"text-primary"])},i(e.processingData[187]===""?e.offerData[280]:e.processingData[187]),11,ns)):m("",!0),e.$q.screen.gt.sm?(a(),p("span",{key:1,class:l(["q-ml-sm",e.processingData[192]?"":"text-primary"])},i(e.processingData[187]===""?e.offerData[280]:e.processingData[187]),3)):m("",!0)]),t("div",rs,[f("Hiring Center: "),e.$q.screen.lt.md?(a(),p("a",{key:0,style:{"text-decoration":"underline"},href:`tel:${e.offerData[280]}`,class:l(["q-ml-sm",e.processingData[192]?"":"text-primary"])},i(e.offerData[280]),11,is)):m("",!0),e.$q.screen.gt.sm?(a(),p("span",{key:1,class:l(["q-ml-sm",e.processingData[192]?"":"text-primary"])},i(e.offerData[280]),3)):m("",!0)])],2)]),_:1}),s(q),s(k,null,{default:o(()=>[t("div",{class:l(["text-dark",e.$q.screen.gt.sm?"text-body2":"text-caption"])},ms,2),t("div",{class:l(["text-dark q-mt-md",e.$q.screen.gt.sm?"text-body2":"text-caption"])},hs,2)]),_:1})]),_:1})],2)):m("",!0),t("div",{class:l(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pl-sm":"q-pb-sm"])},[s(b,null,{default:o(()=>[s(k,{class:l(e.processingData[192]?"bg-negative text-white":"text-dark")},{default:o(()=>[t("div",{class:l(e.$q.screen.gt.md?"text-h6":"text-body1")},[f(" Assigned Tasks "),e.incomplete.length>0?(a(),p("span",{key:0,class:l(["text-italic q-ml-sm",e.processingData[192]?"text-white":"text-accent",e.$q.screen.gt.sm?"text-body2":"text-caption"])},"("+i(e.incomplete.length)+" task"+i(e.incomplete.length>1?"s":"")+" remaining)",3)):(a(),p("span",ys,"(All tasks completed!)"))],2)]),_:1},8,["class"]),s(q),s(k,{class:"q-pa-sm"},{default:o(()=>[(a(!0),p(j,null,V(e.tasks,d=>(a(),y(u,{key:d,item:d},null,8,["item"]))),128))]),_:1})]),_:1})],2)])])):m("",!0)}var ks=I(Kt,[["render",gs]]);const $s={class:"row justify-between q-mt-md"},vs={key:0,class:"text-body2 text-italic q-ml-sm text-accent"},bs={key:1,class:"text-body2 text-italic q-ml-sm text-positive"},qs={__name:"needsTest",setup(e){const n=L(),{testForCraft:r}=ie(),{t:c}=me(),h=A(),g=$(()=>n.onKiosk?[{task:`${c("completeCraftTest").replace("{craft}",r[10])}`,complete:!1,description:`${c("clickStartTestButton")}`,hide:!1,hasLink:!1,hasStartButton:!0,visible:!0,test:!0}]:[{task:`${c("completeCraftTest").replace("{craft}",r[10])}`,complete:!1,description:n.checkedIn?`${c("loginToKioskForTest")}`:`${c("visitOfficeAndCompleteTest")}`,hide:!1,hasLink:!1,hasStartButton:!1,visible:!0,test:!0}]),u=$(()=>g.value.filter(d=>!d.complete));return n.checkedIn&&r&&(n.checkInData[27]!=="Kiosk"||n.checkInData[10]!=="Take Craft Test")&&n.addTaskToCheckin({task:`${c("kiosk")}`,reason:`${c("takeCraftTest")}`}),(d,v)=>(a(),p("div",$s,[t("div",{class:l(["col-12 col-md-6",d.$q.screen.gt.sm?"q-pr-sm":"q-pb-sm"])},[t("div",null,[s(b,null,{default:o(()=>[s(k,null,{default:o(()=>[t("div",{class:l(["text-dark",d.$q.screen.gt.md?"text-h6":"text-body1"])},[f(i(d.$t("youHaveTaskAssigned"))+" ",1),C(h).employeeData.needsTest&&u.value.length>0?(a(),p("span",vs,"("+i(u.value.length>1?`${u.value.length} ${d.$t("taskRemaining")}`:u.value.length===1?`${d.$t("oneTask")}`:`${d.$t("noTask")}`)+")",1)):(a(),p("span",bs,"("+i(d.$t("allTaskCompleted"))+")",1))],2)]),_:1}),s(q),s(k,{class:"q-pa-sm"},{default:o(()=>[(a(!0),p(j,null,V(g.value,D=>(a(),y(J,{key:D,item:D},null,8,["item"]))),128))]),_:1})]),_:1})])],2),t("div",{class:l(["col-12 col-md-6",d.$q.screen.gt.sm?"q-pr-sm":"q-pb-sm"])},null,2)]))}},_s=T({components:{task:J},setup(){const{t:e}=me(),{employeeData:n,voluntaryFormsComplete:r}=A(),c=$(()=>[{task:`${e("applyingForAJob")}`,complete:n.complete&&r,description:`${e("clickApplyToBegin")}`,hide:!1,hasLink:!1,hasStartButton:!0,visible:!0,test:!1,apply:!0}]),h=$(()=>c.value.filter(g=>!g.complete));return{employeeData:n,tasks:c,incomplete:h}}}),Ds={class:"row justify-between q-mt-md"},ws={key:0,class:"text-body2 text-italic q-ml-sm text-accent"},Cs={key:1,class:"text-body2 text-italic q-ml-sm text-positive"};function Ss(e,n,r,c,h,g){const u=_("task");return a(),p("div",Ds,[t("div",{class:l(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pr-sm":"q-pb-sm"])},[t("div",null,[s(b,null,{default:o(()=>[s(k,null,{default:o(()=>[t("div",{class:l(["text-dark",e.$q.screen.gt.md?"text-h6":"text-body1"])},[f(i(e.$t("youHaveTaskAssigned"))+" ",1),e.incomplete.length>0?(a(),p("span",ws,"("+i(e.incomplete.length>1?`${e.incomplete.length} ${e.$t("taskRemaining")}`:e.incomplete.length===1?`${e.$t("oneTask")}`:`${e.$t("noTask")}`)+")",1)):(a(),p("span",Cs,"("+i(e.$t("allTaskCompleted"))+")",1))],2)]),_:1}),s(q),s(k,{class:"q-pa-sm"},{default:o(()=>[(a(!0),p(j,null,V(e.tasks,d=>(a(),y(u,{key:d,item:d},null,8,["item"]))),128))]),_:1})]),_:1})])],2),t("div",{class:l(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pr-sm":"q-pb-sm"])},null,2)])}var As=I(_s,[["render",Ss]]);const Ts=T({components:{},setup(){const{addTaskToCheckin:e}=L(),{employeeData:n}=A(),r=$(()=>Ce({selection:Se().required("Please select a reason!").nullable()})),{meta:c,errors:h,handleSubmit:g,isSubmitting:u}=Ae({validationSchema:r}),{value:d}=Te("selection"),v=g(async D=>{const N=await e({task:"",reason:D.selection,active:!0});console.log(N)});return{options:["Transfer","Released from Job Site","Random Drug Screen","Safety Council","Help with Payroll","Other"],employeeData:n,submitUpdate:v,formMeta:c,formErrors:h,selection:d,isSubmitting:u}}}),Is={class:"row justify-between q-mt-md"},Ps={class:"text-caption"};function js(e,n,r,c,h,g){return a(),p("div",Is,[t("div",{class:l(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pr-sm":"q-pb-sm"])},[t("div",null,[s(b,null,{default:o(()=>[s(k,null,{default:o(()=>[t("div",{class:l(["text-dark",e.$q.screen.gt.md?"text-h6":"text-body1"])}," Why Are You Here? ",2)]),_:1}),s(q),s(we,{onSubmit:qe(e.submitUpdate,["prevent"])},{default:o(()=>[s(k,null,{default:o(()=>[s(De,{autofocus:"",label:"Select a Reason",modelValue:e.selection,"onUpdate:modelValue":n[0]||(n[0]=u=>e.selection=u),options:e.options,error:!!e.formErrors.selection,"bottom-slots":"",dense:""},{error:o(()=>[t("div",Ps,i(e.formErrors.selection),1)]),_:1},8,["modelValue","options","error"])]),_:1}),s(G,{align:"right"},{default:o(()=>[s(P,{type:"submit",color:"info",label:"Continue",loading:e.isSubmitting},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})])],2)])}var Ns=I(Ts,[["render",js]]);const Bs=T({components:{},setup(){const{employeeData:e}=A(),{getUser:n}=x();return{employeeData:e,helpers:z,date:ee,getUser:n}}}),Qs={class:"row justify-between q-mt-md"},Ys=t("span",{class:"text-primary"},"Account Created",-1),Vs={class:"text-dark q-pl-md"},Ls=t("span",{class:"text-primary"},"Name",-1),zs={class:"text-dark q-pl-md"},Es=t("span",{class:"text-primary"},"Phone",-1),Fs={class:"text-dark q-pl-md"},Hs=t("span",{class:"text-primary"},"Email",-1),Rs={class:"text-dark q-pl-md"};function Ms(e,n,r,c,h,g){return a(),p("div",Qs,[t("div",{class:l(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pr-sm":"q-pb-sm"])},[t("div",null,[s(b,null,{default:o(()=>[s(k,{class:"bg-info"},{default:o(()=>[t("div",{class:l(["text-white",e.$q.screen.gt.sm?"text-h6":"text-body1"])},"Your Information",2)]),_:1}),s(q),s(k,null,{default:o(()=>[t("div",{class:l(["q-mt-sm",e.$q.screen.gt.sm?"text-body1":"text-caption"])},[Ys,t("span",Vs,i(e.date.formatDate(e.getUser[1].$d,"MM/DD/YYYY")),1)],2),t("div",{class:l(["q-mt-sm",e.$q.screen.gt.sm?"text-body1":"text-caption"])},[Ls,t("span",zs,i(e.helpers.formatName(e.employeeData[24])),1)],2),t("div",{class:l(["q-mt-sm",e.$q.screen.gt.sm?"text-body1":"text-caption"])},[Es,t("span",Fs,i(e.helpers.formatPhone(e.employeeData[25])),1)],2),t("div",{class:l(["q-mt-sm",e.$q.screen.gt.sm?"text-body1":"text-caption"])},[Hs,t("span",Rs,i(e.employeeData[26]),1)],2)]),_:1})]),_:1})])],2),t("div",{class:l(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pr-sm":"q-pb-sm"])},[t("div",null,[s(b,null,{default:o(()=>[s(k,{class:"bg-positive"},{default:o(()=>[t("div",{class:l(["text-white",e.$q.screen.gt.md?"text-h6":"text-body1"])}," You have No Assigned Tasks ",2)]),_:1})]),_:1})])],2)])}var Js=I(Bs,[["render",Ms]]);const Us=T({components:{JobDetails:at,InProcess:Ft,Pending:Ot,Deployed:ks,NeedsTest:qs,NeedsApply:As,CheckInActive:Ns,NoTasks:Js},setup(){const e=L(),n=A(),{testForCraft:r}=ie(),{employeeData:c,voluntaryFormsComplete:h,showInProcess:g,checkInActive:u,noTasks:d,employeeActive:v,employeeAvailable:D}=F(n);return{appStore:e,employeeStore:n,helpers:z,employeeData:c,voluntaryFormsComplete:h,showInProcess:g,checkInActive:u,noTasks:d,employeeActive:v,testForCraft:r,employeeAvailable:D}}}),Os={key:0},Ks={key:0,class:"row justify-between"};function Ws(e,n,r,c,h,g){const u=_("job-details"),d=_("in-process"),v=_("pending"),D=_("deployed"),N=_("needs-test"),H=_("needs-apply"),R=_("check-in-active"),B=_("no-tasks");return e.employeeAvailable?(a(),p("div",Os,[e.employeeData[79]!==6&&e.showInProcess?(a(),p("div",Ks,[e.employeeData[79]!==6?(a(),p("div",{key:0,class:l(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pr-sm":"q-pb-sm order-last"])},[s(u)],2)):m("",!0),e.employeeData[79]===4||e.employeeData[79]===5?(a(),p("div",{key:1,class:l(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pl-sm":"q-pb-sm"])},[e.employeeData[79]===4?(a(),y(d,{key:0})):m("",!0),e.employeeData[79]===5?(a(),y(v,{key:1})):m("",!0)],2)):m("",!0)])):m("",!0),e.showInProcess&&e.employeeData[79]===6?(a(),y(D,{key:1,class:"q-mt-md"})):m("",!0),e.employeeData.needsTest&&e.testForCraft&&e.employeeData[79]!==6&&!e.showInProcess&&e.employeeData.complete&&!e.checkInActive&&!e.employeeActive?(a(),y(N,{key:2})):m("",!0),(!e.employeeData.complete||!e.voluntaryFormsComplete)&&!e.showInProcess&&!e.checkInActive&&!e.employeeActive?(a(),y(H,{key:3})):m("",!0),e.checkInActive?(a(),y(R,{key:4})):m("",!0),e.noTasks?(a(),y(B,{key:5})):m("",!0)])):m("",!0)}var Gs=I(Us,[["render",Ws]]);const Xs={__name:"Home",setup(e){const{pageType:n}=L();return(r,c)=>(a(),y(de,{padding:"",style:{"max-width":"100vw"}},{default:o(()=>[s(Ye),s(q),C(n)==="Candidate"||C(n)==="Candidate Kiosk"?(a(),y(Gs,{key:0})):m("",!0)]),_:1}))}},Zs=T({name:"Dashboard",components:{EmployeeRoster:Pe},setup(){const e=O(0),n=K(),r=ce(),{userData:c,userProjects:h,getUserType:g,getUser:u}=x(),{getAssignments:d}=Ie(),v=fe(),{getProjects:D}=F(v),N=O(g==="Project User"?u[3]:null),H=$(()=>D.value({userType:g,selectedId:N.value,can:"read"}).filter(w=>!0).sort((w,M)=>w[298].localeCompare(M[298]))),R=$(()=>{let w;return U().isBefore(U("12","h"))?w="Good Morning":w="Good Afternoon",w}),B=$(()=>U().format("dddd, MMMM D, YYYY"));return{tab:e,userData:c,dayjs:U,greeting:R,currentDateTime:B,cards:[{title:"View Hire Requests",subtitle:"View the hire requests that have been submitted into the Hiring Center.",icon:"fa-solid fa-user-plus",route:{path:"requests",exact:!0}},{title:"View Pipeline",subtitle:"View the employees that are in process for your project.",icon:"fa-solid fa-bars-progress",route:{path:"pipeline",exact:!0}},{title:"View Expected Arrivals",subtitle:"View the employees that have been deployed to your project.",icon:"fa-solid fa-person-walking-arrow-right",route:{path:"arrivals",exact:!0}},{title:"View Employees",subtitle:"View the employees that are active on your project.",icon:"fa-solid fa-people-group",route:{path:"employees",exact:!0}}],access:H,viewProject:w=>{n.loading.show(),r.push({name:"project-general",params:{id:w}}),n.loading.hide()},setupProject:w=>{r.push({name:"project-setup",params:{id:w}})},getAssignments:d}}}),xs={class:"q-pa-md"},ea={class:"text-subtitle2 text-secondary"},ta={class:"text-h5 text-primary"},sa={class:"row items-start"},aa={key:0,class:"col-12 col-md-5 q-pr-md"},oa=t("div",{class:"text-h6 text-white"},"Your Projects",-1),na={class:"text-grey-8 q-gutter-xs"};function ra(e,n,r,c,h,g){const u=_("employee-roster");return a(),y(de,{style:{"max-width":"100vw"}},{default:o(()=>[t("div",xs,[s(b,{flat:""},{default:o(()=>[s(k,{class:"q-pa-none"},{default:o(()=>[t("div",ea,i(e.currentDateTime),1),t("div",ta,i(e.greeting)+" "+i(e.userData[35])+"!",1)]),_:1}),s(k,{class:"q-px-none"},{default:o(()=>[t("div",sa,[e.$can("read","projects")?(a(),p("div",aa,[s(b,{class:"full-height"},{default:o(()=>[s(k,{class:"bg-dark q-py-xs row"},{default:o(()=>[oa]),_:1}),s(q),s(k,{class:"q-pa-none"},{default:o(()=>[s(re,{bordered:"",separator:""},{default:o(()=>[(a(!0),p(j,null,V(e.access,d=>X((a(),y(oe,{key:d[3],clickable:"",onClick:v=>e.viewProject(d[3])},{default:o(()=>[s(E,{avatar:"",class:"col-6"},{default:o(()=>[s(Q,{class:"text-body2 text-info"},{default:o(()=>[f(i(d[20]),1)]),_:2},1024),s(Q,{class:"text-caption text-dark"},{default:o(()=>[f(i(d[24]),1)]),_:2},1024)]),_:2},1024),s(E,{top:"",class:"col-2"},{default:o(()=>[s(Z,{class:"bg-primary"},{default:o(()=>[f(" Active Headcount ")]),_:1}),s(Q,{class:"q-mt-sm"},{default:o(()=>[f(i(e.getAssignments(d[3]).filter(v=>!v[112]&&v.latest&&v[102]==="Active").length),1)]),_:2},1024)]),_:2},1024),s(E,{top:"",class:"col-2"},{default:o(()=>[s(Z,{class:"bg-primary"},{default:o(()=>[f(" Client Contracted Headcount ")]),_:1}),d[364]?(a(),y(Q,{key:0,class:"q-mt-sm"},{default:o(()=>[f(i(d[364]),1)]),_:2},1024)):(a(),y(Q,{key:1,class:"q-mt-sm"},{default:o(()=>[f("N/A")]),_:1}))]),_:2},1024),s(E,{top:"",side:"",class:"col-2"},{default:o(()=>[t("div",na,[s(Y,{color:"info",size:"md",name:"visibility"})])]),_:1})]),_:2},1032,["onClick"])),[[ne]])),128))]),_:1})]),_:1})]),_:1})])):m("",!0),t("div",{class:l(["col-12",e.$can("read","projects")?"col-md-7":""])},[s(b,{class:"full-height"},{default:o(()=>[s(k,{class:"q-pa-none"},{default:o(()=>[s(re,{bordered:"",separator:""},{default:o(()=>[(a(!0),p(j,null,V(e.cards,(d,v)=>X((a(),y(oe,{key:v,clickable:"",to:d.route,class:"q-py-md"},{default:o(()=>[s(E,{avatar:""},{default:o(()=>[s(Y,{color:"accent",size:"md",name:d.icon},null,8,["name"])]),_:2},1024),s(E,{class:"q-px-none"},{default:o(()=>[s(Q,{class:"text-body2"},{default:o(()=>[f(i(d.title)+" ",1),s(Y,{name:"chevron_right",color:"dark",size:"xs"})]),_:2},1024),s(Q,{class:"text-caption text-secondary"},{default:o(()=>[f(i(d.subtitle),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])),[[ne]])),128))]),_:1})]),_:1})]),_:1})],2)])]),_:1})]),_:1}),s(b,{flat:""},{default:o(()=>[s(k,{class:"q-px-none"},{default:o(()=>[s(u)]),_:1})]),_:1})])]),_:1})}var ia=I(Zs,[["render",ra]]);const Ja={__name:"home",setup(e){const{pageType:n}=L();return(r,c)=>(a(),p(j,null,[C(n)==="Candidate"||C(n)==="Candidate Kiosk"?(a(),y(Xs,{key:0})):m("",!0),C(n)==="Project User"?(a(),y(ia,{key:1})):m("",!0)],64))}};export{Ja as default};
