import{Q as s}from"./QBadge.44381be8.js";import{Q as c}from"./QRouteTab.82105e35.js";import{Q as d}from"./QTabs.a3e7b08b.js";import{bX as _,r as b,w as v,B as l,as as r,bt as t,d as u,aa as o,az as p,ae as f,at as m}from"./index.8838c464.js";import{c as h}from"./app.42c36b1f.js";const j={__name:"recruitingTabs",setup(x){const g=h(),{getJobPost:i,getOnlineApplications:n,getSelectedOffice:e}=_(g),a=b(e.value?e.value[8]:null);return v(e,()=>{a.value=e.value?e.value[8]:null}),(y,Q)=>(l(),r(d,{"inline-label":"",align:"justify","active-class":"text-weight-bolder","indicator-color":"primary"},{default:t(()=>[u(c,{name:"jobPost",label:"Job Post",to:"/recruiting/job-post",exact:""},{default:t(()=>[o(i)(a.value).length>0?(l(),r(s,{key:0,color:"primary",floating:""},{default:t(()=>[p(f(o(i)(a.value).length),1)]),_:1})):m("",!0)]),_:1}),u(c,{name:"onlineApplications",label:"Online Applications",to:"/recruiting/online-applications",exact:""},{default:t(()=>[o(n)(a.value).length>0?(l(),r(s,{key:0,color:"primary",floating:""},{default:t(()=>[p(f(o(n)(a.value).length),1)]),_:1})):m("",!0)]),_:1})]),_:1}))}};export{j as _};
