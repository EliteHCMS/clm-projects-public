import{Q as H}from"./QImg.61e584d6.js";import{_ as X,bM as J,bL as K,r as c,c as W,w as S,A as n,an as V,bi as d,a7 as j,B as m,d as v,ao as u,D as _,cw as k,ab as D,au as N,bF as Z,cx as ee,b as te,bO as ae,cz as oe,aV as se,aT as re}from"./index.8bd7d03d.js";import{Q as le}from"./QForm.85837132.js";import{Q as ne}from"./QPage.5a0e1cca.js";import{u as ue}from"./use-quasar.4af32af0.js";import{u as ie}from"./vee-validate.esm.fe112456.js";import{c as ce}from"./array.14a74a50.js";import{u as de,q as b}from"./quickbase.c9a95ac7.js";import{c as me}from"./carousel.5b3318bd.js";import{api as pe}from"./api.d2932112.js";import{dayjs as C}from"./dayjs.cdcb4373.js";import"./_commonjsHelpers.a26ce4be.js";import"./index.7dbe61ef.js";import"./localForage.f89ac332.js";import"./i18n.711540c5.js";import"./use-panel.7de68e10.js";import"./touch.60582172.js";import"./selection.f7c019af.js";import"./use-fullscreen.fab45d51.js";const B=I=>(se("data-v-78f78103"),I=I(),re(),I),ve={key:0,class:"col-md-7 col-lg-8 col-lx-8"},fe={class:"col-xs-12 col-sm-12 col-md-5 col-lg-4 col-lx-4 row justify-center items-center"},ge={key:0,class:"text-dark"},ye={key:1,class:"text-dark"},he={key:2,class:"text-dark"},be={key:3,class:"text-dark"},_e=B(()=>_("br",null,null,-1)),xe={key:4,class:"text-dark"},we=B(()=>_("br",null,null,-1)),qe={key:2,class:"text-grey-6 text-right"},ke={key:3,class:"text-grey-6 text-right"},Ce={__name:"codeConfirmation",setup(I){const f=ue(),Q=de(),a=J(),p=K(),E=c(""),L=c(""),s=c("phone number"),r=c("code-confirmation"),i=c(Math.floor(1e5+Math.random()*9e5)),x=c(null),g=c(!1),q=c(!1),w=c(0),l=c(null),{value:y}=ie("codeConfirmation",ce().matches(/^[0-9]{6}/g,{excludeEmptyString:!0,message:"Code Not Valid!"}).required().oneOf([i.value],"Code Not Valid!")),T=W(()=>y.value===i.value),$=t=>{const e=Math.floor(t/6e4),o=(t%6e4/1e3).toFixed(0);return e+":"+(o<10?"0":"")+o};S(s,t=>{i.value=null,y.value=null,q.value=!1,i.value=null,x.value=null,r.value="code-confirmation"}),S(w,t=>{t===0?(q.value=!0,i.value=null,x.value=null):q.value=!1}),S(y,async t=>{Number(t)===i.value&&(f.notify({position:"top-right",type:"positive",message:"Code Verified!"}),s.value==="phone number"?F():s.value==="email"&&P())});const M=async()=>{if(g.value=!0,i.value=Math.floor(1e5+Math.random()*9e5),y.value=null,x.value=C().add(5,"minute").toISOString(),s.value==="phone number")try{await pe.createMessageQueue({to:E.value,messagingServiceSid:"MGd0e31773980318b7cdc5d2043117e27c",message:`Your Brandsafway Verification Code is: ${i.value}`,extRef:null,massText:!1}),f.notify({position:"top-right",type:"info",message:"Text message sent!"}),x.value=C().add(1,"minute"),g.value=!1,g.value=!1,R(),r.value="code-sent"}catch(t){console.log(t),g.value=!1}else s.value==="email"&&(await A(),g.value=!1,f.notify({position:"top-right",type:"info",message:"Email sent!"}),x.value=C().add(2,"minute"),g.value=!1,R(),r.value="code-sent")},R=()=>{const t=setInterval(()=>{w.value=C(x.value).valueOf()-C().valueOf(),w.value<=0&&(w.value=0,clearInterval(t))},1e3)},A=async()=>{if(!l.value||l.value==="")return!1;const t=await b.isUserLoggedIn(),e=new Date;i.value||(i.value=Math.floor(1e5+Math.random()*9e5));const o={3:{value:l.value},26:{value:e},87:{value:e},88:{value:i.value},47:{value:!0}};try{return t?await b.updateUserData({fields:o}):await b.upsertRecordsXML({to:"br4pxrbs6",fieldsToReturn:[76],data:[o],formatObject:76})}catch(h){f.notify({position:"top-right",type:"negative",message:h.message||"Error updating Verification!"})}},F=async()=>{if(!l.value||l.value==="")return!1;const t=await b.isUserLoggedIn(),e=new Date,o={3:{value:l.value},26:{value:e},50:{value:!0}};try{await b.updateUserData({fields:o}),t?p.push({path:"/",query:{code:!0}}):p.push({name:"password-update",query:{rid:l.value,ac:!0}})}catch(h){f.notify({position:"top-right",type:"negative",message:h.message||"Error updating Verification!"})}},P=async()=>{if(!l.value||l.value==="")return!1;const t=await b.isUserLoggedIn(),e=new Date,o={3:{value:l.value},26:{value:e},49:{value:!0}};try{await b.updateUserData({fields:o}),t?p.push({path:"/",query:{code:!0}}):p.push({name:"password-update",query:{rid:l.value,ac:!0}})}catch(h){f.notify({position:"top-right",type:"negative",message:h.message||"Error updating Verification!"})}},z=()=>{Q.logout().then(()=>{p.replace({name:"login"})})},Y=()=>E.value.replace(/(\d{3})(\d{3})(\d{4})/,"******$3"),G=()=>(Q.userLoggedIn?Q.user[34]:L.value||"").replace(/(.{2})(.*)(?=@)/,function(e,o,h){for(let O=0;O<h.length;O++)o+="*";return o});S(()=>a.query,()=>{U(!1)});const U=async t=>{if(a.query.p&&a.query.rid){r.value="code-confirmation",E.value=a.query.p,l.value=a.query.rid,a.query.p=null,a.query.rid=null;const e=Object.assign({},a.query);delete e.p,delete e.rid,(a.query.send==="true"||a.query.send===!0)&&M(),delete e.send,p.replace({query:e})}else if(a.query.e&&a.query.rid){r.value="code-confirmation",s.value="email",L.value=a.query.e,l.value=a.query.rid,a.query.e=null,a.query.rid=null;const e=Object.assign({},a.query);delete e.p,delete e.rid,(a.query.send==="true"||a.query.send===!0)&&M(),delete e.send,p.replace({query:e})}else t&&p.push("/login")};return U(!0),(t,e)=>(n(),V(ne,{class:"window-height window-width row"},{default:d(()=>[j(f).screen.lt.md?u("",!0):(n(),m("div",ve,[v(me)])),_("div",fe,[v(oe,{class:"auth-card",flat:""},{default:d(()=>[v(k,{style:{"padding-left":"30px","padding-right":"30px"}},{default:d(()=>[v(H,{src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo.svg",fit:"scale-down",class:"auth-logo full-width"})]),_:1}),v(k,{class:"text-center auth-description"},{default:d(()=>[r.value==="code-sent"&&s.value==="phone number"?(n(),m("p",ge,"A text message with a verification code has been sent to your phone.")):u("",!0),r.value==="code-sent"&&s.value==="email"?(n(),m("p",ye,"A verification code has been sent to your email. ")):u("",!0),r.value==="code-confirmation"?(n(),m("p",he,"Your "+D(s.value)+" needs to be verified click the button below to verify.",1)):u("",!0),r.value==="code-confirmation"&&s.value==="phone number"?(n(),m("p",be,[_e,N(D(Y()),1)])):u("",!0),r.value==="code-confirmation"&&s.value==="email"?(n(),m("p",xe,[we,N(D(G()),1)])):u("",!0)]),_:1}),v(k,null,{default:d(()=>[v(le,{class:"q-px-sm q-pt-sm",onSubmit:e[3]||(e[3]=Z(()=>{},["prevent"]))},{default:d(()=>[r.value==="code-sent"?(n(),V(ee,{key:0,class:"col-xs-12 col-sm-6 q-pb-md",clearable:"",outlined:"",disable:q.value,loading:q.value,modelValue:j(y),"onUpdate:modelValue":e[0]||(e[0]=o=>te(y)?y.value=o:null),type:"text",autocomplete:"one-time-code",inputmode:"numeric",pattern:"[0-9]*",label:"Code",tabindex:"1",maxlength:"6",minlength:"6",name:"codeConfirmation",error:!!j(T),"error-message":"Code does not match!"},{append:d(()=>[N(D($(w.value))+"\xA0 ",1)]),_:1},8,["disable","loading","modelValue","error"])):u("",!0),r.value==="code-confirmation"?(n(),V(ae,{key:1,unelevated:"",size:"lg",color:"primary",class:"full-width text-white",label:"Send Code",tabindex:"1",loading:g.value,onClick:M},null,8,["loading"])):u("",!0),s.value==="phone number"?(n(),m("p",qe,[_("a",{href:"javascript:void(0);",onClick:e[1]||(e[1]=o=>s.value="email")},"Use Email")])):u("",!0),s.value==="email"?(n(),m("p",ke,[_("a",{href:"javascript:void(0);",onClick:e[2]||(e[2]=o=>s.value="phone number")},"Use Phone Number")])):u("",!0),r.value==="code-sent"?(n(),V(k,{key:4,class:"q-py-none row justify-center"},{default:d(()=>[w.value===0?(n(),m("a",{key:0,onClick:M,class:"text-grey-6",href:"javascript:void(0);",tabindex:"2"},"Resend Code")):u("",!0)]),_:1})):u("",!0)]),_:1})]),_:1}),v(k,{class:"text-center q-pa-sm"},{default:d(()=>[_("p",{class:"text-grey-6"},[_("a",{onClick:z,class:"text-grey-6",href:"javascript:void(0);",tabindex:"3"},"Logout")])]),_:1})]),_:1})])]),_:1}))}};var ze=X(Ce,[["__scopeId","data-v-78f78103"]]);export{ze as default};
