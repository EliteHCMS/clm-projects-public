var _e=Object.defineProperty,qe=Object.defineProperties;var xe=Object.getOwnPropertyDescriptors;var re=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var ue=(b,l,n)=>l in b?_e(b,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):b[l]=n,h=(b,l)=>{for(var n in l||(l={}))Ne.call(l,n)&&ue(b,n,l[n]);if(re)for(var n of re(l))we.call(l,n)&&ue(b,n,l[n]);return b},H=(b,l)=>qe(b,xe(l));import{Q as $e}from"./QImg.287cfb6a.js";import{_ as se,a4 as X,r as g,c as ie,w as T,A as o,B as w,d as N,bi as q,a7 as e,ao as i,au as te,ab as B,cw as P,bF as ne,bE as de,an as M,cx as ce,b as le,bO as me,D as U,aV as ke,aT as Ce,bM as Ie,bL as Se,G as Ee,bI as Re,cy as De,cz as Me}from"./index.1b5374c8.js";import{Q as ve}from"./QForm.ded31ea3.js";import{Q as Ue}from"./QPage.025a70ae.js";import{u as pe}from"./use-quasar.a24d697c.js";import{u as Z,a as Ve}from"./vee-validate.esm.130b0dad.js";import{u as Pe}from"./i18n.6386200b.js";import{u as fe,q as A,b as Qe}from"./quickbase.2ee72534.js";import{api as he}from"./api.d146f206.js";import{_ as Ae}from"./languageSelector.7ca221c5.js";import{p as je}from"./VueTelInput.0d721dfb.js";import{c as D,a as W}from"./array.24fe3b42.js";import{dayjs as L}from"./dayjs.5d57e85b.js";import{c as Oe}from"./carousel.2f9a9324.js";import"./_commonjsHelpers.a26ce4be.js";import"./index.7dbe61ef.js";import"./localForage.f1f06786.js";import"./QSelect.7256ef6b.js";import"./QChip.de32f227.js";import"./QItemLabel.ee2c7196.js";import"./QMenu.d63f2496.js";import"./position-engine.c9766907.js";import"./selection.971e5b60.js";import"./rtl.cf9bbe47.js";import"./use-panel.bd5ef06e.js";import"./touch.60582172.js";import"./use-fullscreen.61060e22.js";const ge=b=>(ke("data-v-0fccbf6d"),b=b(),Ce(),b),Le={key:0,class:"text-dark"},Te={key:1,class:"text-dark"},Be={key:2,class:"text-dark"},Fe={key:3,class:"text-dark"},Ke={key:4,class:"text-dark"},ze=ge(()=>U("br",null,null,-1)),Ye={key:5,class:"text-dark"},Ge=ge(()=>U("br",null,null,-1)),Je={key:2,class:"text-grey-6 text-right"},He={key:3,class:"text-grey-6 text-right"},Xe={__name:"codeComponent",props:{phoneNumber:String,email:String,type:String,rid:String},emits:["verified"],setup(b,{emit:l}){const n=b,V=pe(),$=fe(),I=X(n,"phoneNumber"),a=X(n,"email"),t=X(n,"type"),r=g("code-confirmation"),x=g(Math.floor(1e5+Math.random()*9e5)),d=g(null),_=g(!1),c=g(!1),m=g(!1),y=g(0),p=X(n,"rid"),{value:R}=Z("codeConfirmation",D().matches(/^[0-9]{6}/g,{excludeEmptyString:!0,message:"Code Not Valid!"}).required().oneOf([x.value],"Code Not Valid!")),oe=ie(()=>R.value===x.value),F=v=>{const u=Math.floor(v/6e4),f=(v%6e4/1e3).toFixed(0);return u+":"+(f<10?"0":"")+f};T(t,v=>{x.value=null,R.value=null,_.value=!1,x.value=null,d.value=null,r.value="code-confirmation"}),T(y,v=>{v===0?(_.value=!0,x.value=null,d.value=null):_.value=!1}),T(R,async v=>{Number(v)===x.value&&(V.notify({position:"top-right",type:"positive",message:"Code Verified!"}),t.value==="phone-number"?ee():t.value==="email"&&K())});const S=async()=>{m.value=!0,r.value==="code-confirmation"?(x.value=Math.floor(1e5+Math.random()*9e5),R.value=null,d.value=L().add(5,"minute").toISOString(),t.value==="phone-number"?(await he.createMessage({contact:I.value,to:I.value,message:`Your Brandsafway Verification Code is: ${x.value}`,messagingServiceSid:"MGd0e31773980318b7cdc5d2043117e27c",send:!0,readBy:[],status:"pending"}),m.value=!1,V.notify({position:"top-right",type:"info",message:"Text message sent!"}),d.value=L().add(1,"minute")):t.value==="email"&&(await j(),m.value=!1,V.notify({position:"top-right",type:"info",message:"Email sent!"}),d.value=L().add(2,"minute")),m.value=!1,k(),r.value="code-sent"):m.value=!1},k=()=>{const v=setInterval(()=>{y.value=L(d.value).valueOf()-L().valueOf(),y.value<=0&&(y.value=0,clearInterval(v))},1e3)},j=async()=>{if(!p.value||p.value==="")return!1;const v=await A.isUserLoggedIn(),u=new Date;x.value||(x.value=Math.floor(1e5+Math.random()*9e5));const f={3:{value:p.value},26:{value:u},87:{value:u},88:{value:x.value},47:{value:!0}};try{return v?await A.updateUserData({fields:f}):await A.upsertRecordsXML({to:"br4pxrbs6",fieldsToReturn:[76],data:[f],formatObject:76})}catch(O){V.notify({position:"top-right",type:"negative",message:O.message||"Error updating Verification!"})}},ee=async()=>{if(c.value=!0,!p.value||p.value==="")return c.value=!1,!1;const v=new Date,u={3:{value:p.value},26:{value:v},50:{value:!0}};try{await A.updateUserData({fields:u}),c.value=!1,l("verified")}catch(f){c.value=!1,V.notify({position:"top-right",type:"negative",message:f.message||"Error updating Verification!"})}},K=async()=>{if(c.value=!0,!p.value||p.value==="")return c.value=!1,!1;const v=new Date,u={3:{value:p.value},26:{value:v},49:{value:!0}};try{await A.updateUserData({fields:u}),c.value=!1,l("verified")}catch(f){c.value=!1,V.notify({position:"top-right",type:"negative",message:f.message||"Error updating Verification!"})}},E=()=>I.value.replace(/(\d{3})(\d{3})(\d{4})/,"******$3"),z=()=>($.userLoggedIn?$.user[34]:a.value||"").replace(/(.{2})(.*)(?=@)/,function(u,f,O){for(let Y=0;Y<O.length;Y++)f+="*";return f});return T(()=>n.phoneNumber,()=>{console.log(n)}),(v,u)=>(o(),w("div",null,[N(P,{class:"text-center auth-description"},{default:q(()=>[r.value==="code-sent"&&e(t)==="phone-number"?(o(),w("p",Le,"A text message with a verification code has been sent to your phone.")):i("",!0),r.value==="code-sent"&&e(t)==="email"?(o(),w("p",Te,"A verification code has been sent to your email. ")):i("",!0),r.value==="code-confirmation"&&e(t)==="phone-number"?(o(),w("p",Be,"Your Phone Number needs to be verified click the button below to verify.")):i("",!0),r.value==="code-confirmation"&&e(t)==="email"?(o(),w("p",Fe,"Your Email needs to be verified click the button below to verify.")):i("",!0),r.value==="code-confirmation"&&e(t)==="phone-number"?(o(),w("p",Ke,[ze,te(B(E()),1)])):i("",!0),r.value==="code-confirmation"&&e(t)==="email"?(o(),w("p",Ye,[Ge,te(B(z()),1)])):i("",!0)]),_:1}),N(P,null,{default:q(()=>[N(ve,{class:"q-px-sm q-pt-sm",onSubmit:u[3]||(u[3]=ne(()=>{},["prevent"])),onKeyup:de(S,["enter"])},{default:q(()=>[r.value==="code-sent"?(o(),M(ce,{key:0,class:"col-xs-12 col-sm-6 q-pb-md",clearable:!c.value,outlined:"",disable:_.value,loading:c.value,modelValue:e(R),"onUpdate:modelValue":u[0]||(u[0]=f=>le(R)?R.value=f:null),type:"text",autocomplete:"one-time-code",inputmode:"numeric",pattern:"[0-9]*",label:"Code",tabindex:"1",maxlength:"6",minlength:"6",name:"codeConfirmation",error:!!e(oe),"error-message":"Code does not match!"},{append:q(()=>[te(B(F(y.value))+"\xA0 ",1)]),_:1},8,["clearable","disable","loading","modelValue","error"])):i("",!0),r.value==="code-confirmation"?(o(),M(me,{key:1,unelevated:"",size:"lg",color:"primary",class:"full-width text-white",label:"Send Code",tabindex:"1",loading:m.value,onClick:S},null,8,["loading"])):i("",!0),e(t)==="phone-number"&&e(a)!==""?(o(),w("p",Je,[U("a",{href:"javascript:void(0);",onClick:u[1]||(u[1]=f=>t.value="email")},"Use Email")])):i("",!0),e(t)==="email"&&e(I)!==""?(o(),w("p",He,[U("a",{href:"javascript:void(0);",onClick:u[2]||(u[2]=f=>t.value="phone-number")},"Use Phone Number")])):i("",!0),r.value==="code-sent"?(o(),M(P,{key:4,class:"q-py-none row justify-center"},{default:q(()=>[y.value===0?(o(),w("a",{key:0,onClick:S,class:"text-grey-6",href:"javascript:void(0);",tabindex:"2"},"Resend Code")):i("",!0)]),_:1})):i("",!0)]),_:1},8,["onKeyup"])]),_:1})]))}};var We=se(Xe,[["__scopeId","data-v-0fccbf6d"]]);const Ze={key:0,class:"col-md-7 col-lg-8 col-lx-8"},ea={class:"col-xs-12 col-sm-12 col-md-5 col-lg-4 col-lx-4 row justify-center items-center"},aa={class:"text-dark"},ta={key:0,class:"row q-col-gutter-xs"},la={key:1,class:"row q-col-gutter-xs"},oa={class:"text-grey-6"},ra={class:"row justify-center"},ua={__name:"updateInfo",setup(b){const l=pe(),n=fe(),{currentUserType:V}=Qe(),$=Ie(),I=Se(),{t:a}=Pe(),t=g(!1),r=g("update-information"),x=g(10),d=g(!1),_=g(!1),c=g(null),m=g(null),y=g(!1),p=g(!1),R=ie(()=>{const s=new RegExp("^[0-9]{"+x.value+"}","g");return _.value&&d.value?W({email:D().email(`${a("validEmailIsRequired")}`).required().label(`${a("email")}`),phoneNumber:D().matches(s,{excludeEmptyString:!0,message:`${a("validPhoneIsRequired")}`}).required().label(`${a("phoneNumber")}`)}):_.value&&!d.value?W({email:D().email(`${a("validEmailIsRequired")}`).required().label(`${a("email")}`),phoneNumber:D().matches(s,{excludeEmptyString:!0,message:`${a("validPhoneIsRequired")}`}).label(`${a("phoneNumber")}`)}):!_.value&&d.value?W({email:D().email(`${a("validEmailIsRequired")}`).label(`${a("email")}`),phoneNumber:D().matches(s,{excludeEmptyString:!0,message:`${a("validPhoneIsRequired")}`}).required().label(`${a("phoneNumber")}`)}):W({email:D().email(`${a("validEmailIsRequired")}`).required().label(`${a("email")}`),phoneNumber:D().matches(s,{excludeEmptyString:!0,message:`${a("validPhoneIsRequired")}`}).required().label(`${a("phoneNumber")}`)})}),{errors:oe,meta:F}=Ve({validationSchema:R,initialValues:{phoneNumber:"",email:""}}),{value:S}=Z("userRID"),{value:k,errorMessage:j,setErrors:ee,meta:K}=Z("phoneNumber"),{value:E,errorMessage:z,setErrors:v,meta:u}=Z("email");g(!0),$.query.rid?(S.value=$.query.rid,$.query.emailRequired&&(_.value=!0),$.query.phoneNumberRequired&&(d.value=!0),I.replace({query:{}})):I.push("/"),T(()=>$.query,()=>{$.query.rid&&(S.value=$.query.rid,$.query.emailRequired&&(_.value=!0),$.query.phoneNumberRequired&&(d.value=!0),I.replace({query:{}}))});const f=s=>{x.value=s},O=s=>{c.value=s},Y=()=>{n.logout().then(()=>{I.replace({name:"login"})})},ae=async()=>{if(t.value=!0,!F.value.valid)return t.value=!1,!1;if(!S.value||S.value==="")return t.value=!0,!1;const s=new Date;let C={phoneNumber:"N/A",name:"United States",iso2:"US",dialCode:"1",iso2sm:"us",callerName:null,countryCode:"US",nationalFormat:"N/A",carrier:null,validPhoneNumber:!1};if(d.value){if(m.value=await he.twilioLookup({phoneNumber:k.value}),m.value&&(k.e164=m.value.phoneNumber,delete m.value.url,delete m.value.price,delete m.value.phoneNumber,delete m.value.addOns),m.value&&m.value.validPhoneNumber===!1)return ee(`${a("validPhoneIsRequired")}`),l.notify({type:"negative",message:`${a("validPhoneIsRequired")}`,timeout:7e3,position:l.screen.lt.md?"top":"top-right"}),t.value=!1,null;C=Object.assign({phoneNumber:k.value},c.value,m.value||{})}if(_.value&&E.value===""&&m.value&&m.value.validPhoneNumber===!1)return v(`${a("validEmailIsRequired")}`),l.notify({type:"negative",message:`${a("validEmailIsRequired")}`,timeout:7e3,position:l.screen.lt.md?"top":"top-right"}),t.value=!1,null;const Q=H(h(h(h(h(h({},d.value&&{8:{value:`+${c.value?c.value.dialCode:"1"}${k.value}`}}),d.value&&{9:{value:JSON.stringify(C)}}),d.value&&{111:{value:!1}}),_.value&&{6:{value:E.value}}),_.value&&{112:{value:!1}}),{26:{value:s}});try{await A.updateUserData({fields:Q}),t.value=!1,I.push({path:"/",query:h(h({rid:S.value},d.value&&{phoneNumber:`+${c.value?c.value.dialCode:"1"}${k.value}`}),_.value&&{email:E.value})})}catch(G){p.value=!1,y.value=!1,G.lineErrors&&G.lineErrors.forEach(J=>{J.includes('is not unique for unique formula field with ID "27"')&&(p.value=!0),J.includes('The field named "uniqueEmail" with field id 27 requires a unique value.')&&(p.value=!0),J.includes('is not unique for unique formula field with ID "28"')&&(y.value=!0),J.includes('The field named "uniquePhoneNumber" with field id 28 requires a unique value.')&&(y.value=!0)}),y.value||p.value?r.value="code-confirmation":l.notify({position:"top-right",type:"negative",message:G.message||"Error updating Information!"})}},be=async()=>{try{const s=new Date,C={phoneNumber:"N/A",name:"United States",iso2:"US",dialCode:"1",iso2sm:"us",callerName:null,countryCode:"US",nationalFormat:"N/A",carrier:null,validPhoneNumber:!1},Q=[h(h(h(H(h(h(h(h({},y.value&&{8:{value:""}}),y.value&&{9:{value:JSON.stringify(C)}}),y.value&&{50:{value:!1}}),y.value&&{111:{value:!0}}),{26:{value:s}}),p.value&&{6:{value:""}}),p.value&&{49:{value:!1}}),p.value&&{112:{value:!0}})];return await A.findAndUpdateUser(H(h(h({},y.value&&{phoneNumber:`+${c.value?c.value.dialCode:"1"}${k.value}`}),p.value&&{email:E.value}),{userType:V,fields:Q}))}catch(s){console.log(s)}},ye=async()=>{r.value="update-information",await be(),await ae()};return(s,C)=>(o(),M(Ue,{class:"window-height window-width row"},{default:q(()=>[e(l).screen.lt.md?i("",!0):(o(),w("div",Ze,[N(Oe)])),U("div",ea,[N(Me,{class:"auth-card",flat:""},{default:q(()=>[N(P,{style:{"padding-left":"30px","padding-right":"30px"}},{default:q(()=>[N($e,{src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo.svg",fit:"scale-down",class:"auth-logo full-width"})]),_:1}),r.value==="update-information"?(o(),M(P,{key:0,class:"text-center auth-description"},{default:q(()=>[U("p",aa,B(s.$t("pleaseUpdateInformation")),1)]),_:1})):i("",!0),r.value==="update-information"?(o(),M(P,{key:1},{default:q(()=>[N(ve,{class:"q-px-sm q-pt-sm",onSubmit:C[2]||(C[2]=ne(()=>{},["prevent"])),onKeyup:de(ae,["enter"])},{default:q(()=>[d.value?(o(),w("div",ta,[N(je,{name:"phoneNumber",class:Ee(["col-xs-12 col-sm-12",{"q-pb-lg":e(j)&&e(K).validated}]),outlined:"",modelValue:e(k),"onUpdate:modelValue":C[0]||(C[0]=Q=>le(k)?k.value=Q:null),label:s.$t("phoneNumber"),tabindex:"3",onMaxLengthChanged:f,error:!!(e(j)&&e(K).validated),"error-message":e(j),onCountryChanged:O},null,8,["class","modelValue","label","error","error-message"])])):i("",!0),_.value?(o(),w("div",la,[N(ce,{class:"col-xs-12 col-sm-12 q-pb-lg",clearable:"",outlined:"",modelValue:e(E),"onUpdate:modelValue":C[1]||(C[1]=Q=>le(E)?E.value=Q:null),type:"email",autocomplete:"email",label:s.$t("email"),tabindex:"4",name:"email",error:!!(e(z)&&e(u).validated),"error-message":e(z)},{prepend:q(()=>[N(Re,{name:"email"})]),_:1},8,["modelValue","label","error","error-message"])])):i("",!0)]),_:1},8,["onKeyup"])]),_:1})):i("",!0),r.value==="code-confirmation"?(o(),M(We,{key:2,onVerified:ye,phoneNumber:e(k),email:e(E),type:d.value?"phone-number":"email",rid:e(S)},null,8,["phoneNumber","email","type","rid"])):i("",!0),r.value==="update-information"?(o(),M(De,{key:3,class:"q-px-lg"},{default:q(()=>[r.value==="update-information"?(o(),M(me,{key:0,ref:"confirm",loading:t.value,disable:!e(F).valid,unelevated:"",size:"lg",color:"primary",class:"full-width text-white",label:s.$t("confirm"),tabindex:"3",onClick:ae},null,8,["loading","disable","label"])):i("",!0)]),_:1})):i("",!0),N(P,{class:"text-center q-pa-sm"},{default:q(()=>[U("p",oa,[U("a",{onClick:Y,class:"text-grey-6",href:"javascript:void(0);",tabindex:"4"},B(s.$t("logout")),1)])]),_:1}),N(P,{class:"q-pl-lg q-pa-sm"},{default:q(()=>[U("div",ra,[N(Ae,{dense:"",borderless:""})])]),_:1})]),_:1})])]),_:1}))}};var Va=se(ua,[["__scopeId","data-v-711f1fb5"]]);export{Va as default};
