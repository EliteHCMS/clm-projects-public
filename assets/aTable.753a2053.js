import{a4 as q,y as i,ap as u,au as B,a7 as m,bq as o,B as r,D as p,ab as d,bV as $,aq as C,b3 as Q,A as v,aa as T,aG as V,d as f,bP as N,E as P}from"./index.a03c16e1.js";import{Q as S}from"./QTd.a2e291df.js";import{Q as _}from"./QTable.c2e23d38.js";const z={class:"full-width row flex-center text-primary q-gutter-sm"},j={__name:"aTable",props:{downloadButton:{type:Boolean,default:!1}},emits:["download"],setup(b,{emit:w}){const h=b,{downloadButton:c}=q(h),y=()=>{w("download")},g=(e,l,t,a)=>{const s=l?l.toLowerCase().trim():"";return e.filter(k=>Object.entries(k).some(x=>{const n=x+"";return(n==="undefined"||n==="null"?"":n.toLowerCase()).indexOf(s)!==-1}))};return(e,l)=>(i(),u(_,P(e.$attrs,{dense:"","title-class":e.$q.screen.gt.sm?"text-primary text-h6":"text-primary text-body1","table-header-class":"bg-dark text-white",color:"accent","no-data-label":"No records found.","no-results-label":"Search found no records.","filter-method":g,class:"q-pa-sm"}),B({"body-cell-index":o(t=>[f(S,{props:t},{default:o(()=>[r("div",null,d(t.rowIndex+1),1)]),_:2},1032,["props"])]),"no-data":o(({icon:t,message:a,filter:s})=>[r("div",z,[r("span",null,d(a),1),f(N,{size:"2em",name:s?"search":t},null,8,["name"])])]),_:2},[m(c)===!0?{name:"top-right",fn:o(()=>[r("div",{class:p(["text-dark text-caption text-italic",e.$q.screen.lt.sm?"offset-xs-5":""])},"(Total: "+d(e.$attrs.rows.length)+")",3),m(c)===!0?(i(),u($,{key:0,dense:"",class:p(["q-ml-sm",e.$q.screen.lt.sm?"full-width":""]),color:"primary",label:"Download",disable:e.$attrs.rows.length<1,onClick:y},null,8,["class","disable"])):C("",!0)]),key:"0"}:void 0,Q(e.$slots,(t,a)=>({name:a,fn:o(s=>[v(e.$slots,a,T(V(s)))])}))]),1040,["title-class"]))}};export{j as _};
