import{S as h}from"./public.74b6a4e1.js";import{p as D}from"./path.1400e915.js";import{c as s}from"./data.527e3bf3.js";import{a as l,b as x,c as B}from"./api.c6d946e3.js";import{F as v}from"./FlashOutline.d02c0a1e.js";import{A as F,R as k}from"./RefreshCircleOutline.9daf51b0.js";import{e as N,r as z,v as b,A as w,B as t,I as A,C as e,D as n,y as p,_ as u,h as r}from"./index.8b05d2db.js";import{u as O}from"./use-notification.f01e528c.js";import{N as I}from"./Icon.f91ce72e.js";import{_ as c}from"./Space.8b851021.js";import{_ as V}from"./Input.2a55a58b.js";import{_ as $}from"./DataTable.da1bfc19.js";import"./index.80337ce4.js";import"./base.12718b58.js";import"./use-merged-state.9d6ecddd.js";import"./get-slot.40f09d44.js";import"./Checkbox.6643e550.js";import"./Tooltip.46b12594.js";import"./next-frame-once.da993024.js";import"./Dropdown.03da667d.js";import"./create.eac446e4.js";import"./Ellipsis.c629414d.js";import"./Pagination.44131b6c.js";import"./Tag.45a4c426.js";const R={style:{display:"flex","align-items":"center",height:"100%"}},S={style:{display:"flex","align-items":"center",height:"100%"}},se=N({__name:"PanelCategory",setup(j){D.value=[{name:"\u5206\u7C7B",params:null,to:""}];const _=z([{title:"ID",key:"id",width:100,align:"center"},{title:"\u540D\u5B57",key:"name",align:"center",render(a,o){return r(h,{value:a.name,onUpdateValue(i){s.value[o].name=i}})}},{title:"\u91C7\u96C6\u7C7B\u6570",key:"classNum",width:100,align:"center"},{title:"\u5F71\u7247\u6570",key:"movieNum",width:100,align:"center"},{title:"\u64CD\u4F5C",key:"action",width:"150px",align:"center",render(a,o){return r(c,{justify:"center"},()=>[a.create?r(u,{secondary:!0,type:"info",size:"small",onClick:()=>{x(a.name).then(()=>{l(),m.success({duration:2e3,content:"\u4FDD\u5B58",meta:"\u64CD\u4F5C\u6210\u529F"})})}},()=>"\u4FDD\u5B58"):null,r(u,{secondary:!0,type:"error",size:"small",onClick:()=>{B(a.id).then(()=>{l(),m.success({duration:2e3,content:"\u5220\u9664",meta:"\u64CD\u4F5C\u6210\u529F"})})}},()=>"\u5220\u9664")])}}]),m=O();function d(){s.value.push({id:0,name:"\u5F85\u4FDD\u5B58\u5206\u7C7B",classNum:0,movieNum:0,create:!0})}return(a,o)=>{const i=I,f=V,C=$,y=A;return b(),w(y,{title:"\u5206\u7C7B\u7BA1\u7406",size:"small"},{"header-extra":t(()=>[e(n(c),null,{default:t(()=>[e(f,{placeholder:"\u641C\u7D22",disabled:!0,round:""},{prefix:t(()=>[e(i,{component:n(v)},null,8,["component"])]),_:1}),p("div",R,[e(n(u),{text:"",type:"primary",style:{"font-size":"24px"},onClick:o[0]||(o[0]=g=>d())},{default:t(()=>[e(i,null,{default:t(()=>[e(n(F))]),_:1})]),_:1})]),p("div",S,[e(n(u),{text:"",type:"info",style:{"font-size":"24px"},onClick:o[1]||(o[1]=g=>n(l)())},{default:t(()=>[e(i,null,{default:t(()=>[e(n(k))]),_:1})]),_:1})])]),_:1})]),default:t(()=>[e(C,{columns:_.value,data:n(s),bordered:!1,"single-line":!1},null,8,["columns","data"])]),_:1})}}});export{se as default};