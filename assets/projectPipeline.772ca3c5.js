import{k as Y,c as y,_ as q,A as C,an as N,bi as d,d as l,cw as x,D as a,au as v,ab as g,bK as M,cz as S,r as k,y as B,aZ as Q,B as T,bI as j,bO as O,G as z}from"./index.df995f5f.js";import{Q as L}from"./QInnerLoading.bdf3df47.js";import{a as V}from"./QTable.ec6bcda4.js";import{u as w}from"./use-quasar.e1d67d94.js";import{e as J}from"./export-file.eb604dd4.js";import{dayjs as u}from"./dayjs.2c96dcd3.js";const E=Y({name:"Pipeline Summary",components:{},props:{pipeline:Array},setup(t,b){const i=y(()=>t.pipeline.filter(n=>n.type==="In Process"||n.type==="Dispatch")),r=y(()=>t.pipeline.filter(n=>n.type==="Deployed"&&n[20]==="In Process")),f=y(()=>i.value.length+r.value.length);return{props:t,inProcess:i,deployed:r,total:f}}}),G=a("div",{class:"text-body1 text-primary"},"Summary",-1),K={class:"text-body2"},Z=a("span",{class:"q-mr-md"},"In Process:",-1),F=a("span",null,null,-1),H={class:"text-body2"},R=a("span",{class:"q-mr-md"},"Deployed:",-1),U={class:"text-body2"},W=a("span",{class:"q-mr-md"},"Total:",-1);function X(t,b,i,r,f,p){return C(),N(S,null,{default:d(()=>[l(x,{class:"q-pb-xs"},{default:d(()=>[G]),_:1}),l(x,{class:"text-right q-pt-xs"},{default:d(()=>[a("div",K,[Z,v(g(t.inProcess.length),1),F]),a("div",H,[R,a("span",null,g(t.deployed.length),1)]),l(M,{color:"primary",class:"q-my-sm"}),a("div",U,[W,a("span",null,g(t.total),1)])]),_:1})]),_:1})}var ee=q(E,[["render",X]]);const te=Y({name:"Pipeline Table",components:{PipelineSummary:ee},props:{rows:Array,selected:Array},setup(t,b){const i=w(),{capitalize:r}=B,f=k(!1),p=y(()=>i.screen.gt.sm?[{name:1,label:"Name",align:"left",field:e=>n(e.employee),format:e=>`${e}`,sortable:!0},{name:7,label:"Status",align:"left",field:e=>c(e),format:e=>`${e}`,sortable:!0,sortOrder:"ad"},{name:2,label:"Offer Date",align:"left",field:e=>$(e),format:e=>`${u(e).format("MM/DD/YYYY")}`,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>D(e),format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:5,label:"Job #",align:"left",field:e=>h(e),format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:6,label:"Arrival Date",align:"left",field:e=>_(e),format:e=>`${e?u(e).format("MM/DD/YYYY"):"TBD"}`,sortable:!0}]:[{name:1,label:"Name",align:"left",field:e=>n(e.employee),format:e=>`${e}`,sortable:!0},{name:7,label:"Status",align:"left",field:e=>c(e),format:e=>`${e}`,sortable:!0,sortOrder:"ad"},{name:2,label:"Offer Date",align:"left",field:e=>$(e),format:e=>`${u(e).format("MM/DD/YYYY")}`,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>D(e),format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:5,label:"Job #",align:"left",field:e=>h(e),format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:6,label:"Arrival Date",align:"left",field:e=>_(e),format:e=>`${e?u(e).format("MM/DD/YYYY"):"TBD"}`,sortable:!0}]),n=e=>{const m=e[20]!==""?r(e[20].toLowerCase().trim()):"",o=e[22]!==""?r(e[22].toLowerCase().trim()):"",s=e[21]!==""?` ${r(e[21].toLowerCase().trim())}`:"",A=e[23]!==""?` ${r(e[23])}`:"";return`${o}${A}, ${m}${s}`};function c(e){if(e.type==="In Process")return"In Process";if(e.type==="Dispatch")return"In Process";if(e.type==="Deployed")return"Deployed"}function $(e){if(e.type==="In Process")return e[197].$d;if(e.type==="Dispatch")return e[165].$d;if(e.type==="Deployed")return e[144].$d}function D(e){if(e.type==="In Process")return e[106];if(e.type==="Dispatch")return e[45];if(e.type==="Deployed")return e[45]}function h(e){if(e.type==="In Process")return e[44];if(e.type==="Dispatch")return e[63];if(e.type==="Deployed")return e[85]}function _(e){if(e.type==="In Process")return null;if(e.type==="Dispatch")return null;if(e.type==="Deployed")return e[33].$d}function I(){const e=[p.value.map(o=>P(o.label))].concat(t.rows.value.map(o=>p.value.map(s=>P(typeof s.field=="function"?s.field(o):o[s.field===void 0?s.name:s.field],s.format,o)).join(","))).join(`\r
`);J(`${u().format("MM.DD.YYYY")} Project-Pipeline-Export.csv`,e,"text/csv")!==!0&&i.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}function P(e,m,o){let s=m!==void 0?m(e,o):e;return s=s==null?"":String(s),s=s.split('"').join('""'),`"${s}"`}return{columns:p,props:t,loading:f,exportPipeline:I}}}),se={class:"q-px-sm"},ae={class:"row"},ne={class:"col-12 col-md-10 q-px-xs"},re={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"};function oe(t,b,i,r,f,p){const n=Q("pipeline-summary");return C(),T("div",se,[a("div",ae,[a("div",ne,[l(V,{dense:"",columns:t.columns,rows:t.props.rows,"row-key":c=>c[3],class:"q-pa-sm",pagination:{rowsPerPage:t.$q.screen.gt.sm?25:100},separator:"vertical","table-header-class":"bg-dark text-white","no-data-label":"There is no one in the pipeline",loading:t.loading,grid:t.$q.screen.lt.md},{"no-data":d(({message:c})=>[a("div",re,[l(j,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),a("span",null,g(c),1)])]),"top-right":d(()=>[l(O,{dense:t.$q.screen.lt.md,color:"primary",label:"Download",onClick:t.exportPipeline,disable:t.props.rows.length<1},null,8,["dense","onClick","disable"])]),loading:d(()=>[l(L,{showing:"",color:"primary"})]),_:1},8,["columns","rows","row-key","pagination","loading","grid"])]),a("div",{class:z(t.$q.screen.lt.md?"col-12 q-px-xs q-mt-sm order-first":"col-2 q-px-xs")},[l(n,{pipeline:t.props.rows},null,8,["pipeline"])],2)])])}var me=q(te,[["render",oe]]);export{me as P};
