import{Q as X}from"./QImg.6949a204.js";import{_ as G,bW as H,bV as J,r as d,c as K,w as S,B as n,as as V,bt as c,aa as B,C as p,d as v,at as u,E as _,cV as Z,cW as k,ae as Q,az as j,bQ as ee,cX as te,b as ae,bY as oe,b3 as se,b1 as re}from"./index.8838c464.js";import{Q as le}from"./QForm.fc17450c.js";import{Q as ne}from"./QPage.49220ad5.js";import{u as ue}from"./use-quasar.ed4be5d9.js";import{u as ie}from"./vee-validate.esm.ac2c348d.js";import{c as de}from"./array.59f93f43.js";import{u as ce,q as b,i as pe}from"./app.42c36b1f.js";import{c as me}from"./carousel.ce781f07.js";import{dayjs as C}from"./dayjs.106d80ab.js";import"./_commonjsHelpers.a26ce4be.js";import"./localForage.ca6e9d39.js";import"./index.04bc0a32.js";import"./i18n.c69e89dd.js";import"./use-panel.9c83e7d4.js";import"./touch.3df10340.js";import"./selection.26380b58.js";import"./use-fullscreen.abb80350.js";const O=I=>(se("data-v-4d7f7a78"),I=I(),re(),I),ve={key:0,class:"col-md-7 col-lg-8 col-lx-8"},fe={class:"col-xs-12 col-sm-12 col-md-5 col-lg-4 col-lx-4 row justify-center items-center"},ye={key:0,class:"text-dark"},ge={key:1,class:"text-dark"},he={key:2,class:"text-dark"},be={key:3,class:"text-dark"},_e=O(()=>_("br",null,null,-1)),xe={key:4,class:"text-dark"},we=O(()=>_("br",null,null,-1)),qe={key:2,class:"text-grey-6 text-right"},ke={key:3,class:"text-grey-6 text-right"},Ce={__name:"codeConfirmation",setup(I){const f=ue(),D=ce(),a=H(),m=J(),E=d(""),N=d(""),s=d("phone number"),r=d("code-confirmation"),i=d(Math.floor(1e5+Math.random()*9e5)),x=d(null),y=d(!1),q=d(!1),w=d(0),l=d(null),{value:g}=ie("codeConfirmation",de().matches(/^[0-9]{6}/g,{excludeEmptyString:!0,message:"Code Not Valid!"}).required().oneOf([i.value],"Code Not Valid!")),T=K(()=>g.value===i.value),$=t=>{const e=Math.floor(t/6e4),o=(t%6e4/1e3).toFixed(0);return e+":"+(o<10?"0":"")+o};S(s,t=>{i.value=null,g.value=null,q.value=!1,i.value=null,x.value=null,r.value="code-confirmation"}),S(w,t=>{t===0?(q.value=!0,i.value=null,x.value=null):q.value=!1}),S(g,async t=>{Number(t)===i.value&&(f.notify({position:"top-right",type:"positive",message:"Code Verified!"}),s.value==="phone number"?A():s.value==="email"&&F())});const M=async()=>{if(y.value=!0,i.value=Math.floor(1e5+Math.random()*9e5),g.value=null,x.value=C().add(5,"minute").toISOString(),s.value==="phone number")try{await pe.sendMessage({data:{body:`Your Brandsafway Verification Code is: ${i.value}`,to:E.value,messagingServiceSid:"MGd0e31773980318b7cdc5d2043117e27c",direction:"outbound-api",twilioMessage:!0}}),f.notify({position:"top-right",type:"info",message:"Text message sent!"}),x.value=C().add(1,"minute"),y.value=!1,y.value=!1,U(),r.value="code-sent"}catch(t){console.log(t),y.value=!1}else s.value==="email"&&(await P(),y.value=!1,f.notify({position:"top-right",type:"info",message:"Email sent!"}),x.value=C().add(2,"minute"),y.value=!1,U(),r.value="code-sent")},U=()=>{const t=setInterval(()=>{w.value=C(x.value).valueOf()-C().valueOf(),w.value<=0&&(w.value=0,clearInterval(t))},1e3)},P=async()=>{if(!l.value||l.value==="")return!1;const t=await b.isUserLoggedIn(),e=new Date;i.value||(i.value=Math.floor(1e5+Math.random()*9e5));const o={3:{value:l.value},26:{value:e},87:{value:e},88:{value:i.value},47:{value:!0}};try{return t?await b.updateUserData({fields:o}):await b.upsertRecordsXML({to:"br4pxrbs6",fieldsToReturn:[76],data:[o],formatObject:76})}catch(h){f.notify({position:"top-right",type:"negative",message:h.message||"Error updating Verification!"})}},A=async()=>{if(!l.value||l.value==="")return!1;const t=await b.isUserLoggedIn(),e=new Date,o={3:{value:l.value},26:{value:e},50:{value:!0}};try{await b.updateUserData({fields:o}),t?m.push({path:"/",query:{code:!0}}):m.push({name:"password-update",query:{rid:l.value,ac:!0}})}catch(h){f.notify({position:"top-right",type:"negative",message:h.message||"Error updating Verification!"})}},F=async()=>{if(!l.value||l.value==="")return!1;const t=await b.isUserLoggedIn(),e=new Date,o={3:{value:l.value},26:{value:e},49:{value:!0}};try{await b.updateUserData({fields:o}),t?m.push({path:"/",query:{code:!0}}):m.push({name:"password-update",query:{rid:l.value,ac:!0}})}catch(h){f.notify({position:"top-right",type:"negative",message:h.message||"Error updating Verification!"})}},Y=()=>{D.logout().then(()=>{m.replace({name:"login"})})},z=()=>E.value.replace(/(\d{3})(\d{3})(\d{4})/,"******$3"),W=()=>(D.userLoggedIn?D.user[34]:N.value||"").replace(/(.{2})(.*)(?=@)/,function(e,o,h){for(let R=0;R<h.length;R++)o+="*";return o});S(()=>a.query,()=>{L(!1)});const L=async t=>{if(a.query.p&&a.query.rid){r.value="code-confirmation",E.value=a.query.p,l.value=a.query.rid,a.query.p=null,a.query.rid=null;const e=Object.assign({},a.query);delete e.p,delete e.rid,(a.query.send==="true"||a.query.send===!0)&&M(),delete e.send,m.replace({query:e})}else if(a.query.e&&a.query.rid){r.value="code-confirmation",s.value="email",N.value=a.query.e,l.value=a.query.rid,a.query.e=null,a.query.rid=null;const e=Object.assign({},a.query);delete e.p,delete e.rid,(a.query.send==="true"||a.query.send===!0)&&M(),delete e.send,m.replace({query:e})}else t&&m.push("/login")};return L(!0),(t,e)=>(n(),V(ne,{class:"window-height window-width row"},{default:c(()=>[B(f).screen.lt.md?u("",!0):(n(),p("div",ve,[v(me)])),_("div",fe,[v(Z,{class:"auth-card",flat:""},{default:c(()=>[v(k,{style:{"padding-left":"30px","padding-right":"30px"}},{default:c(()=>[v(X,{src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo.svg",fit:"scale-down",class:"auth-logo full-width"})]),_:1}),v(k,{class:"text-center auth-description"},{default:c(()=>[r.value==="code-sent"&&s.value==="phone number"?(n(),p("p",ye,"A text message with a verification code has been sent to your phone.")):u("",!0),r.value==="code-sent"&&s.value==="email"?(n(),p("p",ge,"A verification code has been sent to your email. ")):u("",!0),r.value==="code-confirmation"?(n(),p("p",he,"Your "+Q(s.value)+" needs to be verified click the button below to verify.",1)):u("",!0),r.value==="code-confirmation"&&s.value==="phone number"?(n(),p("p",be,[_e,j(Q(z()),1)])):u("",!0),r.value==="code-confirmation"&&s.value==="email"?(n(),p("p",xe,[we,j(Q(W()),1)])):u("",!0)]),_:1}),v(k,null,{default:c(()=>[v(le,{class:"q-px-sm q-pt-sm",onSubmit:e[3]||(e[3]=ee(()=>{},["prevent"]))},{default:c(()=>[r.value==="code-sent"?(n(),V(te,{key:0,class:"col-xs-12 col-sm-6 q-pb-md",clearable:"",outlined:"",disable:q.value,loading:q.value,modelValue:B(g),"onUpdate:modelValue":e[0]||(e[0]=o=>ae(g)?g.value=o:null),type:"text",autocomplete:"one-time-code",inputmode:"numeric",pattern:"[0-9]*",label:"Code",tabindex:"1",maxlength:"6",minlength:"6",name:"codeConfirmation",error:!!T.value,"error-message":"Code does not match!"},{append:c(()=>[j(Q($(w.value))+"\xA0 ",1)]),_:1},8,["disable","loading","modelValue","error"])):u("",!0),r.value==="code-confirmation"?(n(),V(oe,{key:1,unelevated:"",size:"lg",color:"primary",class:"full-width text-white",label:"Send Code",tabindex:"1",loading:y.value,onClick:M},null,8,["loading"])):u("",!0),s.value==="phone number"?(n(),p("p",qe,[_("a",{href:"javascript:void(0);",onClick:e[1]||(e[1]=o=>s.value="email")},"Use Email")])):u("",!0),s.value==="email"?(n(),p("p",ke,[_("a",{href:"javascript:void(0);",onClick:e[2]||(e[2]=o=>s.value="phone number")},"Use Phone Number")])):u("",!0),r.value==="code-sent"?(n(),V(k,{key:4,class:"q-py-none row justify-center"},{default:c(()=>[w.value===0?(n(),p("a",{key:0,onClick:M,class:"text-grey-6",href:"javascript:void(0);",tabindex:"2"},"Resend Code")):u("",!0)]),_:1})):u("",!0)]),_:1})]),_:1}),v(k,{class:"text-center q-pa-sm"},{default:c(()=>[_("p",{class:"text-grey-6"},[_("a",{onClick:Y,class:"text-grey-6",href:"javascript:void(0);",tabindex:"3"},"Logout")])]),_:1})]),_:1})])]),_:1}))}};var Fe=G(Ce,[["__scopeId","data-v-4d7f7a78"]]);export{Fe as default};
