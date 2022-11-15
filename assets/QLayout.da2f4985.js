var K=Object.defineProperty;var E=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var F=(e,i,t)=>i in e?K(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,M=(e,i)=>{for(var t in i||(i={}))N.call(i,t)&&F(e,t,i[t]);if(E)for(var t of E(i))V.call(i,t)&&F(e,t,i[t]);return e};import{bP as L,i as D,bR as C,bS as B,aU as U,c as u,h as f,bQ as I,g as R,cl as Y,w as T,c7 as _,o as k,aL as G,n as J,cm as X,cn as Z,co as ee,r as p,cp as te,cq as P,Y as x,a as oe,ch as ne}from"./index.df995f5f.js";import{Q as O}from"./QResizeObserver.b8913258.js";var ce=L({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:t}}=R(),n=D(B,C);if(n===C)return console.error("QPageContainer needs to be child of QLayout"),C;U(Y,!0);const a=u(()=>{const s={};return n.header.space===!0&&(s.paddingTop=`${n.header.size}px`),n.right.space===!0&&(s[`padding${t.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(s.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(s[`padding${t.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),s});return()=>f("div",{class:"q-page-container",style:a.value},I(i.default))}});const{passive:W}=X,ie=["both","horizontal","vertical"];var le=L({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ie.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:i}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,a,s;T(()=>e.scrollTarget,()=>{v(),b()});function d(){n!==null&&n();const h=Math.max(0,Z(a)),m=ee(a),c={top:h-t.position.top,left:m-t.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const w=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";t.position={top:h,left:m},t.directionChanged=t.direction!==w,t.delta=c,t.directionChanged===!0&&(t.direction=w,t.inflectionPoint=t.position),i("scroll",M({},t))}function b(){a=_(s,e.scrollTarget),a.addEventListener("scroll",r,W),r(!0)}function v(){a!==void 0&&(a.removeEventListener("scroll",r,W),a=void 0)}function r(h){if(h===!0||e.debounce===0||e.debounce==="0")d();else if(n===null){const[m,c]=e.debounce?[setTimeout(d,e.debounce),clearTimeout]:[requestAnimationFrame(d),cancelAnimationFrame];n=()=>{c(m),n=null}}}const{proxy:y}=R();return T(()=>y.$q.lang.rtl,d),k(()=>{s=y.$el.parentNode,b()}),G(()=>{n!==null&&n(),v()}),Object.assign(y,{trigger:r,getPosition:()=>t}),J}}),ue=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:t}){const{proxy:{$q:n}}=R(),a=p(null),s=p(n.screen.height),d=p(e.container===!0?0:n.screen.width),b=p({position:0,direction:"down",inflectionPoint:0}),v=p(0),r=p(te.value===!0?0:P()),y=u(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),h=u(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),m=u(()=>r.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),c=u(()=>r.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function w(o){if(e.container===!0||document.qScrollPrevented!==!0){const l={position:o.position.top,direction:o.direction,directionChanged:o.directionChanged,inflectionPoint:o.inflectionPoint.top,delta:o.delta.top};b.value=l,e.onScroll!==void 0&&t("scroll",l)}}function j(o){const{height:l,width:g}=o;let S=!1;s.value!==l&&(S=!0,s.value=l,e.onScrollHeight!==void 0&&t("scrollHeight",l),q()),d.value!==g&&(S=!0,d.value=g),S===!0&&e.onResize!==void 0&&t("resize",o)}function A({height:o}){v.value!==o&&(v.value=o,q())}function q(){if(e.container===!0){const o=s.value>v.value?P():0;r.value!==o&&(r.value=o)}}let z;const Q={instances:{},view:u(()=>e.view),isContainer:u(()=>e.container),rootRef:a,height:s,containerHeight:v,scrollbarWidth:r,totalWidth:u(()=>d.value+r.value),rows:u(()=>{const o=e.view.toLowerCase().split(" ");return{top:o[0].split(""),middle:o[1].split(""),bottom:o[2].split("")}}),header:x({size:0,offset:0,space:!1}),right:x({size:300,offset:0,space:!1}),footer:x({size:0,offset:0,space:!1}),left:x({size:300,offset:0,space:!1}),scroll:b,animate(){z!==void 0?clearTimeout(z):document.body.classList.add("q-body--layout-animate"),z=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),z=void 0},155)},update(o,l,g){Q[o][l]=g}};if(U(B,Q),P()>0){let g=function(){o=null,l.classList.remove("hide-scrollbar")},S=function(){if(o===null){if(l.scrollHeight>n.screen.height)return;l.classList.add("hide-scrollbar")}else clearTimeout(o);o=setTimeout(g,300)},$=function(H){o!==null&&H==="remove"&&(clearTimeout(o),g()),window[`${H}EventListener`]("resize",S)},o=null;const l=document.body;T(()=>e.container!==!0?"add":"remove",$),e.container!==!0&&$("add"),oe(()=>{$("remove")})}return()=>{const o=ne(i.default,[f(le,{onScroll:w}),f(O,{onResize:j})]),l=f("div",{class:y.value,style:h.value,ref:e.container===!0?void 0:a,tabindex:-1},o);return e.container===!0?f("div",{class:"q-layout-container overflow-hidden",ref:a},[f(O,{onResize:A}),f("div",{class:"absolute-full",style:m.value},[f("div",{class:"scroll",style:c.value},[l])])]):l}}});export{ue as Q,ce as a,le as b};
