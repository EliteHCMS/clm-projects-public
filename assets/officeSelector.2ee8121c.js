import{a as y}from"./QSelect.b38e663e.js";import{a4 as g,bU as f,y as B,ap as O,au as h,b3 as _,bq as u,A as $,aa as k,aG as w,a7 as e,B as D,D as P,ab as R,E as U}from"./index.a03c16e1.js";import{u as q,c as z}from"./app.8e730c48.js";const E={__name:"officeSelector",props:{can:{type:String,default:"read"},twilio:{type:Boolean,default:!1},styleSelection:{type:Boolean,default:!1}},setup(p){const d=p,{can:t,twilio:o,styleSelection:m}=g(d),S=q(),l=z(),{userOffices:s}=f(S),{setSelectedOffice:r}=l,{getSelectedOffice:n}=f(l);s.value(t.value,o.value).length===1&&r(s.value(t.value)[0],!0);const b=a=>{r(a,!0)};return(a,C)=>(B(),O(y,U({"model-value":e(n),options:e(s)(e(t),e(o))},a.$attrs,{"onUpdate:modelValue":b,label:e(n)?"Office":"Select Office","option-label":"11","option-value":"8",clearable:e(s)(e(t),e(o)).length>1,dense:""}),h({_:2},[_(a.$slots,(c,i)=>({name:i,fn:u(v=>[$(a.$slots,i,k(w(v)))])})),e(m)?{name:"selected-item",fn:u(c=>[D("span",{class:P(["text-primary",a.$q.screen.gt.sm?"text-h6":""])},R(c.opt[11]),3)]),key:"0"}:void 0]),1040,["model-value","options","label","clearable"]))}};export{E as _};
