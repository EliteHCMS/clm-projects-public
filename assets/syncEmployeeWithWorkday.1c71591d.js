import{q as i}from"./quickbase.76c41fac.js";import{dayjs as n}from"./dayjs.1b825f16.js";import{u as f}from"./useQuerySaver.b8f46e72.js";import"./workday.102c955e.js";import{workdayAPI as y}from"./workdayAPI.2451b62c.js";const w=async({clm:e},s)=>{if(!s&&e[576]&&e[576].$d&&n(e[576].$d).isSameOrAfter(n().subtract(n.duration({days:2})),"day")){if(e.workday)return{sync:e.workday,clm:e};{const{data:r}=await i.fetchFromHiringApp({fields:[f({type:"workdaySync",query:"",id:e[578]})]});return{sync:r,clm:e}}}else{let r={sandbox:e[207]};if(e[378]!==""?r.workerId=e[378]:e[188].length===9?r.ssn=e[188]:r=null,r&&!e[509]){const{data:o}=await y.getWorker(r);let t;if(o.length>0?t=o[0]:t=null,t){const a=t,d=[{6:{value:e[3]},8:{value:a.workerName},9:{value:a.nationalId},10:{value:a.userId},11:{value:a.workerId},12:{value:JSON.stringify(a.employmentData)},14:{value:JSON.stringify(a.personalData)},16:{value:JSON.stringify(a.workerReference)},17:{value:`${JSON.stringify(a.managementChainData)}`},18:{value:`${JSON.stringify(a.organizations)}`},19:{value:a.applicantReference?JSON.stringify(a.applicantReference):""}}],{data:u}=await i.upsertRecordsXML({to:"bspfhy84a",data:d,fieldsToReturn:[7],formatObject:7});return{sync:u[0][7],clm:e}}}}},k=async({wd:e,clm:s})=>{const{data:r}=await i.upsertRecordsXML({to:"bp3gb7ng2",data:[{3:{value:s[3]},568:{value:n()}}],fieldsToReturn:[549],formatObject:549});return{clm:r[0][549],sync:e}};export{w as a,k as s};
