var Q=Object.defineProperty,z=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var C=(e,t,o)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,y=(e,t)=>{for(var o in t||(t={}))N.call(t,o)&&C(e,o,t[o]);if(x)for(var o of x(t))j.call(t,o)&&C(e,o,t[o]);return e},h=(e,t)=>z(e,D(t));import{bP as K,cW as E,cN as U,cX as W,dm as X,r as G,c as f,aM as J,h as A,ch as O,bI as T,g as Y,dn as Z,cd as p,cb as S}from"./index.d156221a.js";var le=K({name:"QRating",props:h(y(y({},E),U),{modelValue:{type:Number,required:!0},max:{type:[String,Number],default:5},icon:[String,Array],iconHalf:[String,Array],iconSelected:[String,Array],iconAriaLabel:[String,Array],color:[String,Array],colorHalf:[String,Array],colorSelected:[String,Array],noReset:Boolean,noDimming:Boolean,readonly:Boolean,disable:Boolean}),emits:["update:modelValue"],setup(e,{slots:t,emit:o}){const{proxy:{$q:b}}=Y(),V=W(e),q=X(e),M=Z(q),r=G(0);let s={};const g=f(()=>e.readonly!==!0&&e.disable!==!0),_=f(()=>`q-rating row inline items-center q-rating--${g.value===!0?"":"non-"}editable`+(e.noDimming===!0?" q-rating--no-dimming":"")+(e.disable===!0?" disabled":"")+(e.color!==void 0&&Array.isArray(e.color)===!1?` text-${e.color}`:"")),B=f(()=>{const a=Array.isArray(e.icon)===!0?e.icon.length:0,n=Array.isArray(e.iconSelected)===!0?e.iconSelected.length:0,c=Array.isArray(e.iconHalf)===!0?e.iconHalf.length:0,u=Array.isArray(e.color)===!0?e.color.length:0,d=Array.isArray(e.colorSelected)===!0?e.colorSelected.length:0,l=Array.isArray(e.colorHalf)===!0?e.colorHalf.length:0;return{iconLen:a,icon:a>0?e.icon[a-1]:e.icon,selIconLen:n,selIcon:n>0?e.iconSelected[n-1]:e.iconSelected,halfIconLen:c,halfIcon:c>0?e.iconHalf[n-1]:e.iconHalf,colorLen:u,color:u>0?e.color[u-1]:e.color,selColorLen:d,selColor:d>0?e.colorSelected[d-1]:e.colorSelected,halfColorLen:l,halfColor:l>0?e.colorHalf[l-1]:e.colorHalf}}),F=f(()=>{if(typeof e.iconAriaLabel=="string"){const a=e.iconAriaLabel.length>0?`${e.iconAriaLabel} `:"";return n=>`${a}${n}`}if(Array.isArray(e.iconAriaLabel)===!0){const a=e.iconAriaLabel.length;if(a>0)return n=>e.iconAriaLabel[Math.min(n,a)-1]}return(a,n)=>`${n} ${a}`}),R=f(()=>{const a=[],n=B.value,c=Math.ceil(e.modelValue),u=g.value===!0?0:null,d=e.iconHalf===void 0||c===e.modelValue?-1:c;for(let l=1;l<=e.max;l++){const i=r.value===0&&e.modelValue>=l||r.value>0&&r.value>=l,m=d===l&&r.value<l,v=r.value>0&&(m===!0?c:e.modelValue)>=l&&r.value<l,H=m===!0?l<=n.halfColorLen?e.colorHalf[l-1]:n.halfColor:n.selColor!==void 0&&i===!0?l<=n.selColorLen?e.colorSelected[l-1]:n.selColor:l<=n.colorLen?e.color[l-1]:n.color,P=(m===!0?l<=n.halfIconLen?e.iconHalf[l-1]:n.halfIcon:n.selIcon!==void 0&&(i===!0||v===!0)?l<=n.selIconLen?e.iconSelected[l-1]:n.selIcon:l<=n.iconLen?e.icon[l-1]:n.icon)||b.iconSet.rating.icon;a.push({name:(m===!0?l<=n.halfIconLen?e.iconHalf[l-1]:n.halfIcon:n.selIcon!==void 0&&(i===!0||v===!0)?l<=n.selIconLen?e.iconSelected[l-1]:n.selIcon:l<=n.iconLen?e.icon[l-1]:n.icon)||b.iconSet.rating.icon,attrs:{tabindex:u,role:"radio","aria-checked":e.modelValue===l?"true":"false","aria-label":F.value(l,P)},iconClass:"q-rating__icon"+(i===!0||m===!0?" q-rating__icon--active":"")+(v===!0?" q-rating__icon--exselected":"")+(r.value===l?" q-rating__icon--hovered":"")+(H!==void 0?` text-${H}`:"")})}return a}),k=f(()=>{const a={role:"radiogroup"};return e.disable===!0&&(a["aria-disabled"]="true"),e.readonly===!0&&(a["aria-readonly"]="true"),a});function L(a){if(g.value===!0){const n=p(parseInt(a,10),1,parseInt(e.max,10)),c=e.noReset!==!0&&e.modelValue===n?0:n;c!==e.modelValue&&o("update:modelValue",c),r.value=0}}function I(a){g.value===!0&&(r.value=a)}function w(a,n){switch(a.keyCode){case 13:case 32:return L(n),S(a);case 37:case 40:return s[`rt${n-1}`]&&s[`rt${n-1}`].$el.focus(),S(a);case 39:case 38:return s[`rt${n+1}`]&&s[`rt${n+1}`].$el.focus(),S(a)}}function $(){r.value=0}return J(()=>{s={}}),()=>{const a=[];return R.value.forEach(({iconClass:n,name:c,attrs:u},d)=>{const l=d+1;a.push(A("div",h(y({key:l,ref:i=>{s[`rt${l}`]=i},class:"q-rating__icon-container flex flex-center"},u),{onClick(){L(l)},onMouseover(){I(l)},onMouseout:$,onFocus(){I(l)},onBlur:$,onKeyup(i){w(i,l)}}),O(t[`tip-${l}`],[A(T,{class:n,name:c})])))}),e.name!==void 0&&e.disable!==!0&&M(a,"push"),A("div",y({class:_.value,style:V.value},k.value),a)}}});export{le as Q};
