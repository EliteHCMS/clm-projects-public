import{bF as qe,bG as ze,r as p,bH as Me,c as n,bI as Z,bJ as vt,aM as ft,aI as mt,bK as Pe,bL as Ie,aK as $e,h as b,bM as ht,bj as se,g as Ce,bN as Ue,bO as We,bP as bt,i as gt,bQ as pt,bR as Fe,bS as yt,w as z,aH as xe,o as Ke,bT as Be,bU as Ge,bV as St,k as ne,_ as ie,z as w,am as T,bh as _,bW as ee,d as h,bX as le,an as V,at as Te,aa as Y,E as ce,bY as Le,Z as _t,bZ as Xe,b_ as wt,b$ as ke,bC as kt,c0 as qt,aY as D,A as J,aX as Ye,G as me,F as Ze,c1 as Je,c2 as zt,C as K,c3 as Mt,c4 as $t,c5 as Ct,c6 as fe}from"./index.b5f0fe3c.js";import{Q as Qe,a as Tt}from"./QHeader.d8b0b90b.js";import{Q as Lt}from"./QMenu.51c983fc.js";import{Q as je}from"./QToolbar.e8e3864e.js";import{Q as Ot}from"./QImg.2a9eae01.js";import{Q as et}from"./QList.5e8ce258.js";import{Q as Ae}from"./QResizeObserver.58651f75.js";import{Q as Pt,a as It,b as xt}from"./QLayout.76e2ec59.js";import{T as ue}from"./TouchPan.1d5c189f.js";import{C as Bt}from"./ClosePopup.9d35c2f1.js";import{Q as he,a as Qt}from"./QSelect.659fc465.js";import{Q as jt}from"./QSlideTransition.2d8df74d.js";import{u as At}from"./use-quasar.0c044b38.js";import{u as Ht}from"./i18n.d12f430e.js";import{u as tt,b as He,c as Dt,q as De}from"./quickbase.8650d165.js";import{_ as Vt}from"./KioskLogin.4dd905d3.js";import{_ as Nt}from"./languageSelector.ebefc43a.js";import{_ as Et}from"./version.486ffeab.js";import"./position-engine.7869b9b0.js";import"./selection.9755dcd0.js";import"./touch.d8ab472d.js";import"./QChip.1f1c4c1f.js";import"./rtl.65b79c69.js";import"./_commonjsHelpers.dfee5925.js";import"./dayjs.62e4342b.js";import"./localForage.6d9c618d.js";import"./index.7dbe61ef.js";import"./api.7db09cb0.js";import"./array.0b03d609.js";const Ve=["vertical","horizontal"],we={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Ne={prevent:!0,mouse:!0,mouseAllDir:!0},Ee=e=>e>=250?50:Math.ceil(e/5);var Rt=qe({name:"QScrollArea",props:{...ze,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:y,emit:S}){const m=p(!1),d=p(!1),s=p(!1),i={vertical:p(0),horizontal:p(0)},t={vertical:{ref:p(null),position:p(0),size:p(0)},horizontal:{ref:p(null),position:p(0),size:p(0)}},C=Ce(),o=Me(e,C.proxy.$q);let $,x;const k=p(null),v=n(()=>"q-scrollarea"+(o.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=n(()=>{const l=t.vertical.size.value-i.vertical.value;if(l<=0)return 0;const u=Z(t.vertical.position.value/l,0,1);return Math.round(u*1e4)/1e4}),t.vertical.thumbHidden=n(()=>(e.visible===null?s.value:e.visible)!==!0&&m.value===!1&&d.value===!1||t.vertical.size.value<=i.vertical.value+1),t.vertical.thumbStart=n(()=>t.vertical.percentage.value*(i.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=n(()=>Math.round(Z(i.vertical.value*i.vertical.value/t.vertical.size.value,Ee(i.vertical.value),i.vertical.value))),t.vertical.style=n(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=n(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=n(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=n(()=>{const l=t.horizontal.size.value-i.horizontal.value;if(l<=0)return 0;const u=Z(t.horizontal.position.value/l,0,1);return Math.round(u*1e4)/1e4}),t.horizontal.thumbHidden=n(()=>(e.visible===null?s.value:e.visible)!==!0&&m.value===!1&&d.value===!1||t.horizontal.size.value<=i.horizontal.value+1),t.horizontal.thumbStart=n(()=>t.horizontal.percentage.value*(i.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=n(()=>Math.round(Z(i.horizontal.value*i.horizontal.value/t.horizontal.size.value,Ee(i.horizontal.value),i.horizontal.value))),t.horizontal.style=n(()=>({...e.thumbStyle,...e.horizontalThumbStyle,left:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=n(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=n(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const Q=n(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),M=[[ue,l=>{te(l,"vertical")},void 0,{vertical:!0,...Ne}]],g=[[ue,l=>{te(l,"horizontal")},void 0,{horizontal:!0,...Ne}]];function A(){const l={};return Ve.forEach(u=>{const f=t[u];l[u+"Position"]=f.position.value,l[u+"Percentage"]=f.percentage.value,l[u+"Size"]=f.size.value,l[u+"ContainerSize"]=i[u].value}),l}const N=vt(()=>{const l=A();l.ref=C.proxy,S("scroll",l)},0);function q(l,u,f){if(Ve.includes(l)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(l==="vertical"?Ie:Pe)(k.value,u,f)}function E({height:l,width:u}){let f=!1;i.vertical.value!==l&&(i.vertical.value=l,f=!0),i.horizontal.value!==u&&(i.horizontal.value=u,f=!0),f===!0&&W()}function R({position:l}){let u=!1;t.vertical.position.value!==l.top&&(t.vertical.position.value=l.top,u=!0),t.horizontal.position.value!==l.left&&(t.horizontal.position.value=l.left,u=!0),u===!0&&W()}function re({height:l,width:u}){t.horizontal.size.value!==u&&(t.horizontal.size.value=u,W()),t.vertical.size.value!==l&&(t.vertical.size.value=l,W())}function te(l,u){const f=t[u];if(l.isFirst===!0){if(f.thumbHidden.value===!0)return;x=f.position.value,d.value=!0}else if(d.value!==!0)return;l.isFinal===!0&&(d.value=!1);const F=we[u],oe=i[u].value,be=(f.size.value-oe)/(oe-f.thumbSize.value),de=l.distance[F.dist],ge=x+(l.direction===F.dir?1:-1)*de*be;j(ge,u)}function U(l,u){const f=t[u];if(f.thumbHidden.value!==!0){const F=l[we[u].offset];if(F<f.thumbStart.value||F>f.thumbStart.value+f.thumbSize.value){const oe=F-f.thumbSize.value/2;j(oe/i[u].value*f.size.value,u)}f.ref.value!==null&&f.ref.value.dispatchEvent(new MouseEvent(l.type,l))}}function I(l){U(l,"vertical")}function H(l){U(l,"horizontal")}function W(){m.value===!0?clearTimeout($):m.value=!0,$=setTimeout(()=>{m.value=!1},e.delay),e.onScroll!==void 0&&N()}function j(l,u){k.value[we[u].scroll]=l}function r(){s.value=!0}function L(){s.value=!1}Object.assign(C.proxy,{getScrollTarget:()=>k.value,getScroll:A,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:q,setScrollPercentage(l,u,f){q(l,u*(t[l].size.value-i[l].value),f)}});let O=null;return ft(()=>{O={top:t.vertical.position.value,left:t.horizontal.position.value}}),mt(()=>{if(O===null)return;const l=k.value;l!==null&&(Pe(l,O.left),Ie(l,O.top))}),$e(N.cancel),()=>b("div",{class:v.value,onMouseenter:r,onMouseleave:L},[b("div",{ref:k,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[b("div",{class:"q-scrollarea__content absolute",style:Q.value},ht(y.default,[b(Ae,{debounce:0,onResize:re})])),b(Pt,{axis:"both",onScroll:R})]),b(Ae,{debounce:0,onResize:E}),b("div",{class:t.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:I}),b("div",{class:t.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:H}),se(b("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),M),se(b("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),g)])}});const Re=150;var Ut=qe({name:"QDrawer",inheritAttrs:!1,props:{...Ue,...ze,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...We,"on-layout","mini-state"],setup(e,{slots:y,emit:S,attrs:m}){const d=Ce(),{proxy:{$q:s}}=d,i=Me(e,s),{preventBodyScroll:t}=St(),{registerTimeout:C}=bt(),o=gt(pt,()=>{console.error("QDrawer needs to be child of QLayout")});let $,x,k;const v=p(e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint),Q=n(()=>e.mini===!0&&v.value!==!0),M=n(()=>Q.value===!0?e.miniWidth:e.width),g=p(e.showIfAbove===!0&&v.value===!1?!0:e.modelValue===!0),A=n(()=>e.persistent!==!0&&(v.value===!0||F.value===!0));function N(a,c){if(re(),a!==!1&&o.animate(),B(0),v.value===!0){const P=o.instances[O.value];P!==void 0&&P.belowBreakpoint===!0&&P.hide(!1),G(1),o.isContainer.value!==!0&&t(!0)}else G(0),a!==!1&&ye(!1);C(()=>{a!==!1&&ye(!0),c!==!0&&S("show",a)},Re)}function q(a,c){te(),a!==!1&&o.animate(),G(0),B(H.value*M.value),Se(),c!==!0&&C(()=>{S("hide",a)},Re)}const{show:E,hide:R}=Fe({showing:g,hideOnRouteChange:A,handleShow:N,handleHide:q}),{addToHistory:re,removeFromHistory:te}=yt(g,R,A),U={belowBreakpoint:v,hide:R},I=n(()=>e.side==="right"),H=n(()=>(s.lang.rtl===!0?-1:1)*(I.value===!0?1:-1)),W=p(0),j=p(!1),r=p(!1),L=p(M.value*H.value),O=n(()=>I.value===!0?"left":"right"),l=n(()=>g.value===!0&&v.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:M.value:0),u=n(()=>e.overlay===!0||e.miniToOverlay===!0||o.view.value.indexOf(I.value?"R":"L")>-1||s.platform.is.ios===!0&&o.isContainer.value===!0),f=n(()=>e.overlay===!1&&g.value===!0&&v.value===!1),F=n(()=>e.overlay===!0&&g.value===!0&&v.value===!1),oe=n(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&j.value===!1?" hidden":"")),be=n(()=>({backgroundColor:`rgba(0,0,0,${W.value*.4})`})),de=n(()=>I.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),ge=n(()=>I.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),at=n(()=>{const a={};return o.header.space===!0&&de.value===!1&&(u.value===!0?a.top=`${o.header.offset}px`:o.header.space===!0&&(a.top=`${o.header.size}px`)),o.footer.space===!0&&ge.value===!1&&(u.value===!0?a.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(a.bottom=`${o.footer.size}px`)),a}),ot=n(()=>{const a={width:`${M.value}px`,transform:`translateX(${L.value}px)`};return v.value===!0?a:Object.assign(a,at.value)}),lt=n(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),nt=n(()=>`q-drawer q-drawer--${e.side}`+(r.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(i.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(v.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${Q.value===!0?"mini":"standard"}`+(u.value===!0||f.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(de.value===!0?" q-drawer--top-padding":""))),it=n(()=>{const a=s.lang.rtl===!0?e.side:O.value;return[[ue,ct,void 0,{[a]:!0,mouse:!0}]]}),rt=n(()=>{const a=s.lang.rtl===!0?O.value:e.side;return[[ue,Oe,void 0,{[a]:!0,mouse:!0}]]}),ut=n(()=>{const a=s.lang.rtl===!0?O.value:e.side;return[[ue,Oe,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function pe(){dt(v,e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint)}z(v,a=>{a===!0?($=g.value,g.value===!0&&R(!1)):e.overlay===!1&&e.behavior!=="mobile"&&$!==!1&&(g.value===!0?(B(0),G(0),Se()):E(!1))}),z(()=>e.side,(a,c)=>{o.instances[c]===U&&(o.instances[c]=void 0,o[c].space=!1,o[c].offset=0),o.instances[a]=U,o[a].size=M.value,o[a].space=f.value,o[a].offset=l.value}),z(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&pe()}),z(()=>e.behavior+e.breakpoint,pe),z(o.isContainer,a=>{g.value===!0&&t(a!==!0),a===!0&&pe()}),z(o.scrollbarWidth,()=>{B(g.value===!0?0:void 0)}),z(l,a=>{X("offset",a)}),z(f,a=>{S("on-layout",a),X("space",a)}),z(I,()=>{B()}),z(M,a=>{B(),_e(e.miniToOverlay,a)}),z(()=>e.miniToOverlay,a=>{_e(a,M.value)}),z(()=>s.lang.rtl,()=>{B()}),z(()=>e.mini,()=>{e.modelValue===!0&&(st(),o.animate())}),z(Q,a=>{S("mini-state",a)});function B(a){a===void 0?xe(()=>{a=g.value===!0?0:M.value,B(H.value*a)}):(o.isContainer.value===!0&&I.value===!0&&(v.value===!0||Math.abs(a)===M.value)&&(a+=H.value*o.scrollbarWidth.value),L.value=a)}function G(a){W.value=a}function ye(a){const c=a===!0?"remove":o.isContainer.value!==!0?"add":"";c!==""&&document.body.classList[c]("q-body--drawer-toggle")}function st(){clearTimeout(x),d.proxy&&d.proxy.$el&&d.proxy.$el.classList.add("q-drawer--mini-animate"),r.value=!0,x=setTimeout(()=>{r.value=!1,d&&d.proxy&&d.proxy.$el&&d.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ct(a){if(g.value!==!1)return;const c=M.value,P=Z(a.distance.x,0,c);if(a.isFinal===!0){P>=Math.min(75,c)===!0?E():(o.animate(),G(0),B(H.value*c)),j.value=!1;return}B((s.lang.rtl===!0?I.value!==!0:I.value)?Math.max(c-P,0):Math.min(0,P-c)),G(Z(P/c,0,1)),a.isFirst===!0&&(j.value=!0)}function Oe(a){if(g.value!==!0)return;const c=M.value,P=a.direction===e.side,ve=(s.lang.rtl===!0?P!==!0:P)?Z(a.distance.x,0,c):0;if(a.isFinal===!0){Math.abs(ve)<Math.min(75,c)===!0?(o.animate(),G(1),B(0)):R(),j.value=!1;return}B(H.value*ve),G(Z(1-ve/c,0,1)),a.isFirst===!0&&(j.value=!0)}function Se(){t(!1),ye(!0)}function X(a,c){o.update(e.side,a,c)}function dt(a,c){a.value!==c&&(a.value=c)}function _e(a,c){X("size",a===!0?e.miniWidth:c)}return o.instances[e.side]=U,_e(e.miniToOverlay,M.value),X("space",f.value),X("offset",l.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&S("update:modelValue",!0),Ke(()=>{S("on-layout",f.value),S("mini-state",Q.value),$=e.showIfAbove===!0;const a=()=>{(g.value===!0?N:q)(!1,!0)};if(o.totalWidth.value!==0){xe(a);return}k=z(o.totalWidth,()=>{k(),k=void 0,g.value===!1&&e.showIfAbove===!0&&v.value===!1?E(!1):a()})}),$e(()=>{k!==void 0&&k(),clearTimeout(x),g.value===!0&&Se(),o.instances[e.side]===U&&(o.instances[e.side]=void 0,X("size",0),X("offset",0),X("space",!1))}),()=>{const a=[];v.value===!0&&(e.noSwipeOpen===!1&&a.push(se(b("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),it.value)),a.push(Be("div",{ref:"backdrop",class:oe.value,style:be.value,"aria-hidden":"true",onClick:R},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>ut.value)));const c=Q.value===!0&&y.mini!==void 0,P=[b("div",{...m,key:""+c,class:[lt.value,m.class]},c===!0?y.mini():Ge(y.default))];return e.elevated===!0&&g.value===!0&&P.push(b("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(Be("aside",{ref:"content",class:nt.value,style:ot.value},P,"contentclose",e.noSwipeClose!==!0&&v.value===!0,()=>rt.value)),b("div",{class:"q-drawer-container"},a)}}});const Wt=ne({name:"MenuLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},to:{type:Object,default:()=>({path:"",exact:!0})},icon:{type:String,default:""},mini:{type:Boolean,default:!1},subMenu:{type:Array,default:null}}});function Ft(e,y,S,m,d,s){return w(),T(Le,{to:e.to,class:ce(["rounded-borders bg-white",{"q-ma-sm":!e.mini,"q-ma-xs":e.mini}]),"active-class":e.mini?"brand-active-menu text-white":"brand-active-menu text-white q-py-md",exact:""},{default:_(()=>[e.icon?(w(),T(ee,{key:0,avatar:""},{default:_(()=>[h(le,{name:e.icon},null,8,["name"])]),_:1})):V("",!0),h(ee,null,{default:_(()=>[h(he,null,{default:_(()=>[Te(Y(e.title),1)]),_:1})]),_:1})]),_:1},8,["to","class","active-class"])}var Kt=ie(Wt,[["render",Ft]]);const ae=_t({}),Gt=Object.keys(Xe);var Xt=qe({name:"QExpansionItem",props:{...Xe,...Ue,...ze,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...We,"click","after-show","after-hide"],setup(e,{slots:y,emit:S}){const{proxy:{$q:m}}=Ce(),d=Me(e,m),s=p(e.modelValue!==null?e.modelValue:e.defaultOpened),i=p(null),{hide:t,toggle:C}=Fe({showing:s});let o,$;const x=n(()=>`q-expansion-item q-item-type q-expansion-item--${s.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),k=n(()=>{if(e.contentInsetLevel===void 0)return null;const r=m.lang.rtl===!0?"Right":"Left";return{["padding"+r]:e.contentInsetLevel*56+"px"}}),v=n(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),Q=n(()=>{const r={};return Gt.forEach(L=>{r[L]=e[L]}),r}),M=n(()=>v.value===!0||e.expandIconToggle!==!0),g=n(()=>e.expandedIcon!==void 0&&s.value===!0?e.expandedIcon:e.expandIcon||m.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),A=n(()=>e.disable!==!0&&(v.value===!0||e.expandIconToggle===!0));z(()=>e.group,r=>{$!==void 0&&$(),r!==void 0&&te()});function N(r){v.value!==!0&&C(r),S("click",r)}function q(r){r.keyCode===13&&E(r,!0)}function E(r,L){L!==!0&&i.value!==null&&i.value.focus(),C(r),qt(r)}function R(){S("after-show")}function re(){S("after-hide")}function te(){o===void 0&&(o=wt()),s.value===!0&&(ae[e.group]=o);const r=z(s,O=>{O===!0?ae[e.group]=o:ae[e.group]===o&&delete ae[e.group]}),L=z(()=>ae[e.group],(O,l)=>{l===o&&O!==void 0&&O!==o&&t()});$=()=>{r(),L(),ae[e.group]===o&&delete ae[e.group],$=void 0}}function U(){const r={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},L=[b(le,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&s.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:g.value})];return A.value===!0&&(Object.assign(r,{tabindex:0,onClick:E,onKeyup:q}),L.unshift(b("div",{ref:i,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),b(ee,r,()=>L)}function I(){let r;return y.header!==void 0?r=[].concat(y.header()):(r=[b(ee,()=>[b(he,{lines:e.labelLines},()=>e.label||""),e.caption?b(he,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&r[e.switchToggleSide===!0?"push":"unshift"](b(ee,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>b(le,{name:e.icon})))),e.disable!==!0&&r[e.switchToggleSide===!0?"unshift":"push"](U()),r}function H(){const r={ref:"item",style:e.headerStyle,class:e.headerClass,dark:d.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return M.value===!0&&(r.clickable=!0,r.onClick=N,v.value===!0&&Object.assign(r,Q.value)),b(Le,r,I)}function W(){return se(b("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:k.value},Ge(y.default)),[[kt,s.value]])}function j(){const r=[H(),b(jt,{duration:e.duration,onShow:R,onHide:re},W)];return e.expandSeparator===!0&&r.push(b(ke,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:d.value}),b(ke,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:d.value})),r}return e.group!==void 0&&te(),$e(()=>{$!==void 0&&$()}),()=>b("div",{class:x.value},[b("div",{class:"q-expansion-item__container relative-position"},j())])}});const Yt=ne({name:"MenuLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},to:{type:Object,default:()=>({path:"",exact:!0})},icon:{type:String,default:""},mini:{type:Boolean,default:!1},subMenu:{type:Array,default:null}}});function Zt(e,y,S,m,d,s){return w(),T(Le,{to:e.to,class:ce(["rounded-borders text-white",{"q-ml-sm":!e.mini,"q-mt-sm":!e.mini,"q-ma-xs":e.mini}]),"active-class":"brand-active-menu text-white",exact:""},{default:_(()=>[e.icon?(w(),T(ee,{key:0,avatar:""},{default:_(()=>[h(le,{name:e.icon},null,8,["name"])]),_:1})):V("",!0),h(ee,null,{default:_(()=>[h(he,null,{default:_(()=>[Te(Y(e.title),1)]),_:1})]),_:1})]),_:1},8,["to","class"])}var Jt=ie(Yt,[["render",Zt]]);const ea=ne({name:"MenuExpanded",components:{MenuSubLink:Jt},props:{title:{type:String,required:!0},caption:{type:String,default:""},to:{type:Object,default:()=>({path:"",exact:!0})},icon:{type:String,default:""},mini:{type:Boolean,default:!1},subMenu:{type:Array,default:null}}});function ta(e,y,S,m,d,s){const i=D("MenuSubLink");return w(),T(Xt,{icon:e.icon,label:e.title,class:ce(["rounded-borders bg-white",{"q-ma-sm":!e.mini,"q-ma-xs":e.mini}]),"active-class":"brand-active-menu text-white",exact:""},{default:_(()=>[h(ke),h(ee,null,{default:_(()=>[h(et,null,{default:_(()=>[(w(!0),J(Ze,null,Ye(e.subMenu,t=>(w(),T(i,me({key:t},t,{mini:e.mini}),null,16,["mini"]))),128))]),_:1})]),_:1})]),_:1},8,["icon","label","class"])}var aa=ie(ea,[["render",ta]]);const oa=ne({name:"MenuNav",components:{MenuLink:Kt,MenuExpanded:aa},props:{title:{type:String,required:!0},caption:{type:String,default:""},to:{type:Object,default:()=>({path:"",exact:!0})},icon:{type:String,default:""},mini:{type:Boolean,default:!1},subMenu:{type:Array,default:null}}});function la(e,y,S,m,d,s){const i=D("MenuLink"),t=D("MenuExpanded");return w(),J("div",null,[!e.subMenu&&e.to?(w(),T(i,me({key:0},{...e.$props,...e.$attrs},{mini:e.mini}),null,16,["mini"])):e.subMenu&&e.subMenu.length>0?(w(),T(t,me({key:1},{...e.$props,...e.$attrs},{mini:e.mini}),null,16,["mini"])):V("",!0)])}var na=ie(oa,[["render",la]]);const ia=ne({setup(){const e=tt(),{userAccess:y,updateActive:S}=He(),{active:m}=Je(He()),d=p(null);z(d,(i,t)=>{S({project:i})});const s=n(()=>y||[]);return Ke(()=>{d.value=m.value}),{userStore:e,model:d,options:s,active:m}}}),ra={class:"q-pt-sm q-px-md"},ua={class:"row items-center"},sa=Te("Project:"),ca={class:"text-primary q-ml-md"},da={key:0,class:"col-12 col-md-6"};function va(e,y,S,m,d,s){return w(),J("div",ra,[h(Mt,{flat:""},{default:_(()=>[h(zt,{class:"q-pb-none q-mb-none"},{default:_(()=>[K("div",ua,[K("div",{class:ce(e.options.length>1?"col-12 col-md-6":"col-12")},[K("div",{class:ce(["text-dark",e.$q.screen.lt.md?"text-body1":"text-h5"])},[sa,K("span",ca,Y(e.active[20]),1)],2)],2),e.options.length>1?(w(),J("div",da,[h(Qt,{label:"Change Project","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.model,"onUpdate:modelValue":y[0]||(y[0]=i=>e.model=i),options:e.options,"option-label":"20","display-value":`${e.model?e.model[20]:""}`},null,8,["modelValue","options","display-value"])])):V("",!0)])]),_:1})]),_:1})])}var fa=ie(ia,[["render",va]]);const ma=ne({name:"MainLayout",components:{MenuNav:na,kioskLogin:Vt,languageSelector:Nt,changeProject:fa,version:Et},setup(){const e=At(),{locale:y}=Ht(),S=p(!1),m=p(!1),d=p(!1),s=p(!1),i=p(!1),t=$t(),C=Ct(),o=tt(),$=Dt(),{toolbarTitle:x}=$,{onKiosk:k,activeMenu:v,pageType:Q,startPageEnabled:M}=Je($),g=async q=>{await De.checkKioskStatus(q)||(i.value=!0)};if(k.value&&g(!0),C.query){const q=Object.assign({},C.query);delete q.office_id,delete q.qr,t.replace({query:q})}z(()=>C.query,async()=>{if(k.value&&g(!1),C.query.office_id){const q=Object.assign({},C.query);delete q.office_id,q.qr&&(De.checkInUser(),delete q.qr),t.replace({query:q})}});const A=async()=>{k.value&&(y.value="en-US"),o.logout().then(()=>{M.value&&k.value?t.replace({name:"start"}):t.replace({name:"login"})})},N=()=>{A()};return{tab:p("mails"),userStore:o,leftDrawerOpen:S,rightDrawerOpen:d,miniState:m,miniHover:s,kioskPrompt:i,onIdle:N,onKiosk:k,activeMenu:v,miniMouseOver(){m.value===!0&&(s.value=!1)},miniMouseOut(){m.value===!0&&(s.value=!0)},toggleLeftDrawer(){e.screen.gt.sm?(m.value=!m.value,m.value===!0&&(s.value=!0)):S.value=!S.value},toggleRightDrawer(){d.value=!d.value},drawerClick(q){m.value&&(m.value=!1,q.stopPropagation())},logout:A,toolbarTitle:x,pageType:Q,startPageEnabled:M}}}),ha={key:0,class:"q-mr-sm q-ml-sm",src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo-white.png",alt:"BrandSafway Logo",height:"25"},ba={key:0},ga={key:1},pa={class:"q-gutter-sm row items-center no-wrap"},ya={class:"row no-wrap q-pa-md"},Sa={class:"column items-center"},_a={class:"text-subtitle1 q-mt-md q-mb-xs"};function wa(e,y,S,m,d,s){const i=D("languageSelector"),t=D("MenuNav"),C=D("change-project"),o=D("router-view"),$=D("kioskLogin"),x=D("v-idle"),k=D("version");return w(),T(It,{view:"hHh lpR fFf"},{default:_(()=>[h(Tt,{elevated:""},{default:_(()=>[h(je,{style:{height:"62px"}},{default:_(()=>[h(fe,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),e.$q.screen.gt.sm?(w(),J("img",ha)):V("",!0),h(Qe,null,{default:_(()=>[e.$q.screen.lt.sm?(w(),J("span",ba)):(w(),J("span",ga,Y(e.toolbarTitle),1))]),_:1}),K("div",pa,[h(i,{dense:"",borderless:"",class:"lang-white"}),h(fe,{flat:"",dense:"",color:"white"},{default:_(()=>[K("div",null,Y(e.userStore.getUser[35])+" "+Y(e.userStore.getUser[37]),1),h(le,{right:"",size:"2.2em",name:"account_circle"}),h(Lt,null,{default:_(()=>[K("div",ya,[K("div",Sa,[h(le,{right:"",size:"72px",name:"account_circle",class:"q-mr-md"}),K("div",_a,Y(e.userStore.getUser[35])+" "+Y(e.userStore.getUser[37]),1),se(h(fe,{color:"primary",label:e.$t("logout"),push:"",size:"sm",onClick:e.logout},null,8,["label","onClick"]),[[Bt]])])])]),_:1})]),_:1})])]),_:1})]),_:1}),h(Ut,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":y[0]||(y[0]=v=>e.leftDrawerOpen=v),side:"left","show-if-above":"",bordered:"",mini:e.miniState&&e.miniHover,onMouseover:e.miniMouseOver,onMouseout:e.miniMouseOut,onClickCapture:e.drawerClick,class:"text-primary bg-white"},{default:_(()=>[h(Rt,{class:"fit"},{default:_(()=>[e.$q.screen.lt.sm?(w(),T(je,{key:0,style:{height:"64px"}},{default:_(()=>[h(Qe,{class:"items-center"},{default:_(()=>[h(Ot,{src:"https://cdn.jsdelivr.net/gh/EliteHCMS/assets@latest/public/logo.svg",style:{"max-width":"245px"},fit:"center",class:"q-ml-md"})]),_:1})]),_:1})):V("",!0),h(et,{class:"q-mt-sm"},{default:_(()=>[(w(!0),J(Ze,null,Ye(e.activeMenu,v=>(w(),T(t,me({key:v.title},v,{mini:e.miniState}),null,16,["mini"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue","mini","onMouseover","onMouseout","onClickCapture"]),h(xt,null,{default:_(()=>[e.pageType==="Project User"?(w(),T(C,{key:0,class:"q-mb-md"})):V("",!0),h(o)]),_:1}),e.onKiosk?(w(),T($,{key:0,modelValue:e.kioskPrompt,"onUpdate:modelValue":y[1]||(y[1]=v=>e.kioskPrompt=v)},null,8,["modelValue"])):V("",!0),e.onKiosk?(w(),T(x,{key:1,onIdle:e.onIdle,duration:300,style:{display:"none"}},null,8,["onIdle"])):V("",!0),e.onKiosk&&e.startPageEnabled?(w(),T(fe,{key:2,icon:"o_home",onClick:e.onIdle,class:"z-max home-button-main",size:"xl",ripple:!0},null,8,["onClick"])):V("",!0),h(k)]),_:1})}var Ja=ie(ma,[["render",wa]]);export{Ja as default};
