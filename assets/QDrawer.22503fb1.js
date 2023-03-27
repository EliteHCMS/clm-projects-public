var He=Object.defineProperty,Le=Object.defineProperties;var We=Object.getOwnPropertyDescriptors;var ce=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable;var ve=(e,d,v)=>d in e?He(e,d,{enumerable:!0,configurable:!0,writable:!0,value:v}):e[d]=v,M=(e,d)=>{for(var v in d||(d={}))je.call(d,v)&&ve(e,v,d[v]);if(ce)for(var v of ce(d))Qe.call(d,v)&&ve(e,v,d[v]);return e},Q=(e,d)=>Le(e,We(d));import{bP as ge,bV as we,r as h,bY as qe,c as i,cd as $,ce as Fe,w as b,cf as oe,aN as Re,aJ as Ve,cg as de,aL as _e,h as w,ch as Ie,bk as ne,g as ke,bU as Ne,bX as Ee,b_ as Ue,i as Xe,bR as ie,bS as Ye,c0 as Je,ci as Ke,aI as fe,o as Ge,cj as he,bQ as Ze,ck as et}from"./index.87503ddf.js";import{Q as be}from"./QResizeObserver.94a1aff9.js";import{b as tt}from"./QLayout.7e048796.js";import{T as E}from"./TouchPan.be12355d.js";const me=["vertical","horizontal"],ue={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},ye={prevent:!0,mouse:!0,mouseAllDir:!0},ze=e=>e>=250?50:Math.ceil(e/5);var nt=ge({name:"QScrollArea",props:Q(M({},we),{thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function}),setup(e,{slots:d,emit:v}){const x=h(!1),y=h(!1),z=h(!1),s={vertical:h(0),horizontal:h(0)},a={vertical:{ref:h(null),position:h(0),size:h(0)},horizontal:{ref:h(null),position:h(0),size:h(0)}},{proxy:C}=ke(),G=qe(e,C.$q);let r=null,L;const m=h(null),A=i(()=>"q-scrollarea"+(G.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=i(()=>{const l=a.vertical.size.value-s.vertical.value;if(l<=0)return 0;const o=$(a.vertical.position.value/l,0,1);return Math.round(o*1e4)/1e4}),a.vertical.thumbHidden=i(()=>(e.visible===null?z.value:e.visible)!==!0&&x.value===!1&&y.value===!1||a.vertical.size.value<=s.vertical.value+1),a.vertical.thumbStart=i(()=>a.vertical.percentage.value*(s.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=i(()=>Math.round($(s.vertical.value*s.vertical.value/a.vertical.size.value,ze(s.vertical.value),s.vertical.value))),a.vertical.style=i(()=>Q(M(M({},e.thumbStyle),e.verticalThumbStyle),{top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=i(()=>{const l=a.horizontal.size.value-s.horizontal.value;if(l<=0)return 0;const o=$(Math.abs(a.horizontal.position.value)/l,0,1);return Math.round(o*1e4)/1e4}),a.horizontal.thumbHidden=i(()=>(e.visible===null?z.value:e.visible)!==!0&&x.value===!1&&y.value===!1||a.horizontal.size.value<=s.horizontal.value+1),a.horizontal.thumbStart=i(()=>a.horizontal.percentage.value*(s.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=i(()=>Math.round($(s.horizontal.value*s.horizontal.value/a.horizontal.size.value,ze(s.horizontal.value),s.horizontal.value))),a.horizontal.style=i(()=>Q(M(M({},e.thumbStyle),e.horizontalThumbStyle),{[C.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const f=i(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),p=[[E,l=>{X(l,"vertical")},void 0,M({vertical:!0},ye)]],S=[[E,l=>{X(l,"horizontal")},void 0,M({horizontal:!0},ye)]];function c(){const l={};return me.forEach(o=>{const n=a[o];l[o+"Position"]=n.position.value,l[o+"Percentage"]=n.percentage.value,l[o+"Size"]=n.size.value,l[o+"ContainerSize"]=s[o].value}),l}const F=Fe(()=>{const l=c();l.ref=C,v("scroll",l)},0);function R(l,o,n){if(me.includes(l)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(l==="vertical"?de:oe)(m.value,o,n)}function U({height:l,width:o}){let n=!1;s.vertical.value!==l&&(s.vertical.value=l,n=!0),s.horizontal.value!==o&&(s.horizontal.value=o,n=!0),n===!0&&T()}function V({position:l}){let o=!1;a.vertical.position.value!==l.top&&(a.vertical.position.value=l.top,o=!0),a.horizontal.position.value!==l.left&&(a.horizontal.position.value=l.left,o=!0),o===!0&&T()}function D({height:l,width:o}){a.horizontal.size.value!==o&&(a.horizontal.size.value=o,T()),a.vertical.size.value!==l&&(a.vertical.size.value=l,T())}function X(l,o){const n=a[o];if(l.isFirst===!0){if(n.thumbHidden.value===!0)return;L=n.position.value,y.value=!0}else if(y.value!==!0)return;l.isFinal===!0&&(y.value=!1);const q=ue[o],j=s[o].value,Z=(n.size.value-j)/(j-n.thumbSize.value),ee=l.distance[q.dist],J=L+(l.direction===q.dir?1:-1)*ee*Z;I(J,o)}function Y(l,o){const n=a[o];if(n.thumbHidden.value!==!0){const q=l[ue[o].offset];if(q<n.thumbStart.value||q>n.thumbStart.value+n.thumbSize.value){const j=q-n.thumbSize.value/2;I(j/s[o].value*n.size.value,o)}n.ref.value!==null&&n.ref.value.dispatchEvent(new MouseEvent(l.type,l))}}function W(l){Y(l,"vertical")}function k(l){Y(l,"horizontal")}function T(){x.value=!0,r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,x.value=!1},e.delay),e.onScroll!==void 0&&F()}function I(l,o){m.value[ue[o].scroll]=l}function O(){z.value=!0}function N(){z.value=!1}let H=null;return b(()=>C.$q.lang.rtl,l=>{m.value!==null&&oe(m.value,Math.abs(a.horizontal.position.value)*(l===!0?-1:1))}),Re(()=>{H={top:a.vertical.position.value,left:a.horizontal.position.value}}),Ve(()=>{if(H===null)return;const l=m.value;l!==null&&(oe(l,H.left),de(l,H.top))}),_e(F.cancel),Object.assign(C,{getScrollTarget:()=>m.value,getScroll:c,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:R,setScrollPercentage(l,o,n){R(l,o*(a[l].size.value-s[l].value)*(l==="horizontal"&&C.$q.lang.rtl===!0?-1:1),n)}}),()=>w("div",{class:A.value,onMouseenter:O,onMouseleave:N},[w("div",{ref:m,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[w("div",{class:"q-scrollarea__content absolute",style:f.value},Ie(d.default,[w(be,{debounce:0,onResize:D})])),w(tt,{axis:"both",onScroll:V})]),w(be,{debounce:0,onResize:U}),w("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:W}),w("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:k}),ne(w("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),p),ne(w("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),S)])}});const Se=150;var st=ge({name:"QDrawer",inheritAttrs:!1,props:Q(M(M({},Ne),we),{side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean}),emits:[...Ee,"onLayout","miniState"],setup(e,{slots:d,emit:v,attrs:x}){const y=ke(),{proxy:{$q:z}}=y,s=qe(e,z),{preventBodyScroll:a}=et(),{registerTimeout:C,removeTimeout:G}=Ue(),r=Xe(Ye,ie);if(r===ie)return console.error("QDrawer needs to be child of QLayout"),ie;let L,m=null,A;const f=h(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),p=i(()=>e.mini===!0&&f.value!==!0),S=i(()=>p.value===!0?e.miniWidth:e.width),c=h(e.showIfAbove===!0&&f.value===!1?!0:e.modelValue===!0),F=i(()=>e.persistent!==!0&&(f.value===!0||j.value===!0));function R(t,u){if(X(),t!==!1&&r.animate(),_(0),f.value===!0){const g=r.instances[l.value];g!==void 0&&g.belowBreakpoint===!0&&g.hide(!1),B(1),r.isContainer.value!==!0&&a(!0)}else B(0),t!==!1&&ae(!1);C(()=>{t!==!1&&ae(!0),u!==!0&&v("show",t)},Se)}function U(t,u){Y(),t!==!1&&r.animate(),B(0),_(T.value*S.value),le(),u!==!0?C(()=>{v("hide",t)},Se):G()}const{show:V,hide:D}=Je({showing:c,hideOnRouteChange:F,handleShow:R,handleHide:U}),{addToHistory:X,removeFromHistory:Y}=Ke(c,D,F),W={belowBreakpoint:f,hide:D},k=i(()=>e.side==="right"),T=i(()=>(z.lang.rtl===!0?-1:1)*(k.value===!0?1:-1)),I=h(0),O=h(!1),N=h(!1),H=h(S.value*T.value),l=i(()=>k.value===!0?"left":"right"),o=i(()=>c.value===!0&&f.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:S.value:0),n=i(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(k.value?"R":"L")>-1||z.platform.is.ios===!0&&r.isContainer.value===!0),q=i(()=>e.overlay===!1&&c.value===!0&&f.value===!1),j=i(()=>e.overlay===!0&&c.value===!0&&f.value===!1),Z=i(()=>"fullscreen q-drawer__backdrop"+(c.value===!1&&O.value===!1?" hidden":"")),ee=i(()=>({backgroundColor:`rgba(0,0,0,${I.value*.4})`})),J=i(()=>k.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),Te=i(()=>k.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),Me=i(()=>{const t={};return r.header.space===!0&&J.value===!1&&(n.value===!0?t.top=`${r.header.offset}px`:r.header.space===!0&&(t.top=`${r.header.size}px`)),r.footer.space===!0&&Te.value===!1&&(n.value===!0?t.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(t.bottom=`${r.footer.size}px`)),t}),Ce=i(()=>{const t={width:`${S.value}px`,transform:`translateX(${H.value}px)`};return f.value===!0?t:Object.assign(t,Me.value)}),Oe=i(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),Be=i(()=>`q-drawer q-drawer--${e.side}`+(N.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(O.value===!0?" no-transition":c.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${p.value===!0?"mini":"standard"}`+(n.value===!0||q.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(J.value===!0?" q-drawer--top-padding":""))),Pe=i(()=>{const t=z.lang.rtl===!0?e.side:l.value;return[[E,pe,void 0,{[t]:!0,mouse:!0}]]}),$e=i(()=>{const t=z.lang.rtl===!0?l.value:e.side;return[[E,se,void 0,{[t]:!0,mouse:!0}]]}),xe=i(()=>{const t=z.lang.rtl===!0?l.value:e.side;return[[E,se,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function te(){De(f,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}b(f,t=>{t===!0?(L=c.value,c.value===!0&&D(!1)):e.overlay===!1&&e.behavior!=="mobile"&&L!==!1&&(c.value===!0?(_(0),B(0),le()):V(!1))}),b(()=>e.side,(t,u)=>{r.instances[u]===W&&(r.instances[u]=void 0,r[u].space=!1,r[u].offset=0),r.instances[t]=W,r[t].size=S.value,r[t].space=q.value,r[t].offset=o.value}),b(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&te()}),b(()=>e.behavior+e.breakpoint,te),b(r.isContainer,t=>{c.value===!0&&a(t!==!0),t===!0&&te()}),b(r.scrollbarWidth,()=>{_(c.value===!0?0:void 0)}),b(o,t=>{P("offset",t)}),b(q,t=>{v("onLayout",t),P("space",t)}),b(k,()=>{_()}),b(S,t=>{_(),re(e.miniToOverlay,t)}),b(()=>e.miniToOverlay,t=>{re(t,S.value)}),b(()=>z.lang.rtl,()=>{_()}),b(()=>e.mini,()=>{e.modelValue===!0&&(Ae(),r.animate())}),b(p,t=>{v("miniState",t)});function _(t){t===void 0?fe(()=>{t=c.value===!0?0:S.value,_(T.value*t)}):(r.isContainer.value===!0&&k.value===!0&&(f.value===!0||Math.abs(t)===S.value)&&(t+=T.value*r.scrollbarWidth.value),H.value=t)}function B(t){I.value=t}function ae(t){const u=t===!0?"remove":r.isContainer.value!==!0?"add":"";u!==""&&document.body.classList[u]("q-body--drawer-toggle")}function Ae(){m!==null&&clearTimeout(m),y.proxy&&y.proxy.$el&&y.proxy.$el.classList.add("q-drawer--mini-animate"),N.value=!0,m=setTimeout(()=>{m=null,N.value=!1,y&&y.proxy&&y.proxy.$el&&y.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function pe(t){if(c.value!==!1)return;const u=S.value,g=$(t.distance.x,0,u);if(t.isFinal===!0){g>=Math.min(75,u)===!0?V():(r.animate(),B(0),_(T.value*u)),O.value=!1;return}_((z.lang.rtl===!0?k.value!==!0:k.value)?Math.max(u-g,0):Math.min(0,g-u)),B($(g/u,0,1)),t.isFirst===!0&&(O.value=!0)}function se(t){if(c.value!==!0)return;const u=S.value,g=t.direction===e.side,K=(z.lang.rtl===!0?g!==!0:g)?$(t.distance.x,0,u):0;if(t.isFinal===!0){Math.abs(K)<Math.min(75,u)===!0?(r.animate(),B(1),_(0)):D(),O.value=!1;return}_(T.value*K),B($(1-K/u,0,1)),t.isFirst===!0&&(O.value=!0)}function le(){a(!1),ae(!0)}function P(t,u){r.update(e.side,t,u)}function De(t,u){t.value!==u&&(t.value=u)}function re(t,u){P("size",t===!0?e.miniWidth:u)}return r.instances[e.side]=W,re(e.miniToOverlay,S.value),P("space",q.value),P("offset",o.value),e.showIfAbove===!0&&e.modelValue!==!0&&c.value===!0&&e["onUpdate:modelValue"]!==void 0&&v("update:modelValue",!0),Ge(()=>{v("onLayout",q.value),v("miniState",p.value),L=e.showIfAbove===!0;const t=()=>{(c.value===!0?R:U)(!1,!0)};if(r.totalWidth.value!==0){fe(t);return}A=b(r.totalWidth,()=>{A(),A=void 0,c.value===!1&&e.showIfAbove===!0&&f.value===!1?V(!1):t()})}),_e(()=>{A!==void 0&&A(),m!==null&&(clearTimeout(m),m=null),c.value===!0&&le(),r.instances[e.side]===W&&(r.instances[e.side]=void 0,P("size",0),P("offset",0),P("space",!1))}),()=>{const t=[];f.value===!0&&(e.noSwipeOpen===!1&&t.push(ne(w("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Pe.value)),t.push(he("div",{ref:"backdrop",class:Z.value,style:ee.value,"aria-hidden":"true",onClick:D},void 0,"backdrop",e.noSwipeBackdrop!==!0&&c.value===!0,()=>xe.value)));const u=p.value===!0&&d.mini!==void 0,g=[w("div",Q(M({},x),{key:""+u,class:[Oe.value,x.class]}),u===!0?d.mini():Ze(d.default))];return e.elevated===!0&&c.value===!0&&g.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(he("aside",{ref:"content",class:Be.value,style:Ce.value},g,"contentclose",e.noSwipeClose!==!0&&f.value===!0,()=>$e.value)),w("div",{class:"q-drawer-container"},t)}}});export{nt as Q,st as a};
