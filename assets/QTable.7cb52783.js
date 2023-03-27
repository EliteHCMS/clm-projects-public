var gt=Object.defineProperty,bt=Object.defineProperties;var mt=Object.getOwnPropertyDescriptors;var Te=Object.getOwnPropertySymbols;var St=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable;var xe=(e,l,a)=>l in e?gt(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,w=(e,l)=>{for(var a in l||(l={}))St.call(l,a)&&xe(e,a,l[a]);if(Te)for(var a of Te(l))yt.call(l,a)&&xe(e,a,l[a]);return e},L=(e,l)=>bt(e,mt(l));import{bP as ee,h as r,bQ as Be,bT as ht,bI as $e,g as be,r as z,c as s,w as N,c7 as _t,cm as Oe,aK as wt,o as Pt,aJ as qt,aN as Ct,aL as kt,ch as Me,bV as je,cW as Rt,bY as Ae,cX as Tt,q as ge,x as Fe,d2 as xt,aI as Ee,d3 as Bt,d4 as Q,d5 as fe,bO as p,bK as Ot}from"./index.87503ddf.js";import{Q as Ft}from"./QList.c9f7bacc.js";import{Q as Lt}from"./QMarkupTable.c199091b.js";import{u as Vt,a as Dt,c as Ne,Q as $t}from"./QSelect.efc6f2cd.js";import{u as Mt,a as jt,b as At}from"./use-fullscreen.3ac3aaae.js";var Et=ee({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:a}){const b=be(),{proxy:{$q:i}}=b,g=u=>{a("click",u)};return()=>{if(e.props===void 0)return r("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:g},Be(l.default));let u,d;const c=b.vnode.key;if(c){if(u=e.props.colsMap[c],u===void 0)return}else u=e.props.col;if(u.sortable===!0){const n=u.align==="right"?"unshift":"push";d=ht(l.default,[]),d[n](r($e,{class:u.__iconClass,name:i.iconSet.table.arrowUp}))}else d=Be(l.default);const h={class:u.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:u.headerStyle,onClick:n=>{u.sortable===!0&&e.props.sort(u),g(n)}};return r("th",h,d)}}});function Qe(e,l){return r("div",e,[r("table",{class:"q-table"},l)])}const Nt={list:Ft,table:Lt},Qt=["list","table","__qtable"];var zt=ee({name:"QVirtualScroll",props:L(w({},Vt),{type:{type:String,default:"list",validator:e=>Qt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}}),setup(e,{slots:l,attrs:a}){let b;const i=z(null),g=s(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:u,localResetVirtualScroll:d,padVirtualScroll:c,onVirtualScrollEvt:h}=Dt({virtualScrollLength:g,getVirtualScrollTarget:C,getVirtualScrollEl:q}),n=s(()=>{if(g.value===0)return[];const F=(V,T)=>({index:u.value.from+T,item:V});return e.itemsFn===void 0?e.items.slice(u.value.from,u.value.to).map(F):e.itemsFn(u.value.from,u.value.to-u.value.from).map(F)}),S=s(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),P=s(()=>e.scrollTarget!==void 0?{}:{tabindex:0});N(g,()=>{d()}),N(()=>e.scrollTarget,()=>{y(),_()});function q(){return i.value.$el||i.value}function C(){return b}function _(){b=_t(q(),e.scrollTarget),b.addEventListener("scroll",h,Oe.passive)}function y(){b!==void 0&&(b.removeEventListener("scroll",h,Oe.passive),b=void 0)}function O(){let F=c(e.type==="list"?"div":"tbody",n.value.map(l.default));return l.before!==void 0&&(F=l.before().concat(F)),Me(l.after,F)}return wt(()=>{d()}),Pt(()=>{_()}),qt(()=>{_()}),Ct(()=>{y()}),kt(()=>{y()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Qe({ref:i,class:"q-table__middle "+S.value},O()):r(Nt[e.type],w(L(w({},a),{ref:i,class:[a.class,S.value]}),P.value),O)}}});const Ht={xs:2,sm:4,md:6,lg:10,xl:14};function Le(e,l,a){return{transform:l===!0?`translateX(${a.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Ut=ee({name:"QLinearProgress",props:L(w(w({},je),Rt),{value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean}),setup(e,{slots:l}){const{proxy:a}=be(),b=Ae(e,a.$q),i=Tt(e,Ht),g=s(()=>e.indeterminate===!0||e.query===!0),u=s(()=>e.reverse!==e.query),d=s(()=>L(w({},i.value!==null?i.value:{}),{"--q-linear-progress-speed":`${e.animationSpeed}ms`})),c=s(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),h=s(()=>Le(e.buffer!==void 0?e.buffer:1,u.value,a.$q)),n=s(()=>`with${e.instantFeedback===!0?"out":""}-transition`),S=s(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${n.value} q-linear-progress__track--${b.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),P=s(()=>Le(g.value===!0?1:e.value,u.value,a.$q)),q=s(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${n.value} q-linear-progress__model--${g.value===!0?"in":""}determinate`),C=s(()=>({width:`${e.value*100}%`})),_=s(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${n.value}`);return()=>{const y=[r("div",{class:S.value,style:h.value}),r("div",{class:q.value,style:P.value})];return e.stripe===!0&&g.value===!1&&y.push(r("div",{class:_.value,style:C.value})),r("div",{class:c.value,style:d.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Me(l.default,y))}}});function It(e,l){return new Date(e)-new Date(l)}const Kt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Wt(e,l,a,b){const i=s(()=>{const{sortBy:d}=l.value;return d&&a.value.find(c=>c.name===d)||null}),g=s(()=>e.sortMethod!==void 0?e.sortMethod:(d,c,h)=>{const n=a.value.find(q=>q.name===c);if(n===void 0||n.field===void 0)return d;const S=h===!0?-1:1,P=typeof n.field=="function"?q=>n.field(q):q=>q[n.field];return d.sort((q,C)=>{let _=P(q),y=P(C);return _==null?-1*S:y==null?1*S:n.sort!==void 0?n.sort(_,y,q,C)*S:ge(_)===!0&&ge(y)===!0?(_-y)*S:Fe(_)===!0&&Fe(y)===!0?It(_,y)*S:typeof _=="boolean"&&typeof y=="boolean"?(_-y)*S:([_,y]=[_,y].map(O=>(O+"").toLocaleString().toLowerCase()),_<y?-1*S:_===y?0:S)})});function u(d){let c=e.columnSortOrder;if(xt(d)===!0)d.sortOrder&&(c=d.sortOrder),d=d.name;else{const S=a.value.find(P=>P.name===d);S!==void 0&&S.sortOrder&&(c=S.sortOrder)}let{sortBy:h,descending:n}=l.value;h!==d?(h=d,n=c==="da"):e.binaryStateSort===!0?n=!n:n===!0?c==="ad"?h=null:n=!1:c==="ad"?n=!0:h=null,b({sortBy:h,descending:n,page:1})}return{columnToSort:i,computedSortMethod:g,sort:u}}const Gt={filter:[String,Object],filterMethod:Function};function Xt(e,l){const a=s(()=>e.filterMethod!==void 0?e.filterMethod:(b,i,g,u)=>{const d=i?i.toLowerCase():"";return b.filter(c=>g.some(h=>{const n=u(h,c)+"";return(n==="undefined"||n==="null"?"":n.toLowerCase()).indexOf(d)!==-1}))});return N(()=>e.filter,()=>{Ee(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:a}}function Jt(e,l){for(const a in l)if(l[a]!==e[a])return!1;return!0}function Ve(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Yt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function pt(e,l){const{props:a,emit:b}=e,i=z(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:a.rowsPerPageOptions.length>0?a.rowsPerPageOptions[0]:5},a.pagination)),g=s(()=>{const n=a["onUpdate:pagination"]!==void 0?w(w({},i.value),a.pagination):i.value;return Ve(n)}),u=s(()=>g.value.rowsNumber!==void 0);function d(n){c({pagination:n,filter:a.filter})}function c(n={}){Ee(()=>{b("request",{pagination:n.pagination||g.value,filter:n.filter||a.filter,getCellValue:l})})}function h(n,S){const P=Ve(w(w({},g.value),n));if(Jt(g.value,P)===!0){u.value===!0&&S===!0&&d(P);return}if(u.value===!0){d(P);return}a.pagination!==void 0&&a["onUpdate:pagination"]!==void 0?b("update:pagination",P):i.value=P}return{innerPagination:i,computedPagination:g,isServerSide:u,requestServerInteraction:c,setPagination:h}}function Zt(e,l,a,b,i,g){const{props:u,emit:d,proxy:{$q:c}}=e,h=s(()=>b.value===!0?a.value.rowsNumber||0:g.value),n=s(()=>{const{page:T,rowsPerPage:x}=a.value;return(T-1)*x}),S=s(()=>{const{page:T,rowsPerPage:x}=a.value;return T*x}),P=s(()=>a.value.page===1),q=s(()=>a.value.rowsPerPage===0?1:Math.max(1,Math.ceil(h.value/a.value.rowsPerPage))),C=s(()=>S.value===0?!0:a.value.page>=q.value),_=s(()=>(u.rowsPerPageOptions.includes(l.value.rowsPerPage)?u.rowsPerPageOptions:[l.value.rowsPerPage].concat(u.rowsPerPageOptions)).map(x=>({label:x===0?c.lang.table.allRows:""+x,value:x})));N(q,(T,x)=>{if(T===x)return;const H=a.value.page;T&&!H?i({page:1}):T<H&&i({page:T})});function y(){i({page:1})}function O(){const{page:T}=a.value;T>1&&i({page:T-1})}function F(){const{page:T,rowsPerPage:x}=a.value;S.value>0&&T*x<h.value&&i({page:T+1})}function V(){i({page:q.value})}return u["onUpdate:pagination"]!==void 0&&d("update:pagination",w({},a.value)),{firstRowIndex:n,lastRowIndex:S,isFirstPage:P,isLastPage:C,pagesNumber:q,computedRowsPerPageOptions:_,computedRowsNumber:h,firstPage:y,prevPage:O,nextPage:F,lastPage:V}}const el={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},tl=["update:selected","selection"];function ll(e,l,a,b){const i=s(()=>{const C={};return e.selected.map(b.value).forEach(_=>{C[_]=!0}),C}),g=s(()=>e.selection!=="none"),u=s(()=>e.selection==="single"),d=s(()=>e.selection==="multiple"),c=s(()=>a.value.length>0&&a.value.every(C=>i.value[b.value(C)]===!0)),h=s(()=>c.value!==!0&&a.value.some(C=>i.value[b.value(C)]===!0)),n=s(()=>e.selected.length);function S(C){return i.value[C]===!0}function P(){l("update:selected",[])}function q(C,_,y,O){l("selection",{rows:_,added:y,keys:C,evt:O});const F=u.value===!0?y===!0?_:[]:y===!0?e.selected.concat(_):e.selected.filter(V=>C.includes(b.value(V))===!1);l("update:selected",F)}return{hasSelectionMode:g,singleSelection:u,multipleSelection:d,allRowsSelected:c,someRowsSelected:h,rowsSelectedNumber:n,isRowSelected:S,clearSelection:P,updateSelection:q}}function De(e){return Array.isArray(e)?e.slice():[]}const al={expanded:Array},nl=["update:expanded"];function rl(e,l){const a=z(De(e.expanded));N(()=>e.expanded,u=>{a.value=De(u)});function b(u){return a.value.includes(u)}function i(u){e.expanded!==void 0?l("update:expanded",u):a.value=u}function g(u,d){const c=a.value.slice(),h=c.indexOf(u);d===!0?h===-1&&(c.push(u),i(c)):h!==-1&&(c.splice(h,1),i(c))}return{isRowExpanded:b,setExpanded:i,updateExpanded:g}}const ol={visibleColumns:Array};function il(e,l,a){const b=s(()=>{if(e.columns!==void 0)return e.columns;const d=e.rows[0];return d!==void 0?Object.keys(d).map(c=>({name:c,label:c.toUpperCase(),field:c,align:ge(d[c])?"right":"left",sortable:!0})):[]}),i=s(()=>{const{sortBy:d,descending:c}=l.value;return(e.visibleColumns!==void 0?b.value.filter(n=>n.required===!0||e.visibleColumns.includes(n.name)===!0):b.value).map(n=>{const S=n.align||"right",P=`text-${S}`;return L(w({},n),{align:S,__iconClass:`q-table__sort-icon q-table__sort-icon--${S}`,__thClass:P+(n.headerClasses!==void 0?" "+n.headerClasses:"")+(n.sortable===!0?" sortable":"")+(n.name===d?` sorted ${c===!0?"sort-desc":""}`:""),__tdStyle:n.style!==void 0?typeof n.style!="function"?()=>n.style:n.style:()=>null,__tdClass:n.classes!==void 0?typeof n.classes!="function"?()=>P+" "+n.classes:q=>P+" "+n.classes(q):()=>P})})}),g=s(()=>{const d={};return i.value.forEach(c=>{d[c.name]=c}),d}),u=s(()=>e.tableColspan!==void 0?e.tableColspan:i.value.length+(a.value===!0?1:0));return{colList:b,computedCols:i,computedColsMap:g,computedColspan:u}}const Z="q-table__bottom row items-center",ze={};Ne.forEach(e=>{ze[e]={}});var gl=ee({name:"QTable",props:w(w(w(w(w(w(w(w(L(w({rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0}},ze),{noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function}),je),Mt),ol),Gt),Yt),al),el),Kt),emits:["request","virtualScroll",...jt,...nl,...tl],setup(e,{slots:l,emit:a}){const b=be(),{proxy:{$q:i}}=b,g=Ae(e,i),{inFullscreen:u,toggleFullscreen:d}=At(),c=s(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),h=z(null),n=z(null),S=s(()=>e.grid!==!0&&e.virtualScroll===!0),P=s(()=>" q-table__card"+(g.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=s(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":P.value)+(g.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(u.value===!0?" fullscreen scroll":"")),C=s(()=>q.value+(e.loading===!0?" q-table--loading":""));N(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{S.value===!0&&n.value!==null&&n.value.reset()});const{innerPagination:_,computedPagination:y,isServerSide:O,requestServerInteraction:F,setPagination:V}=pt(b,A),{computedFilterMethod:T}=Xt(e,V),{isRowExpanded:x,setExpanded:H,updateExpanded:He}=rl(e,a),te=s(()=>{let t=e.rows;if(O.value===!0||t.length===0)return t;const{sortBy:o,descending:v}=y.value;return e.filter&&(t=T.value(t,e.filter,D.value,A)),Ge.value!==null&&(t=Xe.value(e.rows===t?t.slice():t,o,v)),t}),me=s(()=>te.value.length),M=s(()=>{let t=te.value;if(O.value===!0)return t;const{rowsPerPage:o}=y.value;return o!==0&&(I.value===0&&e.rows!==t?t.length>K.value&&(t=t.slice(0,K.value)):t=t.slice(I.value,K.value)),t}),{hasSelectionMode:j,singleSelection:Ue,multipleSelection:Se,allRowsSelected:Ie,someRowsSelected:ye,rowsSelectedNumber:le,isRowSelected:ae,clearSelection:Ke,updateSelection:U}=ll(e,a,M,c),{colList:We,computedCols:D,computedColsMap:he,computedColspan:_e}=il(e,y,j),{columnToSort:Ge,computedSortMethod:Xe,sort:ne}=Wt(e,y,We,V),{firstRowIndex:I,lastRowIndex:K,isFirstPage:re,isLastPage:oe,pagesNumber:W,computedRowsPerPageOptions:Je,computedRowsNumber:G,firstPage:ie,prevPage:ue,nextPage:se,lastPage:ce}=Zt(b,_,y,O,V,me),Ye=s(()=>M.value.length===0),pe=s(()=>{const t={};return Ne.forEach(o=>{t[o]=e[o]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function Ze(){S.value===!0&&n.value.reset()}function et(){if(e.grid===!0)return vt();const t=e.hideHeader!==!0?ke:null;if(S.value===!0){const v=l["top-row"],f=l["bottom-row"],m={default:R=>Pe(R.item,l.body,R.index)};if(v!==void 0){const R=r("tbody",v({cols:D.value}));m.before=t===null?()=>R:()=>[t()].concat(R)}else t!==null&&(m.before=t);return f!==void 0&&(m.after=()=>r("tbody",f({cols:D.value}))),r(zt,L(w({ref:n,class:e.tableClass,style:e.tableStyle},pe.value),{scrollTarget:e.virtualScrollTarget,items:M.value,type:"__qtable",tableColspan:_e.value,onVirtualScroll:lt}),m)}const o=[at()];return t!==null&&o.unshift(t()),Qe({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},o)}function tt(t,o){if(n.value!==null){n.value.scrollTo(t,o);return}t=parseInt(t,10);const v=h.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(v!==null){const f=h.value.querySelector(".q-table__middle.scroll"),m=v.offsetTop-e.virtualScrollStickySizeStart,R=m<f.scrollTop?"decrease":"increase";f.scrollTop=m,a("virtualScroll",{index:t,from:0,to:_.value.rowsPerPage-1,direction:R})}}function lt(t){a("virtualScroll",t)}function we(){return[r(Ut,{class:"q-table__linear-progress",color:e.color,dark:g.value,indeterminate:!0,trackColor:"transparent"})]}function Pe(t,o,v){const f=c.value(t),m=ae(f);if(o!==void 0)return o(qe({key:f,row:t,pageIndex:v,__trClass:m?"selected":""}));const R=l["body-cell"],k=D.value.map(B=>{const J=l[`body-cell-${B.name}`],Y=J!==void 0?J:R;return Y!==void 0?Y(nt({key:f,row:t,pageIndex:v,col:B})):r("td",{class:B.__tdClass(t),style:B.__tdStyle(t)},A(B,t))});if(j.value===!0){const B=l["body-selection"],J=B!==void 0?B(rt({key:f,row:t,pageIndex:v})):[r(fe,{modelValue:m,color:e.color,dark:g.value,dense:e.dense,"onUpdate:modelValue":(Y,ft)=>{U([f],[t],Y,ft)}})];k.unshift(r("td",{class:"q-table--col-auto-width"},J))}const $={key:f,class:{selected:m}};return e.onRowClick!==void 0&&($.class["cursor-pointer"]=!0,$.onClick=B=>{a("RowClick",B,t,v)}),e.onRowDblclick!==void 0&&($.class["cursor-pointer"]=!0,$.onDblclick=B=>{a("RowDblclick",B,t,v)}),e.onRowContextmenu!==void 0&&($.class["cursor-pointer"]=!0,$.onContextmenu=B=>{a("RowContextmenu",B,t,v)}),r("tr",$,k)}function at(){const t=l.body,o=l["top-row"],v=l["bottom-row"];let f=M.value.map((m,R)=>Pe(m,t,R));return o!==void 0&&(f=o({cols:D.value}).concat(f)),v!==void 0&&(f=f.concat(v({cols:D.value}))),r("tbody",f)}function qe(t){return de(t),t.cols=t.cols.map(o=>Q(w({},o),"value",()=>A(o,t.row))),t}function nt(t){return de(t),Q(t,"value",()=>A(t.col,t.row)),t}function rt(t){return de(t),t}function de(t){Object.assign(t,{cols:D.value,colsMap:he.value,sort:ne,rowIndex:I.value+t.pageIndex,color:e.color,dark:g.value,dense:e.dense}),j.value===!0&&Q(t,"selected",()=>ae(t.key),(o,v)=>{U([t.key],[t.row],o,v)}),Q(t,"expand",()=>x(t.key),o=>{He(t.key,o)})}function A(t,o){const v=typeof t.field=="function"?t.field(o):o[t.field];return t.format!==void 0?t.format(v,o):v}const E=s(()=>({pagination:y.value,pagesNumber:W.value,isFirstPage:re.value,isLastPage:oe.value,firstPage:ie,prevPage:ue,nextPage:se,lastPage:ce,inFullscreen:u.value,toggleFullscreen:d}));function ot(){const t=l.top,o=l["top-left"],v=l["top-right"],f=l["top-selection"],m=j.value===!0&&f!==void 0&&le.value>0,R="q-table__top relative-position row items-center";if(t!==void 0)return r("div",{class:R},[t(E.value)]);let k;if(m===!0?k=f(E.value).slice():(k=[],o!==void 0?k.push(r("div",{class:"q-table__control"},[o(E.value)])):e.title&&k.push(r("div",{class:"q-table__control"},[r("div",{class:["q-table__title",e.titleClass]},e.title)]))),v!==void 0&&(k.push(r("div",{class:"q-table__separator col"})),k.push(r("div",{class:"q-table__control"},[v(E.value)]))),k.length!==0)return r("div",{class:R},k)}const Ce=s(()=>ye.value===!0?null:Ie.value);function ke(){const t=it();return e.loading===!0&&l.loading===void 0&&t.push(r("tr",{class:"q-table__progress"},[r("th",{class:"relative-position",colspan:_e.value},we())])),r("thead",t)}function it(){const t=l.header,o=l["header-cell"];if(t!==void 0)return t(ve({header:!0})).slice();const v=D.value.map(f=>{const m=l[`header-cell-${f.name}`],R=m!==void 0?m:o,k=ve({col:f});return R!==void 0?R(k):r(Et,{key:f.name,props:k},()=>f.label)});if(Ue.value===!0&&e.grid!==!0)v.unshift(r("th",{class:"q-table--col-auto-width"}," "));else if(Se.value===!0){const f=l["header-selection"],m=f!==void 0?f(ve({})):[r(fe,{color:e.color,modelValue:Ce.value,dark:g.value,dense:e.dense,"onUpdate:modelValue":Re})];v.unshift(r("th",{class:"q-table--col-auto-width"},m))}return[r("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},v)]}function ve(t){return Object.assign(t,{cols:D.value,sort:ne,colsMap:he.value,color:e.color,dark:g.value,dense:e.dense}),Se.value===!0&&Q(t,"selected",()=>Ce.value,Re),t}function Re(t){ye.value===!0&&(t=!1),U(M.value.map(c.value),M.value,t)}const X=s(()=>{const t=[e.iconFirstPage||i.iconSet.table.firstPage,e.iconPrevPage||i.iconSet.table.prevPage,e.iconNextPage||i.iconSet.table.nextPage,e.iconLastPage||i.iconSet.table.lastPage];return i.lang.rtl===!0?t.reverse():t});function ut(){if(e.hideBottom===!0)return;if(Ye.value===!0){if(e.hideNoData===!0)return;const v=e.loading===!0?e.loadingLabel||i.lang.table.loading:e.filter?e.noResultsLabel||i.lang.table.noResults:e.noDataLabel||i.lang.table.noData,f=l["no-data"],m=f!==void 0?[f({message:v,icon:i.iconSet.table.warning,filter:e.filter})]:[r($e,{class:"q-table__bottom-nodata-icon",name:i.iconSet.table.warning}),v];return r("div",{class:Z+" q-table__bottom--nodata"},m)}const t=l.bottom;if(t!==void 0)return r("div",{class:Z},[t(E.value)]);const o=e.hideSelectedBanner!==!0&&j.value===!0&&le.value>0?[r("div",{class:"q-table__control"},[r("div",[(e.selectedRowsLabel||i.lang.table.selectedRecords)(le.value)])])]:[];if(e.hidePagination!==!0)return r("div",{class:Z+" justify-end"},ct(o));if(o.length>0)return r("div",{class:Z},o)}function st(t){V({page:1,rowsPerPage:t.value})}function ct(t){let o;const{rowsPerPage:v}=y.value,f=e.paginationLabel||i.lang.table.pagination,m=l.pagination,R=e.rowsPerPageOptions.length>1;if(t.push(r("div",{class:"q-table__separator col"})),R===!0&&t.push(r("div",{class:"q-table__control"},[r("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||i.lang.table.recordsPerPage]),r($t,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:v,options:Je.value,displayValue:v===0?i.lang.table.allRows:v,dark:g.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":st})])),m!==void 0)o=m(E.value);else if(o=[r("span",v!==0?{class:"q-table__bottom-item"}:{},[v?f(I.value+1,Math.min(K.value,G.value),G.value):f(1,me.value,G.value)])],v!==0&&W.value>1){const k={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(k.size="sm"),W.value>2&&o.push(r(p,L(w({key:"pgFirst"},k),{icon:X.value[0],disable:re.value,onClick:ie}))),o.push(r(p,L(w({key:"pgPrev"},k),{icon:X.value[1],disable:re.value,onClick:ue})),r(p,L(w({key:"pgNext"},k),{icon:X.value[2],disable:oe.value,onClick:se}))),W.value>2&&o.push(r(p,L(w({key:"pgLast"},k),{icon:X.value[3],disable:oe.value,onClick:ce})))}return t.push(r("div",{class:"q-table__control"},o)),t}function dt(){const t=e.gridHeader===!0?[r("table",{class:"q-table"},[ke()])]:e.loading===!0&&l.loading===void 0?we():void 0;return r("div",{class:"q-table__middle"},t)}function vt(){const t=l.item!==void 0?l.item:o=>{const v=o.cols.map(m=>r("div",{class:"q-table__grid-item-row"},[r("div",{class:"q-table__grid-item-title"},[m.label]),r("div",{class:"q-table__grid-item-value"},[m.value])]));if(j.value===!0){const m=l["body-selection"],R=m!==void 0?m(o):[r(fe,{modelValue:o.selected,color:e.color,dark:g.value,dense:e.dense,"onUpdate:modelValue":(k,$)=>{U([o.key],[o.row],k,$)}})];v.unshift(r("div",{class:"q-table__grid-item-row"},R),r(Ot,{dark:g.value}))}const f={class:["q-table__grid-item-card"+P.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(f.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(f.onClick=m=>{a("RowClick",m,o.row,o.pageIndex)}),e.onRowDblclick!==void 0&&(f.onDblclick=m=>{a("RowDblclick",m,o.row,o.pageIndex)})),r("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(o.selected===!0?" q-table__grid-item--selected":"")},[r("div",f,v)])};return r("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},M.value.map((o,v)=>t(qe({key:c.value(o),row:o,pageIndex:v}))))}return Object.assign(b.proxy,{requestServerInteraction:F,setPagination:V,firstPage:ie,prevPage:ue,nextPage:se,lastPage:ce,isRowSelected:ae,clearSelection:Ke,isRowExpanded:x,setExpanded:H,sort:ne,resetVirtualScroll:Ze,scrollTo:tt,getCellValue:A}),Bt(b.proxy,{filteredSortedRows:()=>te.value,computedRows:()=>M.value,computedRowsNumber:()=>G.value}),()=>{const t=[ot()],o={ref:h,class:C.value};return e.grid===!0?t.push(dt()):Object.assign(o,{class:[o.class,e.cardClass],style:e.cardStyle}),t.push(et(),ut()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),r("div",o,t)}}});export{Et as Q,gl as a};
