import{Q as ce,a as fe,b as me}from"./QTabPanels.1a2b5b1e.js";import{Q as be}from"./QTabs.a3e7b08b.js";import{l as X,r as j,c as P,_ as z,B as n,C as Q,E as p,d as o,bt as l,cV as Y,cW as F,ae as E,bY as J,at as k,as as C,cX as se,bU as pe,cY as I,bQ as ae,cB as te,z as ve,bW as ie,b7 as W,F as G,b6 as H,az as B}from"./index.8838c464.js";import{Q as we}from"./QPage.49220ad5.js";import{u as U}from"./use-quasar.ed4be5d9.js";import{q as S}from"./app.42c36b1f.js";import"./dayjs.106d80ab.js";import{b as x,a as ee}from"./useQuerySaver.d29ff9ee.js";import{u as de}from"./dataStore.a53dbdfc.js";import{Q as ye}from"./QInnerLoading.ca28e90a.js";import{a as Z,Q as ge}from"./QTable.2b553278.js";import{Q as ne}from"./QTr.1a2ec5e9.js";import{Q as _}from"./QTd.1bc00af2.js";import{a as K}from"./QSelect.78b00ca7.js";import{Q as oe}from"./QForm.fc17450c.js";import{a as le,u as L}from"./vee-validate.esm.ac2c348d.js";import{a as O,e as Ce,c as he}from"./array.59f93f43.js";import"./use-panel.9c83e7d4.js";import"./touch.3df10340.js";import"./selection.26380b58.js";import"./QResizeObserver.9199488f.js";import"./rtl.b51694b1.js";import"./_commonjsHelpers.a26ce4be.js";import"./localForage.ca6e9d39.js";import"./index.04bc0a32.js";import"./i18n.c69e89dd.js";import"./QList.43880dff.js";import"./QMarkupTable.8c4a6d35.js";import"./use-fullscreen.abb80350.js";import"./QChip.5ba75959.js";import"./QMenu.b8edc490.js";import"./position-engine.cba8bd09.js";const je=X({props:{job:Object,craft:Object},setup(e,{emit:a}){const s=U(),{capitalize:u}=ve,c=j(!1),d=j(""),r=j(null),i=j([]),t=j([]),f=b=>{const $=b.split(" ");let N="";return $.forEach((M,ue)=>{N+=ue>0?` ${u(M.toLowerCase())}`:u(M.toLowerCase())}),N},q=P(()=>O({alias:O().required().label("Custom Job Title"),fixedRate:Ce().moreThan(7.25,"Fixed rate must be greater than minimum wage.").lessThan(1e3).label("Fixed Rate").nullable().transform(b=>b||null)})),{meta:R,errors:A,handleSubmit:m,handleReset:w}=le({validationSchema:q,initialValues:{fixedRate:e.job.fixedRate>0?e.job.fixedRate:null}}),{value:y}=L("alias"),{value:v}=L("fixedRate"),h=m(async b=>{s.loading.show();const $={3:{value:e.job[3]}};y.value!=={3:e.job[9],7:e.job[18]}&&Object.assign($,{9:{value:b.alias[3]}}),v.value&&v.value!==e.job.fixedRate&&Object.assign($,{155:{value:b.fixedRate}}),b.fixedRate===""&&Object.assign($,{155:{value:null}});try{const{data:N}=await S.upsertRecordsXML({to:"bpzpx5m7x",data:[$],fieldsToReturn:[153],formatObject:153});N.length>0&&(w(),s.loading.hide(),a("editJobComplete",{craft:N[0][153]}))}catch{s.notify({type:"negative",message:"Something went wrong"})}}),g=async()=>{const b=t.value.find(N=>N[7].toLowerCase()===d.value.toLowerCase());await he().required().isValid(d.value)?b?(y.value=b,T(),r.value="Custom Job Title already exists!"):(r.value=null,V(d.value)):r.value="Custom Job Title is required!"},V=async b=>{try{const{data:$}=await S.upsertRecordsXML({to:"bpzpi5rjh",data:[{6:{value:e.job[13]},7:{value:f(b)},11:{value:"No"}}],fieldsToReturn:[25],formatObject:25});t.value.push($[0][25]),i.value=t.value,y.value=$[0][25],T()}catch{s.dialog({title:"Alert",message:"Something went wrong"}).onDismiss(()=>{T()})}},T=()=>{c.value=!1,d.value="",r.value=null},D=(b,$)=>{if(!b||b===""){$(()=>{i.value=t.value});return}$(()=>{const N=b.toLowerCase();i.value=t.value.filter(M=>M[7].toLowerCase().indexOf(N)>-1)})};return(async()=>{const{data:b}=await S.fetchFromStructureApp({fields:[x({type:"jobAliases",query:`{'6'.EX.'${e.job[13]}'}AND{'15'.XEX.'Yes'}`})]});t.value=b,i.value=t.value,y.value={3:e.job[9],7:e.job[18]}})(),{formMeta:R,formErrors:A,submit:h,alias:y,fixedRate:v,addNew:c,closeAddNew:T,newCategory:d,newCatError:r,filterOptions:D,validateNewCategory:g,options:i,rawOptions:t}}}),$e={class:"text-body1 text-white"},Ae={class:"text-caption"},Je={key:0,class:"text-center bg-info"},Se={class:"text-center bg-info"},Ve={class:"text-caption"},ke={class:"text-caption"};function Ee(e,a,s,u,c,d){return n(),Q("div",null,[p("div",null,[o(oe,{onSubmit:ae(e.submit,["prevent"])},{default:l(()=>[o(Y,{style:{width:"400px"}},{default:l(()=>[o(F,{class:"bg-dark"},{default:l(()=>[p("div",$e,"Edit "+E(e.job[21])+" "+E(e.job[18]),1)]),_:1}),o(F,null,{default:l(()=>[o(K,{class:"q-mb-sm",dense:"",label:"Select Custom Job Title (Alias)","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.alias,"onUpdate:modelValue":a[2]||(a[2]=r=>e.alias=r),options:e.options,"option-label":"7","display-value":`${e.alias?e.alias[7]:""}`,"bottom-slots":"",error:!!e.formErrors.alias},{error:l(()=>[p("div",Ae,E(e.formErrors.alias),1)]),"after-options":l(()=>[e.options.length>0?(n(),Q("div",Je,[o(J,{flat:"",color:"white",label:"Add a New Custom Job Title",onClick:a[0]||(a[0]=r=>e.addNew=!0)})])):k("",!0)]),"no-option":l(()=>[p("div",Se,[o(J,{flat:"",color:"white",label:"Add a New Custom Job Title",onClick:a[1]||(a[1]=r=>e.addNew=!0)})])]),_:1},8,["modelValue","options","display-value","error"]),e.$can("manage","rates")?(n(),C(se,{key:0,step:"any",prefix:"$",type:"number",dense:"",label:"Fixed Rate",modelValue:e.fixedRate,"onUpdate:modelValue":a[3]||(a[3]=r=>e.fixedRate=r),error:!!e.formErrors.fixedRate,"bottom-slots":""},{error:l(()=>[p("div",Ve,E(e.formErrors.fixedRate),1)]),_:1},8,["modelValue","error"])):k("",!0)]),_:1}),o(pe),o(I,{class:"bg-accent",align:"right"},{default:l(()=>[o(J,{size:e.$q.screen.lt.md?"sm":"",color:"secondary",label:"Cancel",onClick:a[4]||(a[4]=r=>e.$emit("closeEditJob"))},null,8,["size"]),o(J,{type:"submit",size:e.$q.screen.lt.md?"sm":"",color:"primary",label:"Save"},null,8,["size"])]),_:1})]),_:1})]),_:1},8,["onSubmit"]),o(te,{modelValue:e.addNew,"onUpdate:modelValue":a[6]||(a[6]=r=>e.addNew=r)},{default:l(()=>[o(Y,null,{default:l(()=>[o(F,null,{default:l(()=>[o(se,{style:{width:"250px"},dense:"",label:"Custom Job Title",modelValue:e.newCategory,"onUpdate:modelValue":a[5]||(a[5]=r=>e.newCategory=r),error:!!e.newCatError,"bottom-slots":""},{error:l(()=>[p("div",ke,E(e.newCatError),1)]),_:1},8,["modelValue","error"])]),_:1}),o(I,{align:"right"},{default:l(()=>[o(J,{color:"secondary",label:"Cancel",onClick:e.closeAddNew},null,8,["onClick"]),o(J,{color:"primary",label:"Submit",type:"submit",onClick:e.validateNewCategory},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])])}var qe=z(je,[["render",Ee]]);const Re=X({props:{craft:Object},setup(e,a){const s=U(),u=O({job:O().required("Job is required."),alias:O().required("Alias is required.").nullable()}),{meta:c,errors:d,handleSubmit:r,handleReset:i}=le({validationSchema:u}),{value:t}=L("job"),{value:f}=L("alias"),q=r(async m=>{try{const{data:w}=await S.upsertRecordsXML({to:"bpzpx5m7x",data:[{9:{value:m.alias[3]},13:{value:m.job[3]},20:{value:e.craft[3]}}],fieldsToReturn:[153],formatObject:153});w.length>0&&(a.emit("newJobAdded",{craft:w[0][153]}),i())}catch{s.notify({type:"negative",message:"Something went wrong"})}});async function R(m,w){s.dialog({title:"Confirm",message:`Confirm you want to add "${m}" as a new alias.`,cancel:!0,persistent:!0}).onOk(async()=>{try{const{data:y}=await S.upsertRecordsXML({to:"bpzpi5rjh",data:[{6:{value:t.value[3]},7:{value:m},11:{value:"No"}}],fieldsToReturn:[25],formatObject:25});y.length>0&&(f.value=y[0][25],w(y[0][25]))}catch{s.notify({type:"negative",message:"Something went wrong"})}}).onCancel(()=>{w()})}function A(){a.emit("cancelAddJob"),i()}return{formErrors:d,formMeta:c,submitJob:q,submitAlias:R,cancelAddJob:A,job:t,alias:f,props:e}}}),Ne={class:"row justify-between"},Qe={class:"col-5"},Te={class:"text-caption"},Pe={class:"col-6"},Oe={class:"text-caption"};function De(e,a,s,u,c,d){return n(),Q("div",null,[o(oe,{onSubmit:ae(e.submitJob,["prevent"])},{default:l(()=>[o(Y,{flat:""},{default:l(()=>[o(F,null,{default:l(()=>[p("div",Ne,[p("div",Qe,[o(K,{class:"q-mb-sm",dense:"",label:"Select Default Job","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.job,"onUpdate:modelValue":a[0]||(a[0]=r=>e.job=r),options:e.props.craft.options.jobs,"option-label":"9","display-value":`${e.job?e.job[9]:""}`,"bottom-slots":"",error:!!e.formErrors.job},{error:l(()=>[p("div",Te,E(e.formErrors.job),1)]),_:1},8,["modelValue","options","display-value","error"])]),p("div",Pe,[o(K,{disable:!e.job,class:"q-mb-sm",dense:"",label:"Select Custom Job Title (Alias)","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.alias,"onUpdate:modelValue":a[1]||(a[1]=r=>e.alias=r),options:e.job?e.job.aliases:[],"option-label":"7","display-value":`${e.alias?e.alias[7]:""}`,"bottom-slots":"",error:!!e.formErrors.alias,onNewValue:e.submitAlias,"use-input":""},{error:l(()=>[p("div",Oe,E(e.formErrors.alias),1)]),_:1},8,["disable","modelValue","options","display-value","error","onNewValue"])])])]),_:1}),o(I,{align:"right"},{default:l(()=>[o(J,{color:"secondary",label:"Cancel",onClick:e.cancelAddJob},null,8,["onClick"]),o(J,{color:"primary",label:"Submit Job",type:"submit"})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])}var Fe=z(Re,[["render",De]]);const Le=[{name:0,label:"Default Classification",align:"left",field:e=>e[17],format:e=>`${e}`,sortable:!0,required:!0},{name:1,label:"Vanity Job Title (Alias)",align:"left",field:e=>e[18],format:e=>`${e}`,sortable:!0}],Xe=X({props:{category:Object,projectData:Object},components:{EditJobDialog:qe,AddNewJob:Fe},setup(e){const a=U(),s=ie(),u=j(!1),c=j(!1),d=j(null),r=j(null),i=j(!1),{getViewedProjects:t,updateViewedProjects:f,upsertProjectCraft:q}=de(),R=P(()=>t(s.params.id)),A=P(()=>(e.category.classifications?e.category.classifications:[]).sort((V,T)=>V.order>T.order?-1:1)),m=async g=>{if(u.value=!0,R.value&&(g||!R.value[e.category.key]||R.value[e.category.key].length===0)){const{data:V}=await S.fetchFromProjectsApp({fields:[ee({type:e.category.key,query:e.category.query})]});console.log(V),f({id:s.params.id,dataset:e.category.key,data:V})}u.value=!1};function w(g,V){d.value=g,r.value=V,c.value=!0}function y(){c.value=!1,d.value=null,r.value=null}function v({craft:g}){q({craft:g}),c.value=!1,d.value=null,r.value=null,a.notify({type:"positive",message:"Job successfully updated!"})}function h({craft:g}){q({craft:g}),i.value=!1,a.notify({type:"positive",message:"New job added!"})}return{props:e,loading:u,loadData:m,rows:A,initialPagination:j({rowsPerPage:100}),columns:Le,showEditJob:c,showAddJob:i,editJobCraft:d,editJobJob:r,editJob:w,editJobComplete:v,newJobAddComplete:h,closeEditJob:y}}}),ze={key:1};function Ue(e,a,s,u,c,d){const r=W("add-new-job"),i=W("edit-job-dialog");return n(),Q("div",null,[e.showAddJob?k("",!0):(n(),C(ge,{key:0,flat:"",dense:"",columns:e.$q.screen.lt.md?e.columns.filter(t=>t.required):e.columns,rows:e.rows,"row-key":t=>t[3],"table-header-class":"bg-dark text-white",class:"sticky-header-table","hide-pagination":"",pagination:e.initialPagination,"onUpdate:pagination":a[1]||(a[1]=t=>e.initialPagination=t),"rows-per-page-options":[0],loading:e.loading},{"top-left":l(()=>[e.$can("manage","projects")?(n(),C(J,{key:0,icon:"add",color:"accent",label:`Add a new ${e.category[10]} Job`,onClick:a[0]||(a[0]=t=>e.showAddJob=!0)},null,8,["label"])):k("",!0)]),loading:l(()=>[o(ye,{showing:e.loading,label:"Loading...","label-class":"text-info"},null,8,["showing"])]),header:l(t=>[o(ne,{class:"bg-dark text-white",props:t},{default:l(()=>[(n(!0),Q(G,null,H(t.cols,f=>(n(),C(Z,{class:"text-left",key:f.name},{default:l(()=>[B(E(f.label),1)]),_:2},1024))),128)),e.$can("read","rates")?(n(),C(Z,{key:0,class:"text-left"},{default:l(()=>[B("Rate")]),_:1})):k("",!0),o(Z,{"auto-width":""})]),_:2},1032,["props"])]),body:l(t=>[o(ne,{props:t},{default:l(()=>[(n(!0),Q(G,null,H(t.cols,f=>(n(),C(_,{key:f.name,props:t},{default:l(()=>[B(E(f.value),1)]),_:2},1032,["props"]))),128)),e.$can("read","rates")?(n(),C(_,{key:0,class:"text-left"},{default:l(()=>[B(E(t.row.hasFixedRate?`$ ${t.row.fixedRate.toFixed(2)}`:"N/A"),1)]),_:2},1024)):k("",!0),o(_,{"auto-width":""},{default:l(()=>[e.$can("manage","projects")?(n(),C(J,{key:0,size:"sm",label:"edit",color:"primary",onClick:f=>e.editJob(e.category,t.row)},null,8,["onClick"])):k("",!0)]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["columns","rows","row-key","pagination","loading"])),e.showAddJob?(n(),Q("div",ze,[o(r,{craft:e.category,onCancelAddJob:a[2]||(a[2]=t=>e.showAddJob=!1),onNewJobAdded:e.newJobAddComplete},null,8,["craft","onNewJobAdded"])])):k("",!0),o(te,{modelValue:e.showEditJob,"onUpdate:modelValue":a[3]||(a[3]=t=>e.showEditJob=t),persistent:""},{default:l(()=>[o(i,{craft:e.editJobCraft,job:e.editJobJob,onCloseEditJob:e.closeEditJob,onEditJobComplete:e.editJobComplete},null,8,["craft","job","onCloseEditJob","onEditJobComplete"])]),_:1},8,["modelValue"])])}var Me=z(Xe,[["render",Ue]]);const Be=X({emits:["cancelAddCraft","newCraftAdded"],props:{crafts:Array,project:Number},setup(e,{emit:a}){const s=U(),u=j([]),c=P(()=>{const v=new Set(e.crafts.map(g=>g[9]));return u.value.filter(g=>!v.has(g[3]))}),d=O({craftSelection:O().required("Craft is required.")}),{meta:r,errors:i,handleSubmit:t,handleReset:f}=le({validationSchema:d}),{value:q}=L("craftSelection"),R=t(async v=>{s.loading.show();try{const h=await m(v.craftSelection[3]),g=await A(h),V=[];g.forEach(D=>{const re={9:{value:D[93]},13:{value:D[3]},20:{value:h[3]}};V.push(re)});const{data:T}=await S.upsertRecordsXML({to:"bpzpx5m7x",data:V,fieldsToReturn:[141],formatObject:141});T.forEach(D=>{h.classifications.push(D[141])}),s.loading.hide(),a("newCraftAdded",{craft:h})}catch{s.notify({type:"negative",message:"Something went wrong"})}}),A=async v=>{const{data:h}=await S.fetchFromStructureApp({fields:[x({type:"availableJobs",query:`{'13'.EX.'${v[9]}'}AND{'71'.XEX.'Pending'}`})]});return h},m=async v=>{try{const{data:h}=await S.upsertRecordsXML({to:"bp5g8rym8",data:[{6:{value:"Active"},7:{value:e.project},9:{value:v}}],fieldsToReturn:[120],formatObject:120});return h[0][120]}catch{s.notify({type:"negative",message:"Something went wrong"})}},w=async()=>{s.loading.show();const{data:v}=await S.fetchFromStructureApp({fields:[x({type:"availableCrafts",query:"{'16'.EX.'Yes'}"})]});u.value=v,s.loading.hide()};function y(){a("cancelAddCraft")}return w(),{formErrors:i,formMeta:r,submit:R,cancelAdd:y,props:e,craftSelection:q,availableCrafts:c}}}),Ye={class:"text-caption"},Ie=p("div",{class:"text-primary text-body1"},"This project already has all available crafts. Click cancel below to return.",-1);function We(e,a,s,u,c,d){return n(),Q("div",null,[o(oe,{onSubmit:ae(e.submit,["prevent"])},{default:l(()=>[o(Y,{style:{width:"500px"}},{default:l(()=>[e.availableCrafts.length>0?(n(),C(F,{key:0},{default:l(()=>[o(K,{class:"q-mb-sm",dense:"",label:"Select the Craft","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.craftSelection,"onUpdate:modelValue":a[0]||(a[0]=r=>e.craftSelection=r),options:e.availableCrafts||[],"option-label":"6","display-value":`${e.craftSelection?e.craftSelection[6]:""}`,"bottom-slots":"",error:!!e.formErrors.craftSelection},{error:l(()=>[p("div",Ye,E(e.formErrors.craftSelection),1)]),_:1},8,["modelValue","options","display-value","error"])]),_:1})):(n(),C(F,{key:1},{default:l(()=>[Ie]),_:1})),o(I,{align:"right"},{default:l(()=>[o(J,{color:"secondary",label:"Cancel",onClick:e.cancelAdd},null,8,["onClick"]),e.availableCrafts.length>0?(n(),C(J,{key:0,color:"primary",label:"Submit",type:"submit"})):k("",!0)]),_:1})]),_:1})]),_:1},8,["onSubmit"])])}var Ge=z(Be,[["render",We]]);const He=X({components:{CraftPanel:Me,AddNewCraft:Ge},setup(){const e=U(),a=j(null),s=j(!1),u=ie(),{getViewedProjects:c,updateViewedProjects:d,setViewedProjects:r}=de(),i=P(()=>u.params.id?u.params.id:null),t=P(()=>c(i.value)),f=P(()=>(t.value&&t.value.crafts?t.value.crafts:[]).sort((m,w)=>m.order>w.order?1:-1));function q({craft:A}){d({id:i.value,dataset:"crafts",data:[A],push:!0}),s.value=!1,a.value=A[3],e.notify({type:"positive",message:"New craft added!"})}return(async A=>{if(e.loading.show(),!t.value){const{data:m}=await S.fetchFromProjectsApp({fields:[ee({type:"projects",id:u.params.id})]});r({id:u.params.id,data:m})}if(i.value&&(A||f.value.length===0)){const{data:m}=await S.fetchFromProjectsApp({fields:[ee({type:"projectCrafts",query:`{'7'.EX.'${i.value}'}`})]});d({id:i.value,dataset:"crafts",data:m});const w=m.sort((y,v)=>y.order>v.order?1:-1)[0];a.value=w[3]}else a.value=f.value[0][3];e.loading.hide()})(),{tab:a,project:t,crafts:f,splitterModel:j(20),showAddCraft:s,newCraftAddComplete:q}}}),Ke={class:"q-pa-sm"},Ze={class:"row items-center"},_e={class:"col-10 q-pr-sm"},xe={class:"col-2 text-center"};function ea(e,a,s,u,c,d){const r=W("craft-panel"),i=W("add-new-craft");return n(),C(we,{style:{"max-width":"100vw"}},{default:l(()=>[p("div",Ke,[p("div",null,[p("div",Ze,[p("div",_e,[o(be,{class:"q-py-xs bg-info text-white shadow-2 rounded-borders",dense:"",modelValue:e.tab,"onUpdate:modelValue":a[0]||(a[0]=t=>e.tab=t),"indicator-color":"accent","outside-arrows":"","mobile-arrows":"","inline-label":""},{default:l(()=>[(n(!0),Q(G,null,H(e.crafts,t=>(n(),C(ce,{key:t[3],name:t[3],label:t[10]},null,8,["name","label"]))),128))]),_:1},8,["modelValue"])]),p("div",xe,[e.$can("manage","projects")?(n(),C(J,{key:0,color:"accent",label:"Add another Craft",onClick:a[1]||(a[1]=t=>e.showAddCraft=!0)})):k("",!0)])]),o(fe,{modelValue:e.tab,"onUpdate:modelValue":a[2]||(a[2]=t=>e.tab=t),animated:""},{default:l(()=>[(n(!0),Q(G,null,H(e.crafts,t=>(n(),C(me,{key:t[3],name:t[3],class:"q-px-xs"},{default:l(()=>[o(r,{category:t,projectData:e.project},null,8,["category","projectData"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]),o(te,{modelValue:e.showAddCraft,"onUpdate:modelValue":a[4]||(a[4]=t=>e.showAddCraft=t),persistent:""},{default:l(()=>[e.showAddCraft?(n(),C(i,{key:0,crafts:e.crafts,project:e.project[3]||null,onCancelAddCraft:a[3]||(a[3]=t=>e.showAddCraft=!1),onNewCraftAdded:e.newCraftAddComplete},null,8,["crafts","project","onNewCraftAdded"])):k("",!0)]),_:1},8,["modelValue"])])]),_:1})}var Qa=z(He,[["render",ea]]);export{Qa as default};
