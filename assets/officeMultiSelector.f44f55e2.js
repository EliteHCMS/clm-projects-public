import{Q,a as M}from"./QSelect.b38e663e.js";import{a4 as U,bU as p,y as L,ap as T,au as V,b3 as $,bq as s,A as k,aa as m,aG as v,d as r,bQ as w,bO as S,ds as y,E as B,a7 as a}from"./index.a03c16e1.js";import{u as I,c as P}from"./app.8e730c48.js";const A={__name:"officeMultiSelector",props:{can:{type:String,default:"read"},twilio:{type:Boolean,default:!1}},setup(b){const g=b,{can:t,twilio:c}=U(g),_=I(),f=P(),{userOffices:l}=p(_),{setMultiSelectedOffice:u}=f,{getSelectedMultiOffice:n}=p(f);n.value.length===0&&(l.value(t.value).length>1&&l.value(t.value).forEach(e=>{e[15]===!0&&u([e],!0)}),n.value.length===0&&u([l.value(t.value)[0]],!0));const h=e=>{e||(e=[]),u(e,!0)};return(e,R)=>(L(),T(M,B({"model-value":a(n),options:a(l)(a(t),a(c))},e.$attrs,{"onUpdate:modelValue":h,label:a(n)?"Office":"Select Office","option-label":"11","option-value":"8",multiple:!0,"stack-label":"",clearable:a(l)(a(t),a(c)).length>1,dense:""}),V({option:s(({itemProps:d,opt:o,selected:i,toggleOption:O})=>[r(w,m(v(d)),{default:s(()=>[r(S,null,{default:s(()=>[r(Q,{innerHTML:o[11]},null,8,["innerHTML"])]),_:2},1024),r(S,{side:""},{default:s(()=>[r(y,{"model-value":i,"onUpdate:modelValue":E=>O(o)},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024)]),_:2},1040)]),_:2},[$(e.$slots,(d,o)=>({name:o,fn:s(i=>[k(e.$slots,o,m(v(i)))])}))]),1040,["model-value","options","label","clearable"]))}};export{A as _};
