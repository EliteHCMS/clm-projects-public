import{bZ as ee,c2 as te,c4 as oe,c5 as ae,r as O,c as f,c7 as ne,c8 as ie,c9 as le,ca as se,cb as re,w as C,aV as E,c_ as k,cZ as x,cg as ue,h as H,by as ce,g as de,b_ as fe,cl as ve}from"./index.8838c464.js";import{u as he,v as A,a as ge,b as me,c as ye,r as q,s as Te,p as D,d as be}from"./position-engine.cba8bd09.js";import{c as M}from"./selection.26380b58.js";var we=ee({name:"QTooltip",inheritAttrs:!1,props:{...he,...te,...oe,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:ge},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...ae],setup(e,{slots:j,emit:y,attrs:v}){let i,l;const h=de(),{proxy:{$q:o}}=h,s=O(null),c=O(!1),L=f(()=>D(e.anchor,o.lang.rtl)),_=f(()=>D(e.self,o.lang.rtl)),Q=f(()=>e.persistent!==!0),{registerTick:W,removeTick:B}=ne(),{registerTimeout:d}=ie(),{transitionProps:N,transitionStyle:R}=le(e),{localScrollTarget:T,changeScrollEvent:V,unconfigureScrollTarget:Z}=me(e,P),{anchorEl:a,canShow:I,anchorEvents:r}=ye({showing:c,configureAnchorEl:K}),{show:U,hide:g}=se({showing:c,canShow:I,handleShow:z,handleHide:F,hideOnRouteChange:Q,processOnMount:!0});Object.assign(r,{delayShow:G,delayHide:J});const{showPortal:b,hidePortal:p,renderPortal:$}=re(h,s,Y,"tooltip");if(o.platform.is.mobile===!0){const t={anchorEl:a,innerRef:s,onClickOutside(n){return g(n),n.target.classList.contains("q-dialog__backdrop")&&ve(n),!0}},m=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);C(m,n=>{(n===!0?be:q)(t)}),E(()=>{q(t)})}function z(t){b(),W(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),P()}),i===void 0&&(i=C(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,u)),d(()=>{b(!0),y("show",t)},e.transitionDuration)}function F(t){B(),p(),S(),d(()=>{p(!0),y("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),Z(),k(r,"tooltipTemp")}function u(){Te({targetEl:s.value,offset:e.offset,anchorEl:a.value,anchorOrigin:L.value,selfOrigin:_.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function G(t){if(o.platform.is.mobile===!0){M(),document.body.classList.add("non-selectable");const m=a.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[m,w,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{U(t)},e.delay)}function J(t){o.platform.is.mobile===!0&&(k(r,"tooltipTemp"),M(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{g(t)},e.hideDelay)}function K(){if(e.noParentEvent===!0||a.value===null)return;const t=o.platform.is.mobile===!0?[[a.value,"touchstart","delayShow","passive"]]:[[a.value,"mouseenter","delayShow","passive"],[a.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function P(){if(a.value!==null||e.scrollTarget!==void 0){T.value=ue(a.value,e.scrollTarget);const t=e.noParentEvent===!0?u:g;V(T.value,t)}}function X(){return c.value===!0?H("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,R.value],role:"tooltip"},fe(j.default)):null}function Y(){return H(ce,N.value,X)}return E(S),Object.assign(h.proxy,{updatePosition:u}),$}});export{we as Q};
