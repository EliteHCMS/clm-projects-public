import{Q as s}from"./QBadge.abcb08ea.js";import{Q as c}from"./QRouteTab.9599a2cd.js";import{Q as d}from"./QTabs.663fbc0e.js";import{bN as _,r as b,w as v,A as l,an as r,bi as t,d as u,a7 as o,au as p,ab as f,ao as m}from"./index.df995f5f.js";import{Q as h}from"./quickbase.95274e2f.js";const j={__name:"recruitingTabs",setup(y){const g=h(),{getJobPost:n,getOnlineApplications:i,getSelectedOffice:e}=_(g),a=b(e.value?e.value[8]:null);return v(e,()=>{a.value=e.value?e.value[8]:null}),(Q,x)=>(l(),r(d,{"inline-label":"",align:"justify","indicator-color":"primary"},{default:t(()=>[u(c,{name:"jobPost",label:"Job Post",to:"/recruiting/job-post",exact:""},{default:t(()=>[o(n)(a.value).length>0?(l(),r(s,{key:0,color:"primary",floating:""},{default:t(()=>[p(f(o(n)(a.value).length),1)]),_:1})):m("",!0)]),_:1}),u(c,{name:"onlineApplications",label:"Online Applications",to:"/recruiting/online-applications",exact:""},{default:t(()=>[o(i)(a.value).length>0?(l(),r(s,{key:0,color:"primary",floating:""},{default:t(()=>[p(f(o(i)(a.value).length),1)]),_:1})):m("",!0)]),_:1})]),_:1}))}};export{j as _};
