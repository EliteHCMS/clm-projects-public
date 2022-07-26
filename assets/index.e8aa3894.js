import{Q as ve}from"./QPage.037d4291.js";import{a as he,Q as ge,b as $e,c as Ce}from"./QTabPanels.b536a323.js";import{Q as we}from"./QToolbar.d986d2b3.js";import{u as K}from"./use-quasar.9676b512.js";import{k as x,c1 as I,r as $,_ as P,v as de,z as h,am as D,bh as u,d as a,c2 as z,C as c,aa as M,cC as te,c6 as E,b$ as me,c3 as J,bE as ne,c as j,cB as ie,aY as X,A as T,an as L,d4 as ke,w as Ye,o as Ve,bX as Ae,F as Me,aX as Te,cD as De,at as Ee}from"./index.db86b9c5.js";import{a as W}from"./QSelect.52378ad7.js";import{Q as Se}from"./QTd.681b1683.js";import{Q as qe}from"./QTr.2188c924.js";import{Q as Ne}from"./QTable.32baf863.js";import{b as U,u as re,q as G,m as le,f as ae}from"./quickbase.e0d6d519.js";import{e as Qe}from"./export-file.deb9806e.js";import{dayjs as w}from"./dayjs.226882af.js";import{Q as ue}from"./QForm.da8720ee.js";import{a as _,b as pe,u as oe,c as Fe}from"./array.84b781c4.js";import"./QResizeObserver.5717931a.js";import"./rtl.65b79c69.js";import"./use-panel.0f399b9f.js";import"./touch.d8ab472d.js";import"./selection.1e0c42bc.js";import"./QMenu.230282c0.js";import"./position-engine.8428b60b.js";import"./QList.a736a31b.js";import"./QMarkupTable.8b338aaf.js";import"./use-fullscreen.77393f49.js";import"./_commonjsHelpers.dfee5925.js";import"./localForage.414ddd2d.js";import"./index.7dbe61ef.js";import"./i18n.97214c36.js";import"./api.2eb2bfe7.js";const je=x({setup(e,t){K();const{availableMatrixColumns:f,active:p}=I(U()),{addNewMatrixColumn:g}=U(),{getUser:r}=I(re()),{capitalize:i}=de,v=$(null),n=_({selection:_().required().nullable()}),{meta:b,errors:S,handleSubmit:q,handleReset:Q}=pe({validationSchema:n}),{value:k}=oe("selection"),Y=q(async C=>{console.log(C);const y={6:{value:`${r.value[35]} ${r.value[37]}`},7:{value:C.selection[7].toLowerCase()},10:{value:p.value[3]},13:{value:C.selection[13]}},{data:R}=await G.upsertRecordsXML({to:"bsiy5quec",data:[y],fieldsToReturn:[12],formatObject:12});R.length>0?(g({project:p.value,data:R[0][12]}),t.emit("newColumnAdded")):t.emit("newColumnFailed"),Q()});return{formMeta:b,formErrors:S,submit:Y,selection:k,availableMatrixColumns:f,selectionError:v,capitalize:i}}}),Le=c("div",{class:"text-body1 text-white"},"Add a Column to Matrix",-1),ze=c("div",{class:"text-body1"},"Select an Existing Column",-1),Ue=c("div",{class:"q-pl-sm text-caption text-italic"}," Selecting an existing column will display any information previously entered for the employee by any job site. ",-1),Pe={class:"text-caption"},Re=c("div",{class:"text-body2"},"Don't see your column? You can add a new one.",-1);function Be(e,t,f,p,g,r){return h(),D(ue,{onSubmit:ne(e.submit,["prevent"])},{default:u(()=>[a(J,null,{default:u(()=>[a(z,{class:"bg-dark"},{default:u(()=>[Le]),_:1}),a(z,{class:"q-pb-xs"},{default:u(()=>[ze,Ue,a(W,{class:"q-mb-sm",dense:"",label:"Select a Column to Add","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.selection,"onUpdate:modelValue":t[0]||(t[0]=i=>e.selection=i),options:e.availableMatrixColumns,"option-label":"7","display-value":e.selection?`${e.selection[7]} - ${e.capitalize(e.selection[13])}`:"","bottom-slots":"",error:!!(e.formErrors.selection||e.selectionError)},{error:u(()=>[c("div",Pe,M(e.formErrors.selection?e.formErrors.selection:e.selectionError),1)]),_:1},8,["modelValue","options","display-value","error"])]),_:1}),a(z,{class:"q-py-xs"},{default:u(()=>[Re]),_:1}),a(te,{align:"left"},{default:u(()=>[a(E,{label:"Add a New Column",color:"info",onClick:t[1]||(t[1]=i=>e.$emit("continueToNewColumn"))})]),_:1}),a(me),a(te,{class:"bg-accent",align:"right"},{default:u(()=>[a(E,{size:e.$q.screen.lt.md?"sm":"",color:"secondary",label:"Cancel",onClick:t[2]||(t[2]=i=>e.$emit("closeAddColumn"))},null,8,["size"]),a(E,{type:"submit",size:e.$q.screen.lt.md?"sm":"",color:"primary",label:"Save"},null,8,["size"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])}var Oe=P(je,[["render",Be]]);const Ie=x({setup(e,t){const{availableMatrixColumns:f,active:p}=I(U()),{addNewMatrixColumn:g}=U(),{getUser:r}=I(re()),i=$(null),v=$(null),n=j(()=>_({label:Fe().required().nullable().label("Column Name"),type:_().required().nullable().label("Data Type")})),{meta:b,errors:S,handleSubmit:q,handleReset:Q}=pe({validationSchema:n}),{value:k}=oe("label"),{value:Y}=oe("type"),C=q(async y=>{if(!f.value.find(N=>N[7].toLowerCase()===y.label.toLowerCase()&&N[13]===y.type.value)){const N={6:{value:`${r.value[35]} ${r.value[37]}`},7:{value:y.label.toLowerCase()},10:{value:p.value[3]},13:{value:y.type.value}},{data:H}=await G.upsertRecordsXML({to:"bsiy5quec",data:[N],fieldsToReturn:[12],formatObject:12});H.length>0?(g({project:p.value,data:H[0][12]}),t.emit("newColumnAdded")):t.emit("newColumnFailed")}Q()});return{formMeta:b,formErrors:S,submit:C,label:k,type:Y,labelError:i,typeError:v}}}),Xe=c("div",{class:"text-body1 text-white"},"Add a Column to Matrix",-1),xe=c("div",{class:"text-body1 text-dark"},"Add a New Column",-1),We={class:"text-caption"},He={class:"text-caption"};function Je(e,t,f,p,g,r){return h(),D(ue,{onSubmit:ne(e.submit,["prevent"])},{default:u(()=>[a(J,null,{default:u(()=>[a(z,{class:"bg-dark"},{default:u(()=>[Xe]),_:1}),a(z,{class:"q-pt-md"},{default:u(()=>[xe,a(ie,{class:"q-mb-md",dense:"",type:"text","bottom-slots":"",error:!!(e.formErrors.label||e.labelError),modelValue:e.label,"onUpdate:modelValue":t[0]||(t[0]=i=>e.label=i),label:"Column Name"},{error:u(()=>[c("div",We,M(e.formErrors.label?e.formErrors.label:e.labelError),1)]),_:1},8,["error","modelValue"]),a(W,{dense:"",label:"Select Data Type",modelValue:e.type,"onUpdate:modelValue":t[1]||(t[1]=i=>e.type=i),options:[{value:"text",label:"Text"},{value:"date",label:"Date"},{value:"checkbox",label:"Checkbox"}],"bottom-slots":"",error:!!(e.formErrors.type||e.typeError)},{error:u(()=>[c("div",He,M(e.formErrors.type?e.formErrors.type:e.typeError),1)]),_:1},8,["modelValue","error"])]),_:1}),a(me),a(te,{class:"bg-accent",align:"right"},{default:u(()=>[a(E,{size:e.$q.screen.lt.md?"sm":"",color:"secondary",label:"Cancel",onClick:t[2]||(t[2]=i=>e.$emit("closeAddColumn"))},null,8,["size"]),a(E,{type:"submit",size:e.$q.screen.lt.md?"sm":"",color:"primary",label:"Save"},null,8,["size"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])}var Ge=P(Ie,[["render",Je]]);const _e=x({components:{SelectColumn:Oe,EnterColumn:Ge},setup(){const e=K(),t=$(0),{getMatrixColumns:f}=U();async function p(){e.loading.show(),(await f()).length===0&&(t.value=1),e.loading.hide()}return p(),{step:t}}});function Ke(e,t,f,p,g,r){const i=X("select-column"),v=X("enter-column");return h(),T("div",null,[c("div",null,[e.step===0?(h(),D(i,{key:0,onNoOptions:t[0]||(t[0]=n=>e.step=1),onCloseAddColumn:t[1]||(t[1]=n=>e.$emit("closeAddColumn")),onContinueToNewColumn:t[2]||(t[2]=n=>e.step=1),onNewColumnAdded:t[3]||(t[3]=n=>e.$emit("newColumnAdded")),onNewColumnFailed:t[4]||(t[4]=n=>e.$emit("newColumnFailed"))})):L("",!0),e.step===1?(h(),D(v,{key:1,onCloseAddColumn:t[5]||(t[5]=n=>e.$emit("closeAddColumn")),onBackToSelect:t[6]||(t[6]=n=>e.step=0),onNewColumnAdded:t[7]||(t[7]=n=>e.$emit("newColumnAdded")),onNewColumnFailed:t[8]||(t[8]=n=>e.$emit("newColumnFailed"))})):L("",!0)])])}var Ze=P(_e,[["render",Ke]]);const et=x({props:{inputType:String,row:Object,col:Object,currentValue:String,checkValue:Boolean},setup(e,t){const f=$(""),p=$(null),g=$(e.checkValue),r=$(!1),i=$(e.currentValue),{getUser:v}=re(),{refreshAssignment:n}=le();function b(){console.log(ae.formatDate(e.col.value,"YYYY-MM-DD")),e.inputType==="date"?(p.value=ae.formatDate(e.col.value,"YYYY-MM-DD"),r.value=!0):e.inputType==="checkbox"?(g.value=e.col.value,r.value=!0):(f.value=e.col.value,r.value=!0)}const S=j(()=>!!(i.value&&i.value!==""&&i.value!==void 0));async function q(){let k;r.value?k={3:{value:e.row.employee[561].find(y=>y[13]===e.col.name)[3]},10:{value:`${v[35]} ${v[37]}`}}:k={12:{value:e.row.employee[3]},13:{value:e.col.name},6:{value:e.inputType},10:{value:`${v[35]} ${v[37]}`}},e.inputType==="date"?Object.assign(k,{8:{value:p.value}}):e.inputType==="checkbox"?Object.assign(k,{9:{value:g.value}}):Object.assign(k,{7:{value:f.value}});const{data:Y}=await G.upsertRecordsXML({to:"bsi3t4bcz",data:[k],fieldsToReturn:[14],formatObject:14});if(Y.length>0){const C=e.row;C.employee=Y[0][14],n({assignment:C}),e.inputType==="date"?(i.value=w(p.value,"YYYY-MM-DD").format("MM/DD/YYYY"),p.value=null):(i.value=f.value,f.value=""),r.value&&(r.value=!1)}}async function Q(){const Y={3:{value:e.row.employee[561].find(y=>y[13]===e.col.name)[3]},16:{value:`${v[35]} ${v[37]}`},15:{value:!0}},{data:C}=await G.upsertRecordsXML({to:"bsi3t4bcz",data:[Y],fieldsToReturn:[14],formatObject:14});if(console.log(C),C.length>0){const y=e.row;y.employee=C[0][14],n({assignment:y}),e.inputType==="date"?(i.value="",p.value=null):(i.value="",f.value=""),r.value&&(r.value=!1)}}return{textEntry:f,dateEntry:p,checkEntry:g,props:e,editMode:r,hasValue:S,setValue:i,submit:q,showEdit:b,remove:Q}}}),tt={key:0,class:"row"},lt={class:"col-2"},at={class:"col-10"},ot={key:2,align:"center"};function st(e,t,f,p,g,r){return h(),T("div",null,[e.hasValue&&!e.editMode&&e.props.inputType!=="checkbox"?(h(),T("div",tt,[c("div",lt,[a(E,{size:"sm",dense:"",flat:"","text-color":"primary",icon:"edit",onClick:e.showEdit},null,8,["onClick"])]),c("div",at,[c("span",null,M(e.setValue),1)])])):L("",!0),e.props.inputType!=="checkbox"&&(!e.hasValue||e.editMode)?(h(),D(ue,{key:1,onSubmit:ne(e.submit,["prevent"])},{default:u(()=>[e.props.inputType==="date"?(h(),D(ie,{key:0,clearable:"",filled:"","input-class":"text-caption",dense:"",type:"date",modelValue:e.dateEntry,"onUpdate:modelValue":t[0]||(t[0]=i=>e.dateEntry=i),onClear:t[1]||(t[1]=i=>e.remove())},{prepend:u(()=>[e.dateEntry?(h(),D(E,{key:0,"text-color":"primary",flat:"",type:"submit",size:"sm",dense:"",icon:"save",onClick:e.submit},null,8,["onClick"])):L("",!0)]),_:1},8,["modelValue"])):L("",!0)]),_:1},8,["onSubmit"])):L("",!0),e.props.inputType==="checkbox"?(h(),T("div",ot,[a(ke,{modelValue:e.checkEntry,"onUpdate:modelValue":[t[2]||(t[2]=i=>e.checkEntry=i),e.submit]},null,8,["modelValue","onUpdate:modelValue"])])):L("",!0)])}var nt=P(et,[["render",st]]);const{capitalize:O}=de,se=e=>{const t=e[20]!==""?O(e[20].toLowerCase().trim()):"",f=e[22]!==""?O(e[22].toLowerCase().trim()):"",p=e[21]!==""?` ${O(e[21].toLowerCase().trim())}`:"",g=e[23]!==""?` ${O(e[23])}`:"";return`${f}${g}, ${t}${p}`},it=[{name:1,label:"Name",align:"left",field:e=>e.employee[22],format:(e,t)=>`${se(t.employee)}`,sortable:!0,sortOrder:"ad"},{name:7,label:"Workday ID",align:"left",field:e=>e.employee[378],format:e=>`${e}`,sortable:!0,sortOrder:"ad"},{name:2,label:"Payroll ID",align:"left",field:e=>e.employee[213],format:e=>e===""?"not available":e,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e.map.fullJob,format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:5,label:"Job #",align:"left",field:e=>e.map.jobNumber,format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:6,label:"Arrival Date",align:"left",field:e=>e.map.start,format:e=>`${e?ae.formatDate(e,"MM/DD/YYYY"):"TBD"}`,sortable:!0}],rt=x({name:"Table",components:{AddColumn:Ze,TableEdit:nt},setup(){const e=K(),t=le(),f=U(),{assignmentsForProject:p}=I(t),g=p,{active:r}=I(U()),{getAssignments:i,checkDisa:v}=le(),n=$(""),b=$(null),S=$(null),q=$(null),Q=$(0),k=$(!1),Y=$(!1),C=$(!1);i();const y=j(()=>{let d=g.value;return d=d.filter(o=>o[75].toLowerCase().includes(n.value.toLowerCase())),d=b.value?d.filter(o=>o.employee[556]&&o.employee[556][10]&&o.employee[556][10].ownerStatus===b.value):d,d=S.value?d.filter(o=>o.employee[556]&&o.employee[556][10]&&o.employee[556][10].hasPendingRandom===S.value.value):d,d=q.value?d.filter(o=>o.employee[556]&&o.employee[556][10]&&o.employee[556][10].backgrounds===q.value):d,d.sort((o,s)=>o.employee[22].toLowerCase().trim()>s.employee[22].toLowerCase().trim()?1:-1).filter(o=>!o[112])});function R(d,o,s){let m=o!==void 0?o(d,s):d;return m=m==null?"":String(m),m=m.split('"').join('""'),`"${m}"`}async function N(){Y.value=!0,e.loading.show({message:"Checking Disa Status. This may take a few moments..."});try{await v({project:r.value,roster:y.value})}catch(d){console.log(d),e.notify({message:"There was a problem...",color:"negative",icon:"warning"})}e.loading.hide(),Y.value=!1}const H=j(()=>[...new Map(r.value.matrix.map(o=>[o[7],o])).values()]),Z=j(()=>{const d=[{name:1,label:"Name",align:"left",field:s=>se(s.employee),format:s=>s,sortable:!0,sortOrder:"ad"}];if(r.value[322]){const s=r.value[321];s[36]&&d.push({name:0,label:"Status",align:"center",field:l=>l.employee[556]&&l.employee[556][10]?l.employee[556][10].ownerStatus:null,format:l=>l||"N/A",sortable:!0},{name:5,label:"Background",align:"center",field:l=>l.employee[556]&&l.employee[556][10]?l.employee[556][10].backgrounds:null,format:l=>l||"N/A",sortable:!0}),d.push({name:3,label:"Random",align:"left",field:l=>l.employee[556]&&l.employee[556][10]?l.employee[556][10].hasPendingRandom:null,format:l=>l?"Yes":"No",sortable:!0},{name:4,label:"Days Left",align:"right",field:l=>l.employee[556]&&l.employee[556][10]&&l.employee[556][10].hasPendingRandom?l.employee[556][10].daysUntilWindowCloses:null,format:l=>l?parseInt(l):"N/A",sortable:!0});const m=s[10].split(",");m&&Array.isArray(m)&&m.forEach((l,ee)=>{const V=6+(ee+1);let A="";l=l.toLowerCase().trim(),l.includes("w/ randoms")&&(l=l.replace(" w/ randoms","")),l==="dccha"||l==="dcceo"?A="lastUrineTest":l==="dccht"?A="lastHairTest":l==="nasap"?A="lastNASAPTest":l==="dccof"&&(A="lastOralFluidTest");const be={policy:l,key:A};d.push({name:V,label:`${l.toUpperCase()} Last Test`,align:"right",field:F=>F.employee[556]&&F.employee[556][10]?F.employee[556][10][be.key]:null,format:F=>F&&w(F).isValid()?`${w(F).format("MM/DD/YYYY")}`:"N/A",sortable:!0})}),s[36]&&d.push({name:6,label:"BG Exp",align:"right",field:l=>l.employee[556]&&l.employee[556][10]?l.employee[556][10].backgroundsExpDate:null,format:l=>l&&w(l).isValid()?`${w(l).format("MM/DD/YYYY")}`:"N/A",sortable:!0})}return[{allowEdit:!0,editInputType:"date",name:"basic_plus",classes:"editable",label:"Basic Plus Exp",align:"right",field:s=>s.employee[561].find(m=>m[13]==="basic_plus")?s.employee[561].find(m=>m[13]==="basic_plus").value:null,format:s=>s?w(s,"MM-DD-YYYY").format("MM/DD/YYYY"):null,sortable:!0},{allowEdit:!0,editInputType:"date",name:"twic",classes:"editable",label:"TWIC Exp",align:"right",field:s=>s.employee[561].find(m=>m[13]==="twic")?s.employee[561].find(m=>m[13]==="twic").value:null,format:s=>s?w(s,"MM-DD-YYYY").format("MM/DD/YYYY"):null,sortable:!0}].forEach(s=>{d.push(s)}),H.value.forEach(s=>{let m="";s[7].split(" ").forEach((V,A)=>{m+=A>0?` ${O(V)}`:O(V)});const ee={allowEdit:!0,editInputType:s[13],name:s[7].replaceAll(" ","_"),classes:"editable",label:m,align:"right",field:V=>V.employee[561].find(A=>A[13]===s[7].toLowerCase().replaceAll(" ","_"))?V.employee[561].find(A=>A[13]===s[7].toLowerCase().replaceAll(" ","_")).value:null,format:V=>V?s[13]==="date"?w(V,"MM-DD-YYYY").format("MM/DD/YYYY"):V:null,sortable:!0};d.push(ee)}),d}),ce=j(()=>({notActive:y.value.filter(o=>!o.employee[556]||o.employee[556][10].ownerStatus!=="Active").length,active:y.value.filter(o=>o.employee[556]&&o.employee[556][10].ownerStatus==="Active").length,randoms:y.value.filter(o=>o.employee[556]&&o.employee[556][10].hasPendingRandom).length})),B=j(()=>{if(r.value[322])if(console.log(y.value),y.value.length>0){const d=y.value.filter(o=>o.employee[556]&&o.employee[556][10]&&w(o.employee[556][10].dateChecked).isValid());if(d.length>0){const o=d.sort((s,m)=>s.employee[556][10].dateChecked>m.employee[556][10].dateChecked?-1:1)[0].employee[556][10].dateChecked;return o?w(o):null}else return null}else return null;else return null});Ye(B,()=>{r.value&&r.value[322]&&B.value&&B.value.isBefore(w(),"day")&&N()}),Ve(()=>{r.value&&r.value[322]&&B.value&&B.value.isBefore(w(),"day")&&N()});function fe(){C.value=!1,e.notify({type:"positive",message:"New Column Added!",position:"top-right"})}function ye(){C.value=!1,e.notify({type:"negative",message:"Cannot add new column",position:"top-right"})}return{columns:it,rows:y,initialPagination:$({rowsPerPage:0}),separator:"vertical",projectStore:f,active:r,search:n,statusFilter:b,bgFilter:q,randomFilter:S,assignmentsForProject:p,tab:Q,showEmployee:k,formatName:se,exportAllEmployees(){const d=[Z.value.map(s=>R(s.label))].concat(y.value.map(s=>Z.value.map(m=>R(typeof m.field=="function"?m.field(s):s[m.field===void 0?m.name:m.field],m.format,s)).join(","))).join(`\r
`);Qe(`${w().format("MM.DD.YYYY")} ${r.value[20]} Site-Matrix-Export.csv`,d,"text/csv")!==!0&&e.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})},checkDisaStatus:N,computedColumns:Z,checkingStatus:Y,statusSummary:ce,dayjs:w,lastChecked:B,showAddColumn:C,newColumnAdded:fe,newColumnFailed:ye}}}),ut={key:0},dt={class:"row items-center"},mt={class:"col-12 col-md-3 q-px-sm"},pt={class:"col-12 col-md-2 q-px-sm"},ct={class:"col-12 col-md-2 q-px-sm"},ft={class:"col-12 col-md-2 q-px-sm"},yt={class:"text-primary text-italic text-body2"},bt={class:"text-dark text-italic text-body2 q-mt-sm"},vt=Ee(" Last Checked: "),ht={class:"text-accent"},gt={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"},$t={key:1},Ct={key:1},wt=c("div",{class:"text-primary text-body1"},"Coming soon. This is available for Disa sites only right now.",-1);function kt(e,t,f,p,g,r){const i=X("table-edit"),v=X("add-column");return h(),T("div",null,[e.active[322]?(h(),T("div",ut,[a(J,{flat:""},{default:u(()=>[a(z,{class:"q-pt-none"},{default:u(()=>[c("div",dt,[c("div",mt,[a(ie,{dense:"",modelValue:e.search,"onUpdate:modelValue":t[0]||(t[0]=n=>e.search=n),label:"Search"},null,8,["modelValue"])]),c("div",pt,[a(W,{dense:"",label:"Status","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.statusFilter,"onUpdate:modelValue":t[1]||(t[1]=n=>e.statusFilter=n),options:["Active","Not Active"],"use-chips":""},null,8,["modelValue"])]),c("div",ct,[a(W,{dense:"",label:"Pending Random","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.randomFilter,"onUpdate:modelValue":t[2]||(t[2]=n=>e.randomFilter=n),options:[{label:"Yes",value:!0},{label:"No",value:!1}],"use-chips":""},null,8,["modelValue"])]),c("div",ft,[a(W,{dense:"",label:"Background","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.bgFilter,"onUpdate:modelValue":t[3]||(t[3]=n=>e.bgFilter=n),options:["Active","Not Active"],"use-chips":""},null,8,["modelValue"])])])]),_:1})]),_:1}),a(Ne,{"title-class":e.$q.screen.gt.sm?"text-primary text-h6":"text-primary text-body1",title:e.$q.screen.lt.sm?"Matrix":`Matrix for ${e.active[20]}`,columns:e.computedColumns,rows:e.rows,"row-key":"3",class:"q-pa-sm sticky-header-table",pagination:e.initialPagination,"onUpdate:pagination":t[5]||(t[5]=n=>e.initialPagination=n),"rows-per-page-options":[0],separator:"vertical","table-header-class":"bg-dark text-white","no-data-label":`There are no employees for ${e.active[20]}`,grid:e.$q.screen.lt.sm,dense:""},{"top-right":u(()=>[a(E,{dense:e.$q.screen.lt.md,color:"accent",label:"Check Disa Status",onClick:e.checkDisaStatus},null,8,["dense","onClick"]),a(E,{dense:e.$q.screen.lt.md,class:"q-ml-sm",color:"info",label:"Add a Column",onClick:t[4]||(t[4]=n=>e.showAddColumn=!0)},null,8,["dense"]),a(E,{dense:e.$q.screen.lt.md,class:"q-ml-sm",color:"primary",label:"Download",onClick:e.exportAllEmployees,disable:e.rows.length<1},null,8,["dense","onClick","disable"])]),"top-left":u(()=>[c("div",yt," ("+M(e.statusSummary.active)+" active / "+M(e.statusSummary.notActive)+" not active / "+M(e.statusSummary.randoms)+" pending randoms) ",1),c("div",bt,[vt,c("span",ht,M(e.lastChecked?e.lastChecked.format("MM/DD/YYYY hh:mm:ss a z"):"Never"),1)])]),"no-data":u(({message:n})=>[c("div",gt,[a(Ae,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),c("span",null,M(n),1)])]),body:u(n=>[a(qe,{props:n},{default:u(()=>[(h(!0),T(Me,null,Te(n.cols,b=>(h(),D(Se,{key:b.name,props:n},{default:u(()=>[b.allowEdit?(h(),D(i,{key:0,hasValue:!!(b.value||b.value!==""||b.value!==void 0),col:b,currentValue:b.editInputType==="checkbox"?"":b.value,checkValue:b.value==="true",inputType:b.editInputType?b.editInputType:"text",row:n.row},null,8,["hasValue","col","currentValue","checkValue","inputType","row"])):(h(),T("span",$t,M(b.value),1))]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),_:1},8,["title-class","title","columns","rows","pagination","no-data-label","grid"])])):(h(),T("div",Ct,[a(J,null,{default:u(()=>[a(z,{class:"text-center"},{default:u(()=>[wt]),_:1})]),_:1})])),a(De,{modelValue:e.showAddColumn,"onUpdate:modelValue":t[7]||(t[7]=n=>e.showAddColumn=n),persistent:""},{default:u(()=>[a(v,{onCloseAddColumn:t[6]||(t[6]=n=>e.showAddColumn=!1),onNewColumnAdded:e.newColumnAdded,onNewColumnFailed:e.newColumnFailed},null,8,["onNewColumnAdded","onNewColumnFailed"])]),_:1},8,["modelValue"])])}var Yt=P(rt,[["render",kt]]);const Vt=x({name:"Projects",components:{MatrixTab:Yt},setup(){return K(),{tab:$(0)}}}),At={class:"q-px-sm"};function Mt(e,t,f,p,g,r){const i=X("matrix-tab");return h(),T("div",At,[a(we,{class:"bg-info text-white shadow-2 rounded-borders"},{default:u(()=>[a(he,{modelValue:e.tab,"onUpdate:modelValue":t[0]||(t[0]=v=>e.tab=v),"bg-color":"none","indicator-color":"accent",align:"justify",dense:""},{default:u(()=>[a(ge,{name:0,label:"Matrix"})]),_:1},8,["modelValue"])]),_:1}),a(Ce,{modelValue:e.tab,"onUpdate:modelValue":t[1]||(t[1]=v=>e.tab=v),animated:""},{default:u(()=>[a($e,{class:"q-px-xs",name:0},{default:u(()=>[a(i)]),_:1})]),_:1},8,["modelValue"])])}var Tt=P(Vt,[["render",Mt]]);const Dt={name:"Compliance",components:{Tabs:Tt},setup(){return{}}};function Et(e,t,f,p,g,r){const i=X("tabs");return h(),D(ve,{style:{"max-width":"100vw"}},{default:u(()=>[a(i)]),_:1})}var nl=P(Dt,[["render",Et]]);export{nl as default};
