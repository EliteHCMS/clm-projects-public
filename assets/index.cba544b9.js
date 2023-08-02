import{Q as S,a as U,b as N}from"./QTabPanels.a9bd5734.js";import{Q as L}from"./QTabs.56f7cfd1.js";import{Q as z}from"./QSpace.3788ede0.js";import{l as g,r as w,bV as C,c as b,_ as j,b5 as _,A as v,B as D,d as o,br as l,cT as Q,D as $,cS as T,bU as E,w as K,y as M,bT as W,aq as y,ar as O,bW as X}from"./index.9dd15430.js";import{Q as G}from"./QToolbar.edd351f0.js";import{Q as H}from"./QPage.b5c31638.js";import{u as P}from"./use-quasar.07d34863.js";import{u as V}from"./dataStore.fea3a289.js";import{I as k,u as J,q as Y}from"./app.727217bc.js";import{R as F,a as Z}from"./requestDataAlt.d3484e2c.js";import{_ as A}from"./projectSelector.19f1057e.js";import{dayjs as x}from"./dayjs.2f8688b0.js";import{N as ee}from"./nameRequestData.81fab028.js";import"./use-panel.e516c240.js";import"./touch.70a9dd44.js";import"./selection.a10d025f.js";import"./QResizeObserver.d243739e.js";import"./rtl.b51694b1.js";import"./localForage.eb119360.js";import"./_commonjsHelpers.a26ce4be.js";import"./useQuerySaver.d29ff9ee.js";import"./api.4f913c74.js";import"./index.04bc0a32.js";import"./i18n.0b66fc90.js";import"./QTd.3a283869.js";import"./QTable.c682818c.js";import"./QList.b7324a87.js";import"./QMarkupTable.a7c1e34c.js";import"./QSelect.b771c9d2.js";import"./QChip.96daacbb.js";import"./QMenu.c2bc0e92.js";import"./position-engine.c6215dd3.js";import"./use-fullscreen.b7a8783b.js";import"./QTooltip.6f5bc820.js";import"./workday.0f04e809.js";import"./syncEmployeeWithWorkday.39dde532.js";import"./workdayAPI.ff2e0b3a.js";import"./dataStore.c18945c8.js";const te=g({props:{},components:{RequestDataTable:F,projectSelector:A},setup(e){const t=P(),u=k(),i=w(null),{getSelectedProject:c}=C(u),{getOpenRequest:d,fetchOpenRequest:a,fetchAllOpenRequest:s}=V(),n=b(()=>c.value?c.value[3]:null),p=b(()=>d(n.value).sort((r,f)=>r[1].$d<f[1].$d?1:-1));async function m(r){t.loading.show(),n.value?await a({projectId:n.value,refresh:r}):await s({refresh:r}),t.loading.hide()}return m(!1),{openRequests:p,projectFilter:i,loadData:m}}}),oe={class:"row items-center"},ae={class:"col-12 col-md-4"};function se(e,t,u,i,c,d){const a=_("projectSelector"),s=_("request-data-table");return v(),D("div",null,[o(T,{flat:""},{default:l(()=>[o(Q,null,{default:l(()=>[$("div",oe,[$("div",ae,[o(a,{dense:""})])])]),_:1})]),_:1}),o(s,{requests:e.openRequests,status:"Open",onRefreshData:t[0]||(t[0]=n=>e.loadData(!0))},null,8,["requests"])])}var ne=j(te,[["render",se]]);const re=g({props:{},components:{RequestDataTable:F,projectSelector:A},setup(e){const t=P(),u=E(),i=k(),c=w(null),{getSelectedProject:d}=C(i),{getPendingRequest:a,fetchPendingRequest:s,fetchAllPendingRequest:n}=V(),p=b(()=>d.value?d.value[3]:null),m=b(()=>a(p.value).sort((f,h)=>f[1].$d<h[1].$d?1:-1));async function r(f){t.loading.show(),p.value?await s({projectId:p.value,refresh:f}):await n({refresh:f}),t.loading.hide()}return K(()=>u.from,f=>{f.name==="new-request"&&(p.value?s({projectId:p.value,refresh:!0}):n({refresh:!0}))}),r(!1),{pendingRequests:m,projectFilter:c,loadData:r}}}),le={class:"row items-center"},ue={class:"col-12 col-md-4"};function ce(e,t,u,i,c,d){const a=_("projectSelector"),s=_("request-data-table");return v(),D("div",null,[o(T,{flat:""},{default:l(()=>[o(Q,null,{default:l(()=>[$("div",le,[$("div",ue,[o(a,{dense:""})])])]),_:1})]),_:1}),o(s,{requests:e.pendingRequests,status:"Pending",onRefreshData:t[0]||(t[0]=n=>e.loadData(!0))},null,8,["requests"])])}var de=j(re,[["render",ce]]);const ie=g({props:{},components:{RequestDataTableAlt:Z,projectSelector:A},setup(e){const t=P(),u=k(),i=w(null),{getSelectedProject:c}=C(u),{getClosedRequest:d,fetchClosedRequest:a,fetchAllClosedRequest:s}=V(),n=b(()=>c.value?c.value[3]:null),p=b(()=>d(n.value).sort((r,f)=>r[1].$d<f[1].$d?1:-1));async function m(r){t.loading.show(),n.value?await a({projectId:n.value,refresh:r}):await s({refresh:r}),t.loading.hide()}return m(),{closedRequests:p,projectFilter:i,loadData:m}}}),pe={class:"row items-center"},me={class:"col-12 col-md-4"};function fe(e,t,u,i,c,d){const a=_("projectSelector"),s=_("request-data-table-alt");return v(),D("div",null,[o(T,{flat:""},{default:l(()=>[o(Q,null,{default:l(()=>[$("div",pe,[$("div",me,[o(a,{dense:""})])])]),_:1})]),_:1}),o(s,{requests:e.closedRequests,status:"Completed",onRefreshData:t[0]||(t[0]=n=>e.loadData(!0))},null,8,["requests"])])}var _e=j(ie,[["render",fe]]);const qe=g({props:{},components:{NameRequestDataTable:ee,projectSelector:A},setup(e){const t=P(),u=k(),{capitalize:i}=M,c=w(null),{userData:d}=J(),{getSelectedProject:a}=C(u),{getNameRequest:s,fetchAllNameRequest:n,removeData:p,fetchNameRequest:m}=V(),r=b(()=>a.value?a.value[3]:null),f=b(()=>s(r.value).sort((q,R)=>q[1].$d<R[1].$d?1:-1));async function h(q){t.loading.show(),r.value?await m({projectId:r.value,refresh:q}):await n({refresh:q}),t.loading.hide()}function B(q){return`${i(q[6].toLowerCase())} ${i(q[7].toLowerCase())}`}async function I(q){t.dialog({title:"Confirm",message:`Are you sure you want to remove ${B(q)} from request# ${q[18]}?`,cancel:!0,persistent:!0}).onOk(async()=>{try{const{data:R}=await Y.upsertRecordsXML({to:"bsg4yb4wa",data:[{3:{value:q[3]},11:{value:!0},12:{value:x().tz("America/Chicago")},13:{value:`${d[35]} ${d[37]}`}}],fieldsToReturn:[15],formatObject:15});p({type:"nameRequest",key:R[0][15][38],item:R[0][15],storageKey:"storageNameRequest"})}catch(R){t.notify({type:"negative",message:"Cannot remove name request"}),console.log(R)}})}return h(),{nameRequests:f,projectFilter:c,removeName:I,loadData:h}}}),$e={class:"row items-center"},ve={class:"col-12 col-md-4"};function be(e,t,u,i,c,d){const a=_("projectSelector"),s=_("name-request-data-table");return v(),D("div",null,[o(T,{flat:""},{default:l(()=>[o(Q,null,{default:l(()=>[$("div",$e,[$("div",ve,[o(a,{dense:""})])])]),_:1})]),_:1}),o(s,{requests:e.nameRequests,status:"Named",onRemoveName:e.removeName,onRefreshData:t[0]||(t[0]=n=>e.loadData(!0))},null,8,["requests","onRemoveName"])])}var Re=j(qe,[["render",be]]);const ge=g({name:"Requests",components:{OpenTab:ne,PendingTab:de,CompleteTab:_e,NamesTab:Re},setup(){const e=W(),t=w(0);function u(){e.push({name:"new-request"})}return{tab:t,addNewRequest:u}}}),we={class:"q-pa-md"};function je(e,t,u,i,c,d){const a=_("open-tab"),s=_("pending-tab"),n=_("names-tab"),p=_("complete-tab");return v(),y(H,{style:{"max-width":"100vw"}},{default:l(()=>[$("div",we,[o(G,{class:"bg-info text-white shadow-2 rounded-borders"},{default:l(()=>[o(L,{modelValue:e.tab,"onUpdate:modelValue":t[0]||(t[0]=m=>e.tab=m),"bg-color":"none","indicator-color":"accent",dense:e.$q.screen.lt.md},{default:l(()=>[o(S,{name:0,label:e.$q.screen.gt.xs?"Open Requests":"Open"},null,8,["label"]),e.$q.screen.gt.sm?(v(),y(S,{key:0,name:1,label:e.$q.screen.gt.xs?"Pending Requests":"Pending"},null,8,["label"])):O("",!0),e.$can("read","nameRequests")?(v(),y(S,{key:1,name:2,label:e.$q.screen.gt.xs?"Named Requests":"Named"},null,8,["label"])):O("",!0),e.$q.screen.gt.sm?(v(),y(S,{key:2,name:3,label:e.$q.screen.gt.xs?"Completed Requests":"Completed"},null,8,["label"])):O("",!0)]),_:1},8,["modelValue","dense"]),o(z),o(X,{dense:"",color:"accent",icon:"add",label:e.$q.screen.lt.md?"Add New":"Add New Request",onClick:e.addNewRequest},null,8,["label","onClick"])]),_:1}),o(U,{modelValue:e.tab,"onUpdate:modelValue":t[1]||(t[1]=m=>e.tab=m),animated:""},{default:l(()=>[o(N,{name:0},{default:l(()=>[o(a)]),_:1}),o(N,{name:1},{default:l(()=>[o(s)]),_:1}),o(N,{name:2},{default:l(()=>[o(n)]),_:1}),o(N,{name:3},{default:l(()=>[o(p)]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var ut=j(ge,[["render",je]]);export{ut as default};
