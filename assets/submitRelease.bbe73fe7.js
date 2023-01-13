import{u as p,q as u}from"./quickbase.c1f7b402.js";import{dayjs as v}from"./dayjs.b650d6a4.js";import{u as T}from"./dataStore.17a4b24a.js";import{u as L}from"./dataStore.aa435c1a.js";import{k as M}from"./index.0dddbf49.js";const J=async({employee:t,assignment:e,effectiveNow:l,values:a,attachments:s,ratings:c,supervisor:o})=>{const{userData:f,getUserType:j}=p(),n=f;n.access&&delete n.access,n.permissions&&delete n.permissions;const y=[{25:{value:t[3]},28:{value:e[3]},30:{value:a.selection[10]},35:{value:e[142]},36:{value:a.effective},38:{value:JSON.stringify(n)},39:{value:j!=="QuickBase User"},60:{value:c.comments?c.comments:""},72:{value:a.equipment.value}}];if(l){const{ee:d,assign:r}=await S({assignment:e,supervisor:o}),{data:m}=await u.upsertRecordsXML({to:"bp3ga39ut",data:y,fieldsToReturn:[37],formatObject:37},{action:"create",type:"release"}),{release:i}=await g({release:m[0][37][3],employee:m[0][37][25],ratings:c,user:n,supervisor:o});if(s.length>0){const{docs:R}=await O({release:i,attachments:s,user:n});return i[70]=R.map(w=>w[12]),{release:i,employee:d,assignment:r,attachments:R}}else return{release:i,employee:d,assignment:r,attachments:[]}}else{const{data:d}=await u.upsertRecordsXML({to:"bp3ga39ut",data:y,fieldsToReturn:[37],formatObject:37},{action:"create",type:"release"});o&&X({assignment:e,supervisor:o});const{release:r}=await g({release:d[0][37][3],employee:d[0][37][25],ratings:c,user:n,supervisor:o});if(s.length>0){const{docs:m}=await O({release:r,attachments:s,user:n});return r[70]=m.map(i=>i[12]),{release:r,employee:t,assignment:e,attachments:m}}else return{release:r,employee:t,assignment:e,attachments:[]}}},g=async({release:t,employee:e,ratings:l,user:a,supervisor:s})=>{const c={6:{value:l.attendance},8:{value:l.attitude},10:{value:l.capability},12:{value:l.promotable},14:{value:l.comments?l.comments:""},16:{value:e},34:{value:t},36:{value:JSON.stringify(a)}};s&&Object.assign(c,{42:{value:s[18]}});const{data:o}=await u.upsertRecordsXML({to:"bqzkbcxup",data:[c],fieldsToReturn:[35],formatObject:35});return{release:o[0][35]}},O=async({release:t,attachments:e,user:l})=>{const a=[];e.forEach(c=>{Object.assign(c,{8:{value:JSON.stringify(l)},9:{value:t[3]},10:{value:t[25]}}),a.push(c)});const{data:s}=await u.upsertRecordsXML({to:"bsstsai5d",data:a,fieldsToReturn:[12],formatObject:12});return{docs:s}},S=async({assignment:t,supervisor:e,id:l})=>{const{removeData:a}=T(),{removeFromRoster:s}=L(),c={3:{value:l||t[3]},21:{value:"Complete"},22:{value:v()}};e&&Object.assign(c,{133:{value:e[3]}});const{data:o}=await u.upsertRecordsXML({to:"bp3gazpqj",data:[c],fieldsToReturn:[110],formatObject:110});return s({id:o[0][110][74],data:o[0]}),a({type:"assignments",key:o[0][110][74],item:o[0][110],storageKey:M.storageAssignments}),{ee:await b({3:{value:o[0][110][18]},79:{value:19}}),assign:o[0][110]}},b=async t=>{const{data:e}=await u.upsertRecordsXML({to:"bp3gb7ng2",data:[t],fieldsToReturn:[549],formatObject:549});return e[0][549]},X=async({assignment:t,supervisor:e})=>{u.upsertRecordsXML({to:"bp3gazpqj",data:[{3:{value:t[3]},133:{value:e[3]}}],fieldsToReturn:[110],formatObject:110})},N=async({release:t,disp:e})=>{const{userData:l}=p(),a=l;a.access&&delete a.access,a.permissions&&delete a.permissions;const s={3:{value:t[3]},42:{value:e.value==="Terminate"?"Reviewed":"Complete"},43:{value:e.value},73:{value:e.value==="Terminate"?"Pending":"Cancelled"},75:{value:JSON.stringify(a)},77:{value:v()}},c=e.value==="Terminate"?19:15,o=await b({3:{value:t[25]},79:{value:c},16:{value:t[35]}}),{data:f}=await u.upsertRecordsXML({to:"bp3ga39ut",data:[s],fieldsToReturn:[37],formatObject:37},{action:"update",type:"release"});return{release:f[0][37],employee:o}},z=async({release:t,fid:e})=>{const{userData:l}=p(),a=e||37,s=l;s.access&&delete s.access,s.permissions&&delete s.permissions;const c=[{3:{value:t[3]},42:{value:"Complete"},73:{value:"Processed"},76:{value:JSON.stringify(s)},78:{value:v()}}];b({3:{value:t[25]},79:{value:""},122:{value:""}});const{data:o}=await u.upsertRecordsXML({to:"bp3ga39ut",data:c,fieldsToReturn:[a],formatObject:a},{action:"update",type:"release"});return{data:o[0][a]}};export{N as f,S as r,J as s,z as t};
