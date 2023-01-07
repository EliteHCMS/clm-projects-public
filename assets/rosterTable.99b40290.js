import{Q as h,a as T}from"./QTable.6a0684f8.js";import{Q as k}from"./QTr.9ef1cc28.js";import{l as q,bL as B,c as E,_ as I,y as L,A as d,B as b,d as r,bi as l,F as D,aY as x,an as C,au as Y,ab as u,bI as Q,D as y,bO as A}from"./index.8bd7d03d.js";import{Q as N}from"./QTd.f4f753a0.js";import{Q as M}from"./QInnerLoading.fe8d9432.js";import{u as O}from"./use-quasar.4af32af0.js";import{e as R}from"./export-file.eb604dd4.js";import{dayjs as g}from"./dayjs.cdcb4373.js";const j=q({props:{rows:Array},setup(o,p){const c=O(),$=B(),{capitalize:m}=L,f=E(()=>c.screen.gt.sm?[{name:1,label:"Name",align:"left",field:e=>e.employee[22],format:(e,s)=>`${t(s.employee)}`,sortable:!0,sortOrder:"ad"},{name:2,label:"Workday ID",align:"left",field:e=>e.employee[378],format:e=>`${e}`,sortable:!0,sortOrder:"ad"},{name:3,label:"Payroll ID",align:"left",field:e=>e.employee[213],format:e=>e===""?"not available":e,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e[20],format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:5,label:"Job #",align:"left",field:e=>e[105],format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:6,label:"Arrival Date",align:"left",field:e=>e[63].$d,format:e=>`${g(e).format("MM/DD/YYYY")}`,sortable:!0}]:[{name:1,label:"Name",align:"left",field:e=>e.employee[22],format:(e,s)=>`${t(s.employee)}`,sortable:!0,sortOrder:"ad"},{name:2,label:"Workday ID",align:"left",field:e=>e.employee[378],format:e=>`${e}`,sortable:!0,sortOrder:"ad"},{name:3,label:"Payroll ID",align:"left",field:e=>e.employee[213],format:e=>e===""?"not available":e,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e[20],format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:5,label:"Job #",align:"left",field:e=>e[105],format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:6,label:"Arrival Date",align:"left",field:e=>e[63].$d,format:e=>`${g(e).format("MM/DD/YYYY")}`,sortable:!0}]),t=e=>{const s=e[20]!==""?m(e[20].toLowerCase().trim()):"",n=e[22]!==""?m(e[22].toLowerCase().trim()):"",a=e[21]!==""?` ${m(e[21].toLowerCase().trim())}`:"",_=e[23]!==""?` ${m(e[23])}`:"";return`${n}${_}, ${s}${a}`};function i(e){$.push({name:"ee-summary",params:{id:e[18]}})}function w(e,s,n){let a=s!==void 0?s(e,n):e;return a=a==null?"":String(a),a=a.split('"').join('""'),`"${a}"`}function v(){const e=[f.value.map(n=>w(n.label))].concat(o.rows.map(n=>f.value.map(a=>w(typeof a.field=="function"?a.field(n):n[a.field===void 0?a.name:a.field],a.format,n)).join(","))).join(`\r
`);R(`${g().format("MM.DD.YYYY")} Employees-Export.csv`,e,"text/csv")!==!0&&c.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}return{columns:f,props:o,exportAllEmployees:v,viewEmployee:i}}}),z={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"},P={class:"text-dark text-caption text-italic"};function V(o,p,c,$,m,f){return d(),b("div",null,[r(T,{title:"Active Roster","title-class":"text-h5 text-primary",columns:o.columns,rows:o.rows,"row-key":t=>t[3],class:"q-pa-sm",pagination:{rowsPerPage:25},"table-header-class":"bg-dark text-white","no-data-label":"There are no employees in the roster",dense:""},{header:l(t=>[r(k,{class:"bg-dark text-white",props:t},{default:l(()=>[r(h,{"auto-width":""}),(d(!0),b(D,null,x(t.cols,i=>(d(),C(h,{key:i.name,props:t},{default:l(()=>[Y(u(i.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:l(t=>[r(k,{props:t},{default:l(()=>[r(N,{"auto-width":""},{default:l(()=>[r(Q,{class:"cursor-pointer",size:o.$q.screen.gt.sm?"sm":"xs",color:"info",round:"",dense:"",onClick:i=>o.viewEmployee(t.row),name:t.expand?"visibility_off":"visibility"},null,8,["size","onClick","name"])]),_:2},1024),(d(!0),b(D,null,x(t.cols,i=>(d(),C(N,{key:i.name,props:t},{default:l(()=>[Y(u(i.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"no-data":l(({message:t})=>[y("div",z,[r(Q,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),y("span",null,u(t),1)])]),"top-right":l(()=>[y("div",P,"(Total: "+u(o.props.rows.length)+" employees)",1),r(A,{color:"secondary",flat:"","icon-right":"refresh",label:"Refresh",onClick:p[0]||(p[0]=t=>o.$emit("refreshData"))}),r(A,{dense:o.$q.screen.lt.md,class:"q-ml-sm",color:"primary",label:"Download",onClick:o.exportAllEmployees,disable:o.props.rows.length<1},null,8,["dense","onClick","disable"])]),loading:l(()=>[r(M,{showing:"",color:"primary"})]),_:1},8,["columns","rows","row-key"])])}var X=I(j,[["render",V]]);export{X as R};
