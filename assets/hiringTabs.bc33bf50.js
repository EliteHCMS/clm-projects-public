import{Q as s}from"./QBadge.abcb08ea.js";import{Q as r}from"./QRouteTab.9599a2cd.js";import{Q as _}from"./QTabs.663fbc0e.js";import{bN as y,r as b,w as P,A as o,an as n,bi as t,d as i,a7 as a,au as u,ab as c,ao as g}from"./index.df995f5f.js";import{Q as x}from"./quickbase.95274e2f.js";const B={__name:"hiringTabs",setup(I){const v=x(),{getProfiles:f,getInProcess:d,getPending:m,getScheduledInterviews:p,getInProcessInterviews:h,getSelectedOffice:l}=y(v),e=b(l.value?l.value[8]:null);return P(l,()=>{e.value=l.value?l.value[8]:null}),(w,Q)=>(o(),n(_,{"inline-label":"",align:"justify","indicator-color":"primary"},{default:t(()=>[i(r,{name:"Profiles",label:"Profiles",to:"/hiring/profiles",exact:""},{default:t(()=>[a(f)(e.value).length>0?(o(),n(s,{key:0,color:"primary",floating:""},{default:t(()=>[u(c(a(f)(e.value).length),1)]),_:1})):g("",!0)]),_:1}),i(r,{name:"Interviews",label:"Interviews",to:"/hiring/interviews",exact:""},{default:t(()=>[a(p)(e.value).length+a(h)(e.value).length>0?(o(),n(s,{key:0,color:"primary",floating:""},{default:t(()=>[u(c(a(p)(e.value).length+a(h)(e.value).length),1)]),_:1})):g("",!0)]),_:1}),i(r,{name:"In Process",label:"In Process",to:"/hiring/in-process",exact:""},{default:t(()=>[a(d)(e.value).length>0?(o(),n(s,{key:0,color:"primary",floating:""},{default:t(()=>[u(c(a(d)(e.value).length),1)]),_:1})):g("",!0)]),_:1}),i(r,{name:"Pending",label:"Pending",to:"/hiring/pending",exact:""},{default:t(()=>[a(m)(e.value).length>0?(o(),n(s,{key:0,color:"primary",floating:""},{default:t(()=>[u(c(a(m)(e.value).length),1)]),_:1})):g("",!0)]),_:1}),i(r,{name:"Deployed",label:"Deployed",to:"/hiring/deployed",exact:""})]),_:1}))}};export{B as _};
